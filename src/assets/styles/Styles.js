import { StyleSheet } from "react-native";
import ButtonStyles from "./ButtonStyles";
import FormStyles from "./FormStyles";
import TextStyles from "./TextStyles";

export default StyleSheet.create({
    screenWrapper: {
        backgroundColor: '#ffffff',
        width: '100%',
        height: '100%'
    },
    partialModalWrapper: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        flex: 1,
        zIndex: 10,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
    },
    ...ButtonStyles,
    ...TextStyles,
    ...FormStyles
})