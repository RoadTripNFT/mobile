import React from 'react'
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/Onboarding/Login/Login';
import Signup from './pages/Onboarding/Signup/Signup';
import OnboardingLanding from './pages/Onboarding/OnboardingLanding'
import Styles from './assets/styles/Styles';
import Tabs from './TabRouter'
import LocationPermissions from './pages/Onboarding/LocationPermissions';

const AppRouter = () => {

    const auth = useSelector(state => state.auth)

    const Stack = createNativeStackNavigator();
    
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                {auth.jwtToken && (
                    <Stack.Screen name="Tabs" component={Tabs} />
                )}
                <Stack.Screen name="Home">
                    {(props) => <OnboardingLanding {...props} styles={Styles} />}
                </Stack.Screen>
                <Stack.Screen name="Login">
                    {(props) => <Login {...props} styles={Styles} />}
                </Stack.Screen>
                <Stack.Screen name="Signup">
                    {(props) => <Signup {...props} styles={Styles} />}
                </Stack.Screen>
                <Stack.Screen name="Location Permissions">
                    {(props) => <LocationPermissions {...props} styles={Styles} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppRouter
