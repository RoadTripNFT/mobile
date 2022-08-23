import React from 'react'
import { TouchableOpacity, View, Image, Text } from 'react-native'
import nftCardStyles from './NftCardStyles'
import walletStyles from './WalletStyles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faLocationDot)

const WalletItem = ({ navigation, styles, item, setSelectedNft }) => {

    const handleWalletItemPress = () => {
        setSelectedNft(item)
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

    return (
        <TouchableOpacity 
            onPress={handleWalletItemPress}
        >
            <View style={walletStyles.walletItemContainer}>
                <Image style={walletStyles.walletItemImage} source={{ uri: item.image }} />
                <View style={walletStyles.walletItemContent}>
                    <Text style={[styles.h5, styles.bold, walletStyles.walletItemTitle]} numberOfLines={1}>{item.title}</Text>
                    <View style={[nftCardStyles.nftCardLocation, { flex: 1 }]}>
                        <FontAwesomeIcon icon={['fas', 'location-dot']} color="#F35D71" />
                        <Text style={[styles.grayMiddlest, styles.size16, { marginLeft: 5, marginTop: -2 }]}>{item.city}, {item.state}</Text>
                    </View>
                    <Text style={[styles.size16, styles.grayMiddlest]}>Collected: {getFormattedDate(item.mintedDate)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default WalletItem
