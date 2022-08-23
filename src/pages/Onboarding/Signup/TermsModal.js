import React, { useState } from 'react'
import { Modal, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes, faCircleCheck } from '@fortawesome/pro-light-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { useKeyboard } from '../../../utilities/useKeyboard';
import Terms from '../../Account/pages/Terms';
library.add(faTimes, faCircleCheck)

const TermsModal = ({ styles, termsModal, setTermsModal, handleUnderstand }) => {

    const { height } = Dimensions.get("window");
    const keyboardHeight = useKeyboard();

    const [modalHeight, setModalHeight] = useState(null)

    if (!termsModal) {
        return null
    }

    return (
        <View style={styles.partialModalWrapper}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={termsModal}
                onRequestClose={() => {
                    setTermsModal(false);
                }}
            >
                <View 
                    style={{ height: height * 0.75, backgroundColor: '#ffffff', paddingTop: 24,
                    paddingBottom: 36, marginTop: keyboardHeight === 0 ? 'auto' : height - modalHeight - keyboardHeight }}
                    onLayout={(event) => {
                        setModalHeight(event.nativeEvent.layout.height)
                    }}
                >
                    <View style={{ flexDirection: 'row', paddingHorizontal: 18, marginBottom: 14 }}>
                        <Text style={[styles.h3, styles.bold, { flex: 1 }]}>Terms & Conditions</Text>
                        <TouchableOpacity style={[styles.circleButton]} onPress={() => setTermsModal(false)}>
                            <FontAwesomeIcon icon={['fal', 'times']} size={20} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Terms styles={styles} modal />
                    </View>
                    <View style={{ paddingHorizontal: 18 }}>
                        <TouchableOpacity style={[styles.btn, styles.btnRoseStrong, { marginBottom: keyboardHeight > 0 ? 0 : 14}]} onPress={() => handleUnderstand(false)}>
                        <Text style={[styles.btnText, styles.btnTextRoseStrong]}>I understand</Text></TouchableOpacity>
                    </View>

                </View>
            </Modal>
        </View>
    )
}

export default TermsModal
