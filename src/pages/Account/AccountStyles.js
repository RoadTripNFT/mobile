import { StyleSheet } from "react-native";

export default StyleSheet.create({
    sectionWrapper: {
        paddingHorizontal: 18,
        marginTop: 14,
    },
    accountLinkItem: {
        paddingHorizontal: 12,
        paddingVertical: 16,
    },
    accountLinkText: {
        color: '#545454',
        fontSize: 18,
    },
    accountLinkDivider: {
        height: 1,
        width: '100%',
        backgroundColor: '#cfcfcf'
    },
    backButton: {
        position: 'relative',
        marginLeft: -10
    },
    legalHeader: {
        marginTop: 10,
        marginBottom: 8,
        fontSize: 20,
        color: '#545454',
        fontWeight: '600'
    },
    legalText: {
        fontSize: 16,
        color: '#828282',
        marginBottom: 8
    },
    deleteContainer: {
        paddingHorizontal: 18,
        paddingTop: 24,
        paddingBottom: 36,
        backgroundColor: '#ffffff',
        height: 'auto',
        marginTop: 'auto',
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5,
    }
})