import React, { useState } from 'react'
import { TouchableOpacity, View, Text, TextInput } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/pro-light-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faEye, faEyeSlash)

const Password = ({ styles, password, setPassword }) => {

    const showPassStyles = {
        position: 'absolute',
        right: 0,
        top: 0,
        height: 40,
        justifyContent: 'center',
        paddingHorizontal: 15,
    }
    const [showPass, setShowPass] = useState(false)

    return (
        <View style={styles.formGroup}>
            <Text style={styles.label}>Password</Text>
            <View style={{ position: 'relative' }}>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={(value) => setPassword(value)} 
                    secureTextEntry={!showPass} 
                    placeholder="Your password"
                />
                <TouchableOpacity style={showPassStyles} onPress={() => setShowPass(!showPass)}>
                    <FontAwesomeIcon icon={['fal', showPass ? 'eye-slash' : 'eye']} size={18} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Password
