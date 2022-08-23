import React, { useState } from 'react'
import { SafeAreaView, Text, View, TouchableOpacity, Linking } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import logoutAction from '../../redux/actions/users/logoutAction'
import accountStyles from './AccountStyles'
import FeedbackModal from './pages/FeedbackModal'

const AccountLink = ({ navigation, text, to }) => {

    const handlePress = () => {
        navigation.navigate('Account', { screen: to });
    }

    return (
        <TouchableOpacity style={accountStyles.accountLinkItem} onPress={() => handlePress()}>
            <Text style={accountStyles.accountLinkText}>{text}</Text>
        </TouchableOpacity>
    )
}

const AccountLinkDivider = () => {
    return (
        <View style={accountStyles.accountLinkDivider} />
    )
}

const AccountMain = ({ navigation, styles }) => {

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)

    const [feedbackModal, setFeedbackModal] = useState(false)

    const handleLogout = () => {
        dispatch(logoutAction())
        navigation.navigate('Home')
    }

    return (
        <SafeAreaView style={styles.screenWrapper}>
            <Text style={[styles.pageHeader, { paddingHorizontal: 18 }]}>Hi, {auth.firstName}</Text>
            <View style={[accountStyles.sectionWrapper, { marginTop: 30 }]}>
                <Text style={[styles.h3, styles.medium]}>Account Settings</Text>
                <AccountLink navigation={navigation} text="Your Profile" to="Profile" />
                <AccountLinkDivider />
                <AccountLink navigation={navigation} text="Password & Security" to="Security" />
                <AccountLinkDivider />
            </View>
            <View style={accountStyles.sectionWrapper}>
                <Text style={[styles.h3, styles.medium]}>Help</Text>
                <TouchableOpacity style={accountStyles.accountLinkItem} onPress={() => setFeedbackModal(true)}>
                    <Text style={accountStyles.accountLinkText}>Give Feedback</Text>
                </TouchableOpacity>
                <AccountLinkDivider />
                <TouchableOpacity style={accountStyles.accountLinkItem} onPress={() => Linking.openURL('mailto:gabriel@knightley.co')}>
                    <Text style={accountStyles.accountLinkText}>Contact Support</Text>
                </TouchableOpacity>
                <AccountLinkDivider />
            </View>
            <View style={accountStyles.sectionWrapper}>
                <Text style={[styles.h3, styles.medium]}>Legal</Text>
                <AccountLink navigation={navigation} text="Terms and Conditions" to="Terms" />
                <AccountLinkDivider />
                <AccountLink navigation={navigation} text="Privacy Policy" to="Privacy" />
                <AccountLinkDivider />
            </View>

            <TouchableOpacity style={{ paddingHorizontal: 18, marginTop: 14 }} onPress={() => handleLogout()}><Text style={styles.link}>Logout</Text></TouchableOpacity>

            <FeedbackModal styles={styles} feedbackModal={feedbackModal} setFeedbackModal={setFeedbackModal} />
        </SafeAreaView>
    )
}

export default AccountMain
