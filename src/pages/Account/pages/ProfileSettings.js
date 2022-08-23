import React, { useState } from 'react'
import axios from 'axios'
import { Linking, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/pro-light-svg-icons';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
import accountStyles from '../AccountStyles'
import { useDispatch, useSelector } from 'react-redux';
import loginAction from '../../../redux/actions/users/loginAction';
import DeleteAccount from './DeleteAccount';
library.add(faAngleLeft, faLocationDot)

const ProfileSettings = ({ navigation, styles }) => {

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)

    const [deleteModal, setDeleteModal] = useState(false)
    const [firstName, setFirstName] = useState(auth.firstName || '')
    const [lastName, setLastName] = useState(auth.lastName || '')

    const updateProfile = async () => {
        const url = `https://api.roadtripnft.com/users/submit/update-profile`;
        const payload = {
            jwtToken: auth.jwtToken,
            firstName,
            lastName
        }
        const resp = await axios.post(url, payload);
        if (resp.data.msg === 'success') {
            dispatch(loginAction({
                ...auth,
                firstName,
                lastName
            }))
        }
    }

    return (
        <SafeAreaView style={styles.screenWrapper}>
            <View style={{ flex: 1, paddingHorizontal: 18 }}>
                <TouchableOpacity style={[styles.circleButton, accountStyles.backButton]} onPress={() => navigation.navigate('Account', { screen: 'Home'})}>
                    <FontAwesomeIcon icon={['fal', 'angle-left']} size={20} />
                </TouchableOpacity>
                <Text style={[ styles.pageHeader, { paddingBottom: 14 } ]}>Your Profile</Text>

                <View style={styles.formGroup}>
                    <Text style={styles.label}>Email</Text>
                    <Text style={styles.h6}>{auth.email}</Text>
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>First Name</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => setFirstName(value)}
                        value={firstName}
                        keyboardType="text"
                        placeholder="Your first name"
                    />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Last Name</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => setLastName(value)}
                        value={lastName}
                        keyboardType="text"
                        placeholder="Your last name"
                    />
                </View>
                <TouchableOpacity style={[styles.btn, styles.btnRoseStrong, { marginBottom: 14}]} onPress={() => updateProfile()}><Text style={[styles.btnText, styles.btnTextRoseStrong]}>Update</Text></TouchableOpacity>
                <View style={{ height: 1, width: '100%', backgroundColor: '#cfcfcf', marginVertical: 14 }} />
                <Text style={styles.redLink} onPress={() => setDeleteModal(true)}>Delete Account</Text>
            </View>

            <DeleteAccount navigation={navigation} styles={styles} deleteModal={deleteModal} setDeleteModal={setDeleteModal} />
        </SafeAreaView>
    )
}

export default ProfileSettings
