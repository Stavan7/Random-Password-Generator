import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  Appearance,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import darkModeStyles from './styles/darkMode';
import lightModeStyles from './styles/lightMode';

const App = () => {

  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false)
  const [passwordTwo, setPasswordTwo] = useState('');
  const [passwordThree, setPasswordThree] = useState('');
  const [passwordFour, setPasswordFour] = useState('');

  const [theme, setTheme] = useState(Appearance.getColorScheme());

  Appearance.addChangeListener((scheme) =>
    setTheme(scheme.colorScheme)
  )

  const characters = ["A", "B", "C", "D", "E", "F", "G", "H",
    "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f",
    "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3",
    "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$",
    "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[",
    "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

  const getRandomPassword = async () => {
    let pass = '';
    let passTwo = '';
    let passThree = '';
    let passFour = '';
    let passwordLength = 8;
    setVisible(true);

    for (let i = 0; i < passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      let randomIndexTwo = Math.floor(Math.random() * characters.length);
      let randomIndexThree = Math.floor(Math.random() * characters.length);
      let randomIndexFour = Math.floor(Math.random() * characters.length);
      pass += characters[randomIndex];
      passTwo += characters[randomIndexTwo];
      passThree += characters[randomIndexThree];
      passFour += characters[randomIndexFour];
    }
    setPassword(pass);
    setPasswordTwo(passTwo)
    setPasswordThree(passThree)
    setPasswordFour(passFour)
  }

  return (
    <SafeAreaView style={theme === 'light' ? lightModeStyles.container : darkModeStyles.container}>
      <StatusBar hidden />

      <View style={styles.upperSection}>
        <Text style={theme === 'light' ? lightModeStyles.title : darkModeStyles.title}>Generate a </Text>
        <Text style={theme === 'light' ? lightModeStyles.subTitle : darkModeStyles.subTitle}>random password </Text>
        <Text style={theme === 'light' ? lightModeStyles.supportingText : darkModeStyles.supportingText}>
          Never use an insecure password again
        </Text>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => getRandomPassword()}
          style={theme === 'light' ? lightModeStyles.button : darkModeStyles.button}>
          <Text style={styles.btnText}>Generate passwords</Text>
        </TouchableOpacity>
      </View>

      <View style={theme === 'light' ? lightModeStyles.partition : darkModeStyles.partition}></View>

      <View style={styles.bottomSection}>
        <View style={theme === 'light' ? lightModeStyles.passContainer : darkModeStyles.passContainer}>
          <Text style={theme === 'light' ? lightModeStyles.passText : darkModeStyles.passText}>{password}</Text>
          {visible && <Image source={require('./assets/images/copy.png')} tintColor="white" />}
        </View>
        <View style={theme === 'light' ? lightModeStyles.passContainer : darkModeStyles.passContainer}>
          <Text style={theme === 'light' ? lightModeStyles.passText : darkModeStyles.passText}>{passwordTwo}</Text>
          {visible && <Image source={require('./assets/images/copy.png')} tintColor="white" />}
        </View>
      </View>

      <View style={[styles.bottomSection, { marginTop: 20 }]}>
        <View style={theme === 'light' ? lightModeStyles.passContainer : darkModeStyles.passContainer}>
          <Text style={theme === 'light' ? lightModeStyles.passText : darkModeStyles.passText}>{passwordThree}</Text>
          {visible && <Image source={require('./assets/images/copy.png')} tintColor="white" />}
        </View>
        <View style={theme === 'light' ? lightModeStyles.passContainer : darkModeStyles.passContainer}>
          <Text style={theme === 'light' ? lightModeStyles.passText : darkModeStyles.passText}>{passwordFour}</Text>
          {visible && <Image source={require('./assets/images/copy.png')} tintColor="white" />}
        </View>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  upperSection: {
    marginTop: '50%',
    marginHorizontal: 20,
  },
  btnText: {
    flex: 1,
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Inter-Regular',
    textAlignVertical: 'center',
  },
  bottomSection: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-around',
  },
})

export default App