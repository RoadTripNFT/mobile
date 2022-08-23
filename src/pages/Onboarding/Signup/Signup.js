import React, {useState, useEffect} from 'react';
import { View, TouchableOpacity, Text, TextInput, Image, TouchableWithoutFeedback, Keyboard, Dimensions } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'
import Checkbox from 'expo-checkbox';
import loginAction from '../../../redux/actions/users/loginAction';
import Password from '../../../components/Onboarding/Password';
import onboardingStyles from "../OnboardingStyles";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/pro-light-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { useKeyboard } from '../../../utilities/useKeyboard';
import TermsModal from './TermsModal'

library.add(faAngleLeft)

const Signup = ({ navigation, styles }) => {

    const keyboardHeight = useKeyboard();
    const { height } = Dimensions.get("window")
    const auth = useSelector(state=>state.auth);
    const dispatch = useDispatch();

    const [contentHeight, setContentHeight] = useState(null)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [terms, setTerms] = useState(false)
    const [termsModal, setTermsModal] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        // mixpanel.track('Signup Viewed')
    }, [])

    useEffect(()=>{
        if(auth.jwtToken){
            // Now that the user is successfully signed up, identify them in mixpanel
            // mixpanel.identify(auth.uniqueName)
            // mixpanel.people.set_once({
            //     "name": auth.name, 
            //     "email": auth.email, 
            //     "uniqueName": auth.uniqueName
            // })
            // mixpanel.track('Signup Successful')

            // history.push('/roadtripper/timeline')
        }
    }, [auth])

    const submitLogin = async()=>{
        const url = `https://api.roadtripnft.com/auth/register`;
        const data = {
            firstName, lastName, email, password,
        }
        const resp = await axios.post(url, data);
        console.log(resp.data)
        if(resp.data.msg === "success"){
            dispatch(loginAction(resp.data.data));
            setFirstName("")
            setLastName("")
            setEmail("")
            setPassword("")
            setTerms(false)
            setError("")
            navigation.navigate('Location Permissions')
        }else if(resp.data.msg === "userExists"){
            setError("A user with that email already exists")
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.screenWrapper}>
                {keyboardHeight === 0 && (
                    <TouchableOpacity style={[styles.circleButton, styles.circleButtonRaised, onboardingStyles.backButton ]} onPress={() => navigation.navigate('Home')}>
                        <FontAwesomeIcon icon={['fal', 'angle-left']} size={18} />
                    </TouchableOpacity>
                )}
                <Image style={{ width: '100%', height: height - contentHeight, resizeMode: 'cover' }} source={require('../../../assets/images/mountain-lake.jpg')} />
                <View style={[ onboardingStyles.onboardingContent, { marginTop: keyboardHeight === 0 ? -20 : -keyboardHeight } ]} onLayout={(event) => {
                    setContentHeight(event.nativeEvent.layout.height)
                }}>
                    <Text style={[styles.h2, styles.grayStrong, styles.medium, { marginBottom: 8 }]}>Create Account</Text>
                    {/* <Text style={[styles.grayMiddlest, styles.size16, { marginBottom: 14 }]}>To create, discover and store your memories</Text> */}
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>First Name</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(value) => setFirstName(value)}
                            value={firstName}
                            keyboardType="default"
                            placeholder="Your first name"
                        />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.label}>Last Name</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(value) => setLastName(value)}
                            value={lastName}
                            keyboardType="default"
                            placeholder="Your last name"
                        />
                    </View>
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
                    <View style={{ flexDirection: 'row' }}>
                        <Checkbox
                            value={terms}
                            onValueChange={setTerms}
                            color={'#f35d71'}
                            style={{ marginRight: 8 }}
                        />
                        <Text style={styles.label}>I agree to these <Text style={styles.link} onPress={() => {Keyboard.dismiss(); setTermsModal(true)}}>terms and conditions</Text></Text>
                    </View>
                    {error && (
                        <Text style={{ marginTop: 14, color: '#B74B54' }}>{error}</Text>
                    )}
                    <TouchableOpacity style={[styles.btn, styles.btnRoseStrong, { marginTop: 14, marginBottom: keyboardHeight > 0 ? 0 : 14 }]} onPress={() => submitLogin()}><Text style={[styles.btnText, styles.btnTextRoseStrong]}>Signup</Text></TouchableOpacity>
                </View>
                <TermsModal styles={styles} termsModal={termsModal} setTermsModal={setTermsModal} handleUnderstand={() => {setTerms(true); setTermsModal(false)}} />
            </View>
        </TouchableWithoutFeedback>
    )

}

export default Signup