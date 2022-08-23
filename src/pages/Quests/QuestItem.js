import React from 'react'
import { TouchableOpacity, View, Image, Text } from 'react-native'
import questsStyles from './QuestsStyles'

const QuestItem = ({ navigation, styles, item }) => {

    const handleQuestItemPress = () => {
        navigation.navigate('Quests', { screen: 'Detail', params: { selectedQuest: item }});
    }

    const totalNftsCount = item?.nfts?.length || 0
    const collectedNftsCount = item?.nfts?.filter(n => n.owned).length || 0

    return (
        <TouchableOpacity 
            onPress={handleQuestItemPress}
            style={questsStyles.questItemContainer}
        >
            <View style={questsStyles.questItemCounterContainer}>
               <Text style={questsStyles.questItemCounterText}>{`${collectedNftsCount} / ${totalNftsCount}`}</Text> 
            </View>
            <Image style={questsStyles.questItemImage} source={{ uri: item.questCoverImage }} />
            <View style={questsStyles.questItemContent}>
                <Text style={[styles.h6, styles.bold, styles.grayStrongest]}>{item.name}</Text>
                <Text style={[styles.grayMiddlest]}>{item.location}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default QuestItem
