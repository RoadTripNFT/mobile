import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux';
import { Dimensions, FlatList, Image, Modal, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/pro-light-svg-icons';
import { faLocationDot, faCheck } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
import NftCard from '../Wallet/NftCard';
import questsStyles from './QuestsStyles';
import QuestNftItem from './QuestNftItem';

library.add(faAngleLeft, faLocationDot)

const QuestDetail = ({ route, navigation, styles }) => {

    const jwtToken = useSelector(state => state.auth.jwtToken)
    const [nfts, setNfts] = useState(null)
    const [selectedNft, setSelectedNft] = useState(null)
    const [selectedQuest] = useState(route.params.selectedQuest)
    const [totalCount, setTotalCount] = useState(0)
    const [collectedCount, setCollectedCount] = useState(0)

    useEffect(() => {
        if (selectedQuest) {
            fetchQuestNfts()

            setTotalCount(selectedQuest?.nfts?.length || 0)
            setCollectedCount(selectedQuest?.nfts?.filter(n => n.owned).length || 0)
        }
    }, [selectedQuest])

    const fetchQuestNfts = async () => {
        const url = `https://api.roadtripnft.com/quests/get/nfts-by-quest`;
        const payload = {
            jwtToken: jwtToken,
            nftList: selectedQuest.nfts
        }
        const resp = await axios.post(url, payload);
        if (resp.data.msg === 'success') {
            setNfts(resp.data.data)
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

    const viewOnMap = () => {
        navigation.navigate('Explore', { params: { referrer: { type: 'quest', data: { nfts, quest } }} })
    }

    const renderQuestNftItem = ({ item }) => {
        return (
            <QuestNftItem navigation={navigation} styles={styles} item={item} setSelectedNft={setSelectedNft} />
        )
    }

    if (!selectedQuest) {
        return <></>
    }

    return (
        <SafeAreaView style={styles.screenWrapper}>
            <View style={questsStyles.questDetailContainer}>
                <View style={{ paddingHorizontal: 18 }}>
                    <TouchableOpacity style={[styles.circleButton, questsStyles.closeButton]} onPress={() => navigation.navigate('Quests', { screen: 'Home'})}>
                        <FontAwesomeIcon icon={['fal', 'angle-left']} size={20} />
                    </TouchableOpacity>
                </View>
                <View style={{ paddingHorizontal: 18, flexDirection: 'row' }}>
                    <Text style={[ styles.pageHeader, { flex: 1 } ]}>{selectedQuest.name}</Text>
                    <View style={questsStyles.questDetailCounterContainer}>
                        <Text style={questsStyles.questDetailCounterText}>{`${collectedCount} / ${totalCount}`}</Text> 
                    </View>
                </View>
                <View style={{ paddingHorizontal: 18 }}>
                    <Text style={[ styles.grayMiddlest ]}>{selectedQuest.description}</Text>
                </View>
                <View style={{ flex: 1, marginTop: 14, paddingHorizontal: 11 }}>
                    <FlatList
                        columnWrapperStyle={{ flex: 1, justifyContent: "space-around", paddingBottom: 20 }}
                        data={nfts}
                        renderItem={renderQuestNftItem}
                        keyExtractor={(item) => item.id}
                        numColumns={2}
                    />
                </View>
            </View>
            <NftCard navigation={navigation} styles={styles} selectedNft={selectedNft} setSelectedNft={setSelectedNft} updateNft={(newData) => updateNfts(newData)} source="Quests" />
        </SafeAreaView>
    )
}

export default QuestDetail
