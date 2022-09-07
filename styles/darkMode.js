import React from 'react';
import { StyleSheet } from 'react-native';
import darkTheme from '../constants/DarkTheme';

const darkModeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: darkTheme.background
    },
    upperSection: {
        marginTop: '50%',
        marginHorizontal: 20,
    },
    title: {
        fontSize: 30,
        color: 'white',
        fontWeight: '400',
        fontFamily: 'Karla-Bold',
    },
    subTitle: {
        fontSize: 30,
        color: '#4ADF86',
        fontWeight: '400',
        fontFamily: 'Karla-Bold',
    },
    supportingText: {
        fontSize: 17,
        marginTop: 10,
        color: '#D5D4D8',
        fontFamily: 'Inter-Bold',
    },
    button: {
        height: 50,
        width: 230,
        marginTop: 30,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: 'green',
        backgroundColor: '#10B981',

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
        borderColor: '#2F3E53'
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
        height: 70,
        width: '45%',
        color: '#55F991',
        borderRadius: 5,
        fontSize: 14,
        textAlign: 'center',
        backgroundColor: '#273549',
        textAlignVertical: 'center',
        fontFamily: 'Inter-Regular',
    },
    passText: {
        color: '#55F991',
        fontSize: 16,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'Inter-Regular',
    }
})

export default darkModeStyles;