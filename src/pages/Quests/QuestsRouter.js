import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuestsMain from './QuestsMain';
import QuestDetail from './QuestDetail';

const QuestsRouter = ({ styles }) => {

    const QuestsStack = createNativeStackNavigator();

    return (
        <QuestsStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <QuestsStack.Screen name="Home">
                {(props) => <QuestsMain {...props} styles={styles} />}
            </QuestsStack.Screen>
            <QuestsStack.Screen name="Detail">
                {(props) => <QuestDetail {...props} styles={styles} />}
            </QuestsStack.Screen>
        </QuestsStack.Navigator>
    )
}

export default QuestsRouter
