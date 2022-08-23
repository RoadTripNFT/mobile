import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Dimensions, Image, Modal, SafeAreaView, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes, faPlus } from '@fortawesome/pro-light-svg-icons';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
import nftCardStyles from './NftCardStyles';
import { useSelector } from 'react-redux';
library.add(faTimes, faLocationDot, faPlus)

const NftCard = ({ navigation, styles, selectedNft, setSelectedNft, updateNft, source }) => {

    const jwtToken = useSelector(state => state.auth.jwtToken)
    const imgSize = Dimensions.get('window').width - 16
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        if (selectedNft) {
            setModalVisible(true)
        } else  {
            setModalVisible(false)
        }
    }, [selectedNft])

    const collectNft = async () => {
        const url = `https://api.roadtripnft.com/nft/submit/collect`;
        const payload = {
            jwtToken: jwtToken,
            nftIdentifier: selectedNft.uniqueName
        }
        const resp = await axios.post(url, payload);
        if (resp.data.msg === 'collected') {
            updateNft({
                ...selectedNft,
                owned: 1
            })
        } else {

        }
    }

    const viewOnMap = () => {
        navigation.navigate('Explore', { params: { referrer: { from: source, type: 'nft', data: selectedNft }} })
        setModalVisible(false)
        setSelectedNft(null)
    }

    const getFormattedDate = (dateStr) => {
        const date = new Date(dateStr)
        var year = date.getFullYear();
      
        var month = (1 + date.getMonth()).toString();
        month = month.length > 1 ? month : '0' + month;
      
        var day = date.getDate().toString();
        day = day.length > 1 ? day : '0' + day;
        
        return month + '/' + day + '/' + year;
    }

    if (!selectedNft) {
        return null
    }

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setSelectedNft(null);
            }}
        >
            <SafeAreaView style={nftCardStyles.nftCardWrapper}>
                <View style={nftCardStyles.nftCardContainer}>
                    <TouchableOpacity style={[styles.circleButton, styles.circleButtonRaised, nftCardStyles.closeButton]} onPress={() => setSelectedNft(null)}>
                        <FontAwesomeIcon icon={['fal', 'times']} />
                    </TouchableOpacity>
                    <Image style={[ nftCardStyles.nftCardImage, { height: imgSize} ]} source={{ uri: selectedNft.image || selectedNft.nftImage }} />
                    <View style={nftCardStyles.nftCardHeader}>
                        <Text style={[ styles.h3, styles.bold ]}>{selectedNft.title}</Text>
                        <View style={nftCardStyles.nftCardLocation}>
                            <FontAwesomeIcon icon={['fas', 'location-dot']} color="#F35D71" />
                            <Text style={[styles.grayMiddlest, styles.size16, { marginLeft: 5, marginTop: -2 }]}>{selectedNft.city}, {selectedNft.state}</Text>
                        </View>
                    </View>
                    <ScrollView contentContainerStyle={{flexGrow: 1}}>
                        <View style={nftCardStyles.nftCardContent}>
                            <Text style={[styles.grayMiddlest, styles.size16]}>{selectedNft.description}</Text>
                            <Text style={[styles.h4, styles.bold, { marginTop: 14, marginBottom: 6 }]}>Details</Text>
                            {selectedNft.owned === 1 && (
                                <View style={{ flexDirection: 'row', marginBottom: 6 }}>
                                    <Text style={[styles.size16, { flex: 1 }]}>Collected On</Text>
                                    <Text style={[styles.grayMiddlest, styles.size16]}>{getFormattedDate(selectedNft.mintedDate)}</Text>
                                </View>
                            )}
                            <View style={{ flexDirection: 'row', marginBottom: 6 }}>
                                <Text style={[styles.size16, { flex: 1 }]}>Date Published</Text>
                                <Text style={[styles.grayMiddlest, styles.size16]}>{getFormattedDate(selectedNft.DATE_ADDED)}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginBottom: 6 }}>
                                <Text style={[styles.size16, { flex: 1 }]}>Geolocation</Text>
                                <Text style={[styles.grayMiddlest, styles.size16, { textAlign: 'right' }]}>{`Lat: ${selectedNft.geolocation.lat}${"\n"}Long: ${selectedNft.geolocation.lng}`}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginBottom: 6 }}>
                                <Text style={[styles.size16, { flex: 1 }]}>Rarity</Text>
                                <Text style={[styles.grayMiddlest, styles.size16, { textAlign: 'right' }]}>{selectedNft.rarity}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginBottom: 6 }}>
                                <Text style={[styles.size16, { flex: 1 }]}>Geo-fenced</Text>
                                <Text style={[styles.grayMiddlest, styles.size16, { textAlign: 'right' }]}>{selectedNft.geofenced ? 'Yes' : 'No'}</Text>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={nftCardStyles.nftCardActions}>
                        {source !== 'Explore' && (
                            <TouchableOpacity 
                                style={[styles.btn, styles.btnRoseStrongOutline, nftCardStyles.nftCardButton]} 
                                onPress={() => viewOnMap()}
                            >
                                <Text style={[styles.btnText, styles.btnTextRoseStrongOutline]}>View Map</Text>
                            </TouchableOpacity>
                        )}
                        
                        {selectedNft.owned === 1 ? (
                            <View 
                                style={[styles.btn, styles.btnRoseStrong, nftCardStyles.nftCardButton, { alignItems: 'center' }]}
                            >
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={[styles.btnText, styles.btnTextRoseStrong, { marginLeft: 8 }]}>Collected</Text>
                                </View>
                            </View>
                        ) : (
                            <TouchableOpacity 
                                style={[styles.btn, styles.btnRoseStrong, nftCardStyles.nftCardButton, { alignItems: 'center' }]} 
                                onPress={() => collectNft()}
                            >
                                <View style={{ flexDirection: 'row' }}>
                                    <FontAwesomeIcon icon={['fal', 'plus']} color="#ffffff" size={18} />
                                    <Text style={[styles.btnText, styles.btnTextRoseStrong, { marginLeft: 8 }]}>Collect</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </SafeAreaView>
      </Modal>
    )
}

export default NftCard
