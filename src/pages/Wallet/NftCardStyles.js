import { StyleSheet } from "react-native";

export default StyleSheet.create({
    nftCardWrapper: {
        flex: 1,
        backgroundColor: '#ffffff',
        position: 'relative'
    },
    nftCardContainer: {
        flex: 1,
        paddingHorizontal: 8,
    },
    nftCardImage: {
        width: '100%',
        height: 'auto',
        resizeMode: 'cover',
        borderRadius: 12,
    },
    nftCardHeader: {
        marginTop: 18,
        paddingHorizontal: 16,
        marginBottom: 10
    },
    nftCardContent: {
        flex: 1,
        marginTop: 0,
        paddingHorizontal: 16
    },
    nftCardLocation: {
        flexDirection: 'row',
        marginTop: 2
    },
    closeButton: {
        position: 'absolute',
        top: 16,
        left: 24,
        // marginBottom: 10,
    },
    nftCardActions: {
        flexDirection: 'row',
        paddingHorizontal: 11,
        marginTop: 18,
        marginBottom: 14,
    },
    nftCardButton: {
        flex: 1,
        marginHorizontal: 7,
    }
})