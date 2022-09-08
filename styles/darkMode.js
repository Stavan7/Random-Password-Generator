import { StyleSheet } from 'react-native';
import darkTheme from '../constants/DarkTheme';

const darkModeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: darkTheme.background
    },
    title: {
        fontSize: 30, 
        color: darkTheme.heading,
        fontFamily: 'Karla-Bold',
    },
    subTitle: {
        fontSize: 30, 
        fontFamily: 'Karla-Bold',
        color: darkTheme.subText,
    },
    supportingText: {
        fontSize: 17,
        marginTop: 10,
        fontFamily: 'Inter-Meduim',
        color: darkTheme.supportingText,
    },
    button: {
        height: 50,
        width: 230,
        marginTop: 30,
        borderRadius: 6,
        backgroundColor: darkTheme.btnBg,

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
        borderColor: darkTheme.divider
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
        color: darkTheme.inputText,
        justifyContent: 'space-around',
        backgroundColor: darkTheme.inputBg,
    },
    passText: {
        fontSize: 16,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'Inter-Regular',
        color: darkTheme.inputText,
    }
})

export default darkModeStyles;