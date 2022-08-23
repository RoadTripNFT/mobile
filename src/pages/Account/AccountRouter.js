import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountMain from './AccountMain';
import Terms from './pages/Terms';
import ProfileSettings from './pages/ProfileSettings';
import Privacy from './pages/Privacy';
import Security from './pages/Security';

const AccountRouter = ({ styles }) => {

    const AccountStack = createNativeStackNavigator();

    return (
        <AccountStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <AccountStack.Screen name="Home">
                {(props) => <AccountMain {...props} styles={styles} />}
            </AccountStack.Screen>
            <AccountStack.Screen name="Terms">
                {(props) => <Terms {...props} styles={styles} />}
            </AccountStack.Screen>
            <AccountStack.Screen name="Privacy">
                {(props) => <Privacy {...props} styles={styles} />}
            </AccountStack.Screen>
            <AccountStack.Screen name="Profile">
                {(props) => <ProfileSettings {...props} styles={styles} />}
            </AccountStack.Screen>
            <AccountStack.Screen name="Security">
                {(props) => <Security {...props} styles={styles} />}
            </AccountStack.Screen>
        </AccountStack.Navigator>
    )
}

export default AccountRouter
