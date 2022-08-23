import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, TextInput, Image, TouchableWithoutFeedback, Keyboard, Dimensions } from 'react-native'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import * as Location from 'expo-location';
import loginAction from "../../../redux/actions/users/loginAction";
import Password from "../../../components/Onboarding/Password";
import onboardingStyles from "../OnboardingStyles";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/pro-light-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { useKeyboard } from '../../../utilities/useKeyboard';

library.add(faAngleLeft)

const Login = ({ navigation, styles }) => {

    const keyboardHeight = useKeyboard();
    const { height } = Dimensions.get("window")
    const jwtToken = useSelector((state) => state.auth.jwtToken);
    const dispatch = useDispatch();

    const [contentHeight, setContentHeight] = useState(null)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")

    useEffect(() => {
        // mixpanel.track('Login Viewed')
    }, []);

    useEffect(() => {
        if (jwtToken) {
            navigation.navigate('Tabs', { screen: 'Wallet' })
        }
    }, [jwtToken]);

    const submitLogin = async () => {
        const { granted, canAskAgain } = await Location.getForegroundPermissionsAsync()
        Keyboard.dismiss()

        const url = `https://api.roadtripnft.com/auth/login`;
        const data = {
            email,
            password,
        };
        const resp = await axios.post(url, data);
        console.log(resp.data)
        if (resp.data.msg === "success") {
            dispatch(loginAction(resp.data.data));

            setEmail("")
            setPassword("")
            setError("")

            // If permissions haven't been granted and we can ask again, get them before continuing
            if (!granted && canAskAgain) {
                navigation.navigate('Location Permissions')
            } else {
                navigation.navigate('Tabs', { screen: 'Wallet'})
            }
        } else if (resp.data.msg === "noUser") {
            setError("Email or password incorrect")
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.screenWrapper}>
                <TouchableOpacity style={[styles.circleButton, styles.circleButtonRaised, onboardingStyles.backButton ]} onPress={() => navigation.navigate('Home')}>
                    <FontAwesomeIcon icon={['fal', 'angle-left']} size={18} />
                </TouchableOpacity>
                <Image style={{ width: '100%', height: height - contentHeight, resizeMode: 'cover' }} source={require('../../../assets/images/mountain-lake.jpg')} />
                <View style={[ onboardingStyles.onboardingContent, { marginTop: keyboardHeight === 0 ? -20 : -keyboardHeight }]} onLayout={(event) => {
                    setContentHeight(event.nativeEvent.layout.height)
                }}>
                    <Text style={[styles.h2, styles.grayStrong, styles.medium, { marginBottom: 14 }]}>Login</Text>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(value) => setEmail(value)}
                            value={email}
                            keyboardType="email-address"
                            placeholder="Your email address"
                        />
                    </View>
                    <Password styles={styles} password={password} setPassword={setPassword} />
                    {error && (
                        <Text style={{ color: '#B74B54' }}>{error}</Text>
                    )}
                    <TouchableOpacity style={[styles.btn, styles.btnRoseStrong, { marginTop: 14, marginBottom: keyboardHeight > 0 ? 0 : 14 }]} onPress={() => submitLogin()}><Text style={[styles.btnText, styles.btnTextRoseStrong]}>Login</Text></TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default Login;
