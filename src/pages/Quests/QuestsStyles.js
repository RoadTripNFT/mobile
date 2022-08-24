import { StyleSheet } from "react-native";

export default StyleSheet.create({
    questListContainer: {
        flex: 1,
        paddingHorizontal: 11,
        marginTop: 14,
    },
    questItemContainer: {
        flex: 1,
        borderRadius: 12,
        backgroundColor: '#f4f4f4',
        width: '100%',
        margin: 7,
        position: 'relative'
    },
    questItemCounterContainer: {
        position: 'absolute',
        top: 8,
        right: 8,
        zIndex: 10,
        borderRadius: 8,
        height: 24,
        paddingHorizontal: 8,
        backgroundColor: 'rgba(251, 206, 212, 0.9)'
    },
    questItemCounterText: {
        color: '#f35d71',
        fontSize: 14,
        lineHeight: 24,
        fontWeight: '700',
        textAlign: 'center'
    },
    questItemImage: {
        width: '100%',
        height: 'auto',
        aspectRatio: 1,
        resizeMode: 'contain',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12
    },
    questItemContent: {
        paddingVertical: 7,
        paddingHorizontal: 14,
    },
    questDetailWrapper: {
        flex: 1,
        backgroundColor: '#ffffff',
        position: 'relative'
    },
    questDetailContainer: {
        flex: 1,
    },
    questDetailCounterContainer: {
        alignSelf: 'center',
        borderRadius: 8,
        height: 28,
        paddingHorizontal: 10,
        backgroundColor: '#fbced4',
        marginTop: 6
    },
    questDetailCounterText: {
        color: '#f35d71',
        fontSize: 18,
        lineHeight: 28,
        fontWeight: '700',
        textAlign: 'center'
    },
    questNftItemContainer: {
        flex: 1/2,
        borderRadius: 12,
        backgroundColor: '#f4f4f4',
        width: '100%',
        margin: 7,
        position: 'relative'
    },
    questNftItemCollected: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: '#fbced4',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        width: 20,
        height: 20,
        borderRadius: 10,
    },
    questNftItemContent: {
        paddingVertical: 8,
        paddingHorizontal: 14,
        flex: 1,
        justifyContent: 'center',
    },
    closeButton: {
        position: 'relative',
        marginLeft: -10
    }
})