import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useFocusEffect } from '@react-navigation/native';
import { useSelector } from 'react-redux'
import { ActivityIndicator, FlatList, SafeAreaView, Text, View } from 'react-native'
import questsStyles from './QuestsStyles'
import QuestItem from './QuestItem'

const QuestsMain = ({ navigation, styles }) => {

    const jwtToken = useSelector(state => state.auth.jwtToken)

    const [quests, setQuests] = useState([])
    const [selectedQuest, setSelectedQuest] = useState(null)
    
    useFocusEffect(
        React.useCallback(() => {
            fetchQuests()
        }, [])
    );

    const fetchQuests = async()=>{
        const url = `https://api.roadtripnft.com/quests/get/all`;
        const payload = {
            jwtToken: jwtToken,
        }
        const resp = await axios.post(url, payload);
        if (resp.data.msg === 'success') {
            setQuests(resp.data.data)
        } else {

        }
    }

    const renderQuestItem = ({ item }) => {
        return (
            <QuestItem navigation={navigation} styles={styles} item={item} setSelectedQuest={setSelectedQuest} />
        )
    }

    if (!quests) {
        return <ActivityIndicator size="small" color="#0000ff" />
    }

    return (
        <SafeAreaView style={styles.screenWrapper}>
            <Text style={[styles.pageHeader, { paddingHorizontal: 18 }]}>Quests</Text>
            <Text style={[styles.size16, styles.grayMiddlest, { paddingHorizontal: 18 }]}>Collect and discover new adventures</Text>
            <View style={questsStyles.questListContainer}>
                <FlatList
                    columnWrapperStyle={{ flex: 1, justifyContent: "space-around", paddingBottom: 14 }}
                    data={quests}
                    renderItem={renderQuestItem}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                />
            </View>
        </SafeAreaView>
    )
}

export default QuestsMain
