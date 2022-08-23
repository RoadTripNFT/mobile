import { StyleSheet } from "react-native";

export default StyleSheet.create({
    walletContainer: {
        flex: 1,
        paddingHorizontal: 18,
        marginTop: 14
    },
    walletItemContainer: {
        flexDirection: 'row',
        borderRadius: 12,
        backgroundColor: '#ffffff',
        width: '100%',
        boxShadow: '0px 0px 8px rgba(37, 40, 43, 0.12)',
        borderBottomWidth: 1,
        borderColor: '#cfcfcf',
        paddingBottom: 14,
        marginBottom: 14,
    },
    walletItemImage: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 8,
    },
    walletItemContent: {
        flex: 1,
        marginLeft: 10
    },
    walletItemTitle: {
        width: '90%'
    }
})