import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { useIsFocused, useFocusEffect } from "@react-navigation/native";
import { useSelector } from 'react-redux'
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker, AnimatedRegion, PROVIDER_GOOGLE } from "react-native-maps";
import exploreStyles from './ExploreStyles';
import mapStyles from './mapStyles'
import NftCard from '../Wallet/NftCard';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLocationArrow as faLocationArrowSolid, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faLocationArrow, faAngleLeft } from '@fortawesome/pro-light-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faLocationArrow, faLocationArrowSolid, faAngleLeft, faTimes)

let foregroundSubscription = null
let delta = { latitudeDelta: 0, longitudeDelta: 0 } 

const ExploreMain = ({ route, navigation, styles }) => {

    const isFocused = useIsFocused()
    const jwtToken = useSelector(state => state.auth.jwtToken)
    const { width, height } = Dimensions.get("window");

    const ASPECT_RATIO = width / height;
    const LATITUDE = 37.78825;
    const LONGITUDE = -122.4324;
    const LATITUDE_DELTA = 0.002;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

    let mapRef = useRef(null)
    let markerRef = useRef(null)

    const [trackingUserLocation, setTrackingUserLocation] = useState(true)
    const trackingUserRef = useRef(null)
    trackingUserRef.current = trackingUserLocation
    const [position, setPosition] = useState({ latitude: LATITUDE, longitude: LONGITUDE })
    // const [delta, setDelta] = useState({ latitudeDelta: LATITUDE_DELTA, longitudeDelta: LONGITUDE_DELTA })
    const [coordinate, setCoordinate] = useState(new AnimatedRegion({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: 0,
        longitudeDelta: 0
    }))

    const [visibleNfts, setVisibleNfts] = useState([])
    const [selectedNft, setSelectedNft] = useState(null)
    const [expandedNft, setExpandedNft] = useState(null)

    useFocusEffect(
        React.useCallback(() => {
            fetchNearbyNfts()
        }, [])
    );

    useEffect(() => {
        startForegroundTracking()

        return () => {
            foregroundSubscription?.remove()
        }
    }, [])

    useEffect(() => {
        delta = { latitudeDelta: LATITUDE_DELTA, longitudeDelta: LONGITUDE_DELTA }
        const requestPermissions = async () => {
          const foreground = await Location.requestForegroundPermissionsAsync()
        }
        requestPermissions()
    }, [])

    useEffect(() => {
        if (isFocused) {
            if (route?.params?.params?.referrer?.type === 'nft') {
                setSelectedNft(route?.params?.params?.referrer?.data)
            }
        }
    }, [isFocused])

    useEffect(() => {
        if (selectedNft) {
            const newCoordinate = {
                latitude: selectedNft.geolocation.lat,
                longitude: selectedNft.geolocation.lng,
                latitudeDelta: delta.latitudeDelta,
                longitudeDelta: delta.longitudeDelta
            }
            setTrackingUserLocation(false)
            setPosition({ latitude: selectedNft.geolocation.lat, longitude: selectedNft.geolocation.lng })
            mapRef.current?.animateToRegion(newCoordinate, 500)
        }
    }, [selectedNft])

    const fetchNearbyNfts = async () => {
        const fetchUrl = `https://api.roadtripnft.com/nft/get/all`;
        const data = { jwtToken };
        const resp = await axios.post(fetchUrl, data);
        setVisibleNfts(resp.data.filter((n) => n.geolocation));
    };

    const startForegroundTracking = async () => {
        const { granted } = await Location.getForegroundPermissionsAsync()
        if (!granted) {
            return
        }

        foregroundSubscription = await Location.watchPositionAsync(
            {
                // For better logs, we set the accuracy to the most sensitive option
                accuracy: Location.Accuracy.Highest,
                distanceInterval: 2
            },
            location => {
                if (trackingUserRef.current) {
                    const { latitude, longitude } = location.coords
                    const newCoordinate = {
                        latitude,
                        longitude,
                        latitudeDelta: delta.latitudeDelta,
                        longitudeDelta: delta.longitudeDelta
                    }
                    setPosition({ latitude, longitude })

                    mapRef.current?.animateToRegion(newCoordinate, 500)

                    if (Platform.OS === "android") {
                        if (markerRef) {
                            markerRef._component.animateMarkerToCoordinate(
                            newCoordinate,
                            500 // 500 is the duration to animate the marker
                            );
                        }
                    } else {
                        coordinate.timing({ ...newCoordinate, duration: 500 }).start();
                    }
                }
            }
        )
    }

    const resetLocation = async () => {
        const loc = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Highest })
        const newCoordinate = {
            latitude: loc.coords.latitude,
            longitude: loc.coords.longitude,
            latitudeDelta: delta.latitudeDelta,
            longitudeDelta: delta.longitudeDelta
        }
        setPosition({ latitude: loc.coords.latitude, longitude: loc.coords.longitude })

        mapRef.current?.animateToRegion(newCoordinate, 500)
        setTrackingUserLocation(true)
    }

    const updateNfts = (newData) => {
        const tempNfts = [...visibleNfts]
        const nftIdx = tempNfts.findIndex(n => n.id === newData.id)
        tempNfts[nftIdx] = newData
        setVisibleNfts(tempNfts)

        if (selectedNft) {
            setSelectedNft(newData)
        }
        if (expandedNft) {
            setExpandedNft(newData)
        }
    }

    const getMapRegion = () => ({
        latitude: position.latitude,
        longitude: position.longitude,
        latitudeDelta: delta.latitudeDelta,
        longitudeDelta: delta.longitudeDelta
    });

    const getFormattedDate = (dateStr) => {
        const date = new Date(dateStr)
        var year = date.getFullYear();
      
        var month = (1 + date.getMonth()).toString();
        month = month.length > 1 ? month : '0' + month;
      
        var day = date.getDate().toString();
        day = day.length > 1 ? day : '0' + day;
        
        return month + '/' + day + '/' + year;
    }

    const showBackButton = route?.params?.params?.referrer?.type === 'nft' || false
    const returnTo = route?.params?.params?.referrer?.from

    return (
        <View style={exploreStyles.exploreContainer}>
            <MapView
                ref={mapRef}
                provider={PROVIDER_GOOGLE}
                style={exploreStyles.map}
                showsUserLocation
                followsUserLocation
                loadingEnabled
                initialRegion={getMapRegion()}
                customMapStyle={mapStyles}
                onRegionChange={(region, details) => {
                    delta = {
                        latitudeDelta: region.latitudeDelta,
                        longitudeDelta: region.longitudeDelta
                    }
                    if (details?.isGesture) {
                        setTrackingUserLocation(false)
                    }
                }}
                onPress={() => {
                    if (selectedNft) {
                        setSelectedNft(null)
                    }
                }}
            >
                {visibleNfts.map((nft) => (
                    <Marker 
                        key={nft.id}
                        coordinate = {
                            {
                                latitude: Number(nft.geolocation.lat),
                                longitude: Number(nft.geolocation.lng)
                            }
                        }
                        onPress={() => setSelectedNft(nft)}
                    >
                        <View style={exploreStyles.nftMarker}>
                            <Image style={exploreStyles.nftMarkerImage} source={{ uri: nft.nftImage }} />
                        </View>
                    </Marker>
                ))}
            </MapView>
            {showBackButton && (
                <TouchableOpacity style={[exploreStyles.mapControlButton, exploreStyles.backButton]} onPress={() => navigation.navigate('Tabs', { screen: returnTo })}>
                    <FontAwesomeIcon icon={['fal', 'angle-left']} size={20} />
                </TouchableOpacity>
            )}
            <TouchableOpacity style={[exploreStyles.mapControlButton, exploreStyles.locationButton, { bottom: selectedNft ? 144 : 16}]} onPress={() => resetLocation()}>
                <FontAwesomeIcon icon={[trackingUserLocation ? 'fas' : 'fal', 'location-arrow']} size={20} />
            </TouchableOpacity>
            {selectedNft && (
                <TouchableOpacity onPress={() => setExpandedNft(selectedNft)}>
                    <View style={[exploreStyles.nftDetailContainer, { width: width - 32 }]}>
                        <TouchableOpacity style={exploreStyles.nftDetailClose} onPress={() => setSelectedNft(null)}>
                            <FontAwesomeIcon icon={['fas', 'times']} color="#545454" size={14} />
                        </TouchableOpacity>
                        <Image style={exploreStyles.nftDetailImage} source={{ uri: selectedNft.nftImage || selectedNft.image }} />
                        <View style={exploreStyles.nftDetailContent}>
                            <Text style={[styles.h5, styles.bold, { width: '80%', flex: 1 }]} numberOfLines={1}>{selectedNft.title}</Text>
                            {selectedNft.owned === 1 ? (
                                <Text style={[styles.size16, styles.grayMiddlest]}>Collected: {getFormattedDate(selectedNft.mintedDate)}</Text>
                            ) : (
                                <Text style={[styles.size16, styles.grayMiddlest]}>Tap for details</Text>
                            )}
                        </View>
                    </View>
                </TouchableOpacity>
            )}
            <NftCard navigation={navigation} styles={styles} selectedNft={expandedNft} setSelectedNft={setExpandedNft} updateNft={updateNfts} source="Explore" />
        </View>
    )
}

export default ExploreMain
