import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const Home = ({ navigation, styles }) => {

    return(
        <View style={styles.screenWrapper}>
            <Image style={{ width: '100%', height: '60%', resizeMode: 'cover' }}  source={require('../../assets/images/travel-concept-with-baggage.png')} />
            <View style={{ paddingLeft: 30, paddingRight: 30 }}>
                <Text style={[styles.h1, styles.bold, { textAlign: 'center' }]}>Capture and store{"\n"}life's adventures</Text>
                <Text style={[styles.paragraph, styles.grayMiddlest, { paddingHorizontal: 16, textAlign: 'center' }]}>Your adventure journal preserving your memories as forver NFTs</Text>
                <TouchableOpacity style={[styles.btn, styles.btnRoseStrong, { marginTop: 28, marginBottom: 14 }]} onPress={() => navigation.navigate('Login')}><Text style={[styles.btnText, styles.btnTextRoseStrong]}>Login</Text></TouchableOpacity>
                <TouchableOpacity style={[styles.btn, styles.btnRoseStrongOutline]} onPress={() => navigation.navigate('Signup')}><Text style={[styles.btnText, styles.btnTextRoseStrongOutline]}>Signup</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default Home;
