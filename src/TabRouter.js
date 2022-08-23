import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WalletMain from './pages/Wallet/WalletMain';
import ExploreMain from './pages/Explore/ExploreMain';
import QuestsRouter from './pages/Quests/QuestsRouter';
import AccountRouter from './pages/Account/AccountRouter';
import Styles from './assets/styles/Styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faScroll } from "@fortawesome/pro-regular-svg-icons";
import { faCompass, faMap, faCircleUser, faAddressCard } from "@fortawesome/free-regular-svg-icons";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faCompass, faMap, faBarsStaggered, faCircleUser, faScroll, faAddressCard)


const TabRouter = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Explore') {
                    iconName = ['far', 'compass']
                } else if (route.name === 'Quests') {
                    iconName = ['far', 'scroll']
                } else if (route.name === 'Wallet') {
                    iconName = ['fas', 'bars-staggered']
                } else if (route.name === 'Account') {
                    iconName = ['far', 'circle-user']
                }

                // You can return any component that you like here!
                return <FontAwesomeIcon icon={iconName} color={color} size={20} />;
            },
            tabBarActiveTintColor: '#F35D71',
            tabBarInactiveTintColor: '#cfcfcf',
            headerShown: false
            })}
        >
            <Tab.Screen name="Explore">
                {(props) => <ExploreMain {...props} styles={Styles} />}
            </Tab.Screen>
            <Tab.Screen name="Quests">
            {(props) => <QuestsRouter {...props} styles={Styles} />}
            </Tab.Screen>
            <Tab.Screen name="Wallet">
                {(props) => <WalletMain {...props} styles={Styles} />}
            </Tab.Screen>
            <Tab.Screen name="Account">
                {(props) => <AccountRouter {...props} styles={Styles} />}
            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default TabRouter
