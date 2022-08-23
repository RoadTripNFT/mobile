import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FlatList, SafeAreaView, View, Text, ActivityIndicator } from 'react-native'
import { useSelector } from 'react-redux'
import WalletItem from './WalletItem'
import walletStyles from './WalletStyles'
import NftCard from './NftCard'

const WalletMain = ({ navigation, styles }) => {

    const jwtToken = useSelector(state => state.auth.jwtToken)

    const [collectedNfts, setCollectedNfts] = useState([])
    const [selectedNft, setSelectedNft] = useState(null)
    
    useEffect(() => {
        fetchNftData();

    }, [])

    const fetchNftData = async()=>{
        const url = `https://api.roadtripnft.com/nft/get/user-wallet`;
        const payload = {
            jwtToken: jwtToken,
        }
        const resp = await axios.post(url, payload);
        if (resp.data.msg === 'success') {
            setCollectedNfts(resp.data.data)
        } else {

        }
    }

    const updateNfts = (newData) => {
        const tempNfts = [...nfts]
        const nftIdx = nfts.findIndex(n => n.id === newData.id)
        tempNfts[nftIdx] = newData
        setNfts(tempNfts)

        if (selectedNft) {
            setSelectedNft(newData)
        }
    }

    const renderWalletItem = ({ item }) => {
        return (
            <WalletItem navigation={navigation} styles={styles} item={item} setSelectedNft={setSelectedNft} />
        )
    }

    if (!collectedNfts) {
        return <ActivityIndicator size="small" color="#0000ff" />
    }

    return (
        <SafeAreaView style={styles.screenWrapper}>
            <Text style={[styles.pageHeader, { paddingHorizontal: 18 }]}>Your Wallet</Text>
            <Text style={[styles.size16, styles.grayMiddlest, { paddingHorizontal: 18 }]}>Keep track of your collected memories</Text>
            <View style={walletStyles.walletContainer}>
                <FlatList
                    data={collectedNfts}
                    renderItem={renderWalletItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <NftCard navigation={navigation} styles={styles} selectedNft={selectedNft} setSelectedNft={setSelectedNft} updateNft={updateNfts} source="Wallet" />
        </SafeAreaView>
    )
}

export default WalletMain
