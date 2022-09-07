import { StyleSheet } from 'react-native';
import lightTheme from '../constants/LightTheme';

const lightModeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: lightTheme.background
    },
    upperSection: {
        marginTop: '50%',
        marginHorizontal: 20,
    },
    title: {
        fontSize: 30,
        color: lightTheme.heading,
        fontWeight: '400',
        fontFamily: 'Karla-Bold',
    },
    subTitle: {
        fontSize: 30,
        color: lightTheme.subText,
        fontWeight: '400',
        fontFamily: 'Karla-Bold',
    },
    supportingText: {
        fontSize: 17,
        marginTop: 10,
        color: lightTheme.supportingText,
        fontFamily: 'Inter-Bold',
    },
    button: {
        height: 50,
        width: 230,
        marginTop: 30,
        borderRadius: 6,
        backgroundColor: lightTheme.btnBg,

        //shadow 
        elevation: 10,
        shadowColor: "rgba(0,0,0,0.5)",
        overflow: 'hidden',
        borderColor: 'transparent'
    },
    btnText: {
        flex: 1,
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Inter-Regular',
        textAlignVertical: 'center',
    },
    partition: {
        borderWidth: 1,
        marginVertical: 50,
        marginHorizontal: 20,
        borderColor: lightTheme.divider
    },
    bottomSection: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-around',
    },
    passContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 50,
        width: '45%',
        color: '#55F991',
        borderRadius: 5,
        fontSize: 14,
        textAlign: 'center',
        backgroundColor: lightTheme.input,
        textAlignVertical: 'center',
        fontFamily: 'Inter-Regular',
    },
    passText: {
        color: lightTheme.inputText,
        fontSize: 16,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'Inter-Regular',
    }
})

export default lightModeStyles;