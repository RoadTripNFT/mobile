import React from 'react'
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes } from '@fortawesome/pro-light-svg-icons';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
import { useSelector } from 'react-redux';
import accountStyles from '../AccountStyles';
library.add(faTimes, faLocationDot)

const DeleteAccount = ({ navigation, styles, deleteModal, setDeleteModal }) => {

    const auth = useSelector(state => state.auth)

    const handleDeleteAccount = async () => {
        const url = `https://api.roadtripnft.com/users/submit/delete-account`;
        const payload = {
            jwtToken: auth.jwtToken,
        }
        const resp = await axios.post(url, payload);
        if (resp.data.msg === 'success') {
            dispatch(logoutAction())
            navigation.navigate('Home', { params: { referrer: 'delete-account' }})
        } else {

        }
    }

    if (!deleteModal) {
        return null
    }

    return (
        <View style={accountStyles.partialModalWrapper}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={deleteModal}
                onRequestClose={() => {
                    setDeleteModal(false);
                }}
            >
                <View style={accountStyles.deleteContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[styles.h3, styles.bold, { flex: 1 }]}>Delete Account</Text>
                        <TouchableOpacity style={[styles.circleButton]} onPress={() => setDeleteModal(false)}>
                            <FontAwesomeIcon icon={['fal', 'times']} size={20} />
                        </TouchableOpacity>
                    </View>
                    <Text style={[styles.grayMiddlest, { marginVertical: 14, fontSize: 16 }]}>All your account data including travel memories will be permanently deleted. This cannot be undone.</Text>
                    <TouchableOpacity style={[styles.btn, styles.btnRed, { marginBottom: 14}]} onPress={() => handleDeleteAccount()}><Text style={[styles.btnText, styles.btnTextRed]}>Delete Account</Text></TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}

export default DeleteAccount
