import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    onboardingCard: {
        flex: 1,
        marginTop: 8,
        backgroundColor: "aliceblue",
    },
    box: {
      width: 50,
      height: 50,
    },
    row: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
    button: {
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderRadius: 4,
      backgroundColor: "oldlace",
      alignSelf: "flex-start",
      marginHorizontal: "1%",
      marginBottom: 6,
      minWidth: "48%",
      textAlign: "center",
    },
    selected: {
      backgroundColor: "coral",
      borderWidth: 0,
    },
    buttonLabel: {
      fontSize: 12,
      fontWeight: "500",
      color: "coral",
    },
    selectedLabel: {
      color: "white",
    },
    label: {
      textAlign: "center",
      marginBottom: 10,
      fontSize: 24,
    },
    onboardingContent: {
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        marginTop: -20,
        paddingHorizontal: 24,
        paddingVertical: 24,
    },
    backButton: {
        position: 'absolute',
        top: 55,
        left: 20,
        zIndex: 10
    },
    locationScreenWrapper: {
        backgroundColor: '#f35d71'
    },
    locationScreenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
  });