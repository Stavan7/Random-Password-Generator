import { StyleSheet } from 'react-native';
import lightTheme from '../constants/LightTheme';

const lightModeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: lightTheme.background
    },
    title: {
        fontSize: 30, 
        color: lightTheme.heading,
        fontFamily: 'Karla-Bold',
    },
    subTitle: {
        fontSize: 30, 
        fontFamily: 'Karla-Bold',
        color: lightTheme.subText,
    },
    supportingText: {
        fontSize: 17,
        marginTop: 10,
        fontFamily: 'Inter-Medium',
        color: lightTheme.supportingText,
    },
    button: {
        height: 50,
        width: 230,
        marginTop: 30,
        borderRadius: 6,
        backgroundColor: lightTheme.btnBg,

        //shadow 
        elevation: 10,
        overflow: 'hidden',
        borderColor: 'transparent',
        shadowColor: "rgba(0,0,0,0.5)",
    },
    partition: {
        borderWidth: 1,
        marginVertical: 50,
        marginHorizontal: 20,
        borderColor: lightTheme.divider
    },
    passContainer: {
        height: 50,
        width: '45%',
        fontSize: 14,
        borderRadius: 5,
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        textAlignVertical: 'center',
        fontFamily: 'Inter-Regular',
        color: lightTheme.inputText,
        justifyContent: 'space-around',
        backgroundColor: lightTheme.inputBg,
    },
    passText: {
        fontSize: 16,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'Inter-Regular',
        color: lightTheme.inputText,
    }
})

export default lightModeStyles;