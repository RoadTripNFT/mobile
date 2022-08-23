import React from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import onboardingStyles from './OnboardingStyles'
import * as Location from 'expo-location';

const LocationPermissions = ({ navigation, styles }) => {

    const requestLocation = async () => {
        const { granted } = await Location.requestForegroundPermissionsAsync()
        if (granted) {
            navigation.navigate('Tabs', { screen: 'Wallet' })
        }
    }

    return (
        <View style={[styles.screenWrapper, onboardingStyles.locationScreenWrapper]}>
            <SafeAreaView style={onboardingStyles.locationScreenContainer}>
                <Image source={require('../../assets/images/location.png')} style={{ alignSelf: 'center', width: '70%', height: 'auto', aspectRatio: 4/3, resizeMode: 'contain' }} />
                <Text style={[styles.size16, { color: '#ffffff', marginTop: 14, width: '80%', textAlign: 'center' }]}>Road Trip NFT needs access to your location so you can discover nearby souvenirs on a map, collect geo-fenced souvenirs and view your collected memories on a map.</Text>
                <Text style={[styles.size16, { color: '#ffffff' , marginTop: 12, width: '80%', textAlign: 'center' }]}>We'll only access your location while you have the app open.</Text>
                <TouchableOpacity style={[styles.btn, styles.btnWhite, { marginTop: 28, marginBottom: 14}]} onPress={() => requestLocation()}><Text style={[styles.btnText, styles.btnTextWhite]}>Allow Location</Text></TouchableOpacity>
            </SafeAreaView>
        </View>
    )
}

export default LocationPermissions
