import React, { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux';
import { Modal, TextInput, Text, TouchableOpacity, View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Dimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes, faCircleCheck } from '@fortawesome/pro-light-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import accountStyles from '../AccountStyles';
import { useKeyboard } from '../../../utilities/useKeyboard';
library.add(faTimes, faCircleCheck)

const FeedbackModal = ({ styles, feedbackModal, setFeedbackModal }) => {

    const { height } = Dimensions.get("window");
    const auth = useSelector(state => state.auth)
    const keyboardHeight = useKeyboard();

    const [feedback, setFeedback] = useState('')
    const [modalHeight, setModalHeight] = useState(null)
    const [success, setSuccess] = useState(false)

    const handleProvideFeedback = async () => {
        const url = `https://api.roadtripnft.com/users/submit/feedback`;
        const payload = {
            jwtToken: auth.jwtToken,
            firstName: auth.firstName,
            lastName: auth.lastName,
            email: auth.email,
            feedback
        }
        Keyboard.dismiss()
        const resp = await axios.post(url, payload);
        if (resp.data.msg === 'success') {
            setSuccess(true)
        } else {

        }
    }

    if (!feedbackModal) {
        return null
    }

    return (
        <View style={styles.partialModalWrapper}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={feedbackModal}
                onRequestClose={() => {
                    setFeedbackModal(false);
                }}
            >
                <View 
                    style={[accountStyles.deleteContainer, { marginTop: keyboardHeight === 0 ? 'auto' : height - modalHeight - keyboardHeight }]}
                    onLayout={(event) => {
                        setModalHeight(event.nativeEvent.layout.height)
                    }}
                >
                    {success ? (
                        <View style={{ alignItems: 'center', marginTop: 14 }}>
                            <FontAwesomeIcon icon={['fal', 'circle-check']} color="#65AE59" size={90} />
                            <Text style={[styles.h5, styles.bold, { marginTop: 14 }]}>Success!</Text>
                            <Text style={[styles.grayMiddlest, { width: '80%', textAlign: 'center' }]}>Your feedback is greatly appreciated, we'll be in touch if we have other questions</Text>
                            <TouchableOpacity style={[styles.btn, styles.btnRoseStrong, { marginBottom: 14, marginTop: 28}]} onPress={() => setFeedbackModal(false)}><Text style={[styles.btnText, styles.btnTextRoseStrong]}>Continue</Text></TouchableOpacity>
                        </View>
                    ) : (
                        <>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={[styles.h3, styles.bold, { flex: 1 }]}>Give Feedback</Text>
                                <TouchableOpacity style={[styles.circleButton]} onPress={() => setFeedbackModal(false)}>
                                    <FontAwesomeIcon icon={['fal', 'times']} size={20} />
                                </TouchableOpacity>
                            </View>
                            <Text style={[styles.grayMiddlest, styles.size16 ]}>Have feedback, found a bug, or have a suggestion? We'd love to hear it!</Text>
                            <TextInput
                                multiline
                                numberOfLines={3}
                                textAlignVertical="top"
                                minHeight={80}
                                maxHeight={200}
                                style={[styles.multiLineInput, { marginVertical: 14 }]}
                                onChangeText={(value) => setFeedback(value)}
                                value={feedback}
                                keyboardType="default"
                                placeholder="Add your thoughts and feedback..."
                            />
                            <TouchableOpacity style={[styles.btn, styles.btnRoseStrong, { marginBottom: keyboardHeight > 0 ? 0 : 14}]} onPress={() => handleProvideFeedback()}><Text style={[styles.btnText, styles.btnTextRoseStrong]}>Submit</Text></TouchableOpacity>
                        </>
                    )}
                </View>
            </Modal>
        </View>
    )
}

export default FeedbackModal
