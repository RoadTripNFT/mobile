import React from 'react'
import { TouchableOpacity, View, Image, Text } from 'react-native'
import questsStyles from './QuestsStyles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faCheck)

const QuestNftItem = ({ styles, item, setSelectedNft }) => {

    const handleQuestItemPress = () => {
        setSelectedNft(item)
    }

    return (
        <TouchableOpacity 
            onPress={handleQuestItemPress}
            style={questsStyles.questNftItemContainer}
        >
            {item.owned === 1 && (
                <View style={questsStyles.questNftItemCollected}>
                    <FontAwesomeIcon icon={['fas', 'check']} color="#F35D71" size={14} />
                </View>
            )}
            <Image style={questsStyles.questItemImage} source={{ uri: item.image }} />
            <View style={questsStyles.questNftItemContent}>
                <Text style={[styles.h6, styles.bold, styles.grayStrongest, { textAlign: 'center' }]}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default QuestNftItem
