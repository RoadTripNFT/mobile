import { StyleSheet } from "react-native";

export default StyleSheet.create({
    exploreContainer: {
        flex: 1,
        position: 'relative'
    },
    map: {
        flex: 1,
    },
    nftMarker: {
        width: 82,
        height: 82,
        backgroundColor: '#fbced4',
        borderRadius: 8,
        padding: 5
    },
    nftMarkerImage: {
        width: 72,
        height: 72,
        borderRadius: 8,
    },

    nftDetailContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 16,
        left: 16,
        height: 112,
        marginHorizontal: 'auto',
        padding: 8,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: 0.2,
        shadowRadius: 2,  
        elevation: 3,
    },
    nftDetailClose: {
        position: 'absolute',
        top: 14,
        left: 14,
        backgroundColor: 'rgba(255,255,255,0.8)',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        width: 24,
        height: 24,
        borderRadius: 12,
    },
    nftDetailImage: {
        width: 96,
        height: 96,
        borderRadius: 8,
    },
    nftDetailContent: {
        marginLeft: 10,
        flex: 1,
    },
    mapControlButton: {
        backgroundColor: '#ffffff',
        color: '#545454',
        borderRadius: 18,
        width: 36,
        height: 36,
        fontSize: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: 0.2,
        shadowRadius: 2,  
        elevation: 3,
    },
    locationButton: {
        position: 'absolute',
        right: 16
    },
    backButton: {
        position: 'absolute',
        top: 60,
        left: 16,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: 0.2,
        shadowRadius: 2,  
        elevation: 3,
    }
})