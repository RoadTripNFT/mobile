import React, { useState } from 'react'
import axios from 'axios'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/pro-light-svg-icons';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
import accountStyles from '../AccountStyles'
import { useSelector } from 'react-redux';
import Password from '../../../components/Onboarding/Password';
library.add(faAngleLeft, faLocationDot)

const Security = ({ navigation, styles }) => {

    const auth = useSelector(state => state.auth)

    const [ newPassword, setNewPassword ] = useState("")
    const [ showPasswordChange, setShowPasswordChange ] = useState(false)

    const updatePassword = async () => {
        const url = `https://api.roadtripnft.com/users/submit/update-password`;
        const payload = {
            password: newPassword,
            jwtToken: auth.jwtToken,
        }
        const resp = await axios.post(url, payload);
        if(resp.data.msg === "updatedPass"){
            setShowPasswordChange(false)
            setNewPassword('')
        }
    }

    return (
        <SafeAreaView style={styles.screenWrapper}>
            <View style={{ flex: 1, paddingHorizontal: 18 }}>
                <TouchableOpacity style={[styles.circleButton, accountStyles.backButton]} onPress={() => navigation.navigate('Account', { screen: 'Home'})}>
                    <FontAwesomeIcon icon={['fal', 'angle-left']} size={20} />
                </TouchableOpacity>
                <Text style={[ styles.pageHeader, { paddingBottom: 14 } ]}>Security</Text>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Password</Text>
                    <Text style={styles.h6}>&bull; &bull; &bull; &bull; &bull; &bull; &bull; &bull;</Text>
                    <Text style={styles.link} onPress={() => setShowPasswordChange(true)}>Change Password</Text>
                </View>
                {showPasswordChange && (
                    <>
                        <Password styles={styles} password={newPassword} setPassword={setNewPassword} />
                        <TouchableOpacity style={[styles.btn, styles.btnRoseStrong, { marginBottom: 14}]} onPress={() => updatePassword()}><Text style={[styles.btnText, styles.btnTextRoseStrong]}>Update Password</Text></TouchableOpacity>
                    </>
                )}
            </View>

        </SafeAreaView>
    )
}

export default Security
