import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  StatusBar,
  Appearance,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import darkModeStyles from './styles/darkMode';
import lightModeStyles from './styles/lightMode';
import Clipboard from '@react-native-clipboard/clipboard';

const App = () => {

  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false)
  const [passwordTwo, setPasswordTwo] = useState('');
  const [passwordThree, setPasswordThree] = useState('');
  const [passwordFour, setPasswordFour] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const [theme, setTheme] = useState(Appearance.getColorScheme());

  Appearance.addChangeListener((scheme) =>
    setTheme(scheme.colorScheme)
  )

  const copyToClipboard = () => {
    Clipboard.setString(password);
    setModalVisible(true)
  };

  const copyToClipboardTwo = () => {
    Clipboard.setString(passwordTwo);
    setModalVisible(true)
  };

  const copyToClipboardThree = () => {
    Clipboard.setString(passwordThree);
    setModalVisible(true)
  };

  const copyToClipboardFour = () => {
    Clipboard.setString(passwordFour);
    setModalVisible(true)
  };

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
          {
            visible &&
            <TouchableOpacity onPress={copyToClipboard} activeOpacity={0.7}>
              <Image source={require('./assets/images/copy.png')} tintColor="white" />
            </TouchableOpacity>
          }
        </View>
        <View style={theme === 'light' ? lightModeStyles.passContainer : darkModeStyles.passContainer}>
          <Text style={theme === 'light' ? lightModeStyles.passText : darkModeStyles.passText}>{passwordTwo}</Text>
          {
            visible &&
            <TouchableOpacity onPress={copyToClipboardTwo} activeOpacity={0.7}>
              <Image source={require('./assets/images/copy.png')} tintColor="white" />
            </TouchableOpacity>
          }
        </View>
      </View>

      <View style={[styles.bottomSection, { marginTop: 20 }]}>
        <View style={theme === 'light' ? lightModeStyles.passContainer : darkModeStyles.passContainer}>
          <Text style={theme === 'light' ? lightModeStyles.passText : darkModeStyles.passText}>{passwordThree}</Text>
          {
            visible &&
            <TouchableOpacity onPress={copyToClipboardThree} activeOpacity={0.7}>
              <Image source={require('./assets/images/copy.png')} tintColor="white" />
            </TouchableOpacity>
          }
        </View>
        <View style={theme === 'light' ? lightModeStyles.passContainer : darkModeStyles.passContainer}>
          <Text style={theme === 'light' ? lightModeStyles.passText : darkModeStyles.passText}>{passwordFour}</Text>
          {
            visible &&
            <TouchableOpacity onPress={copyToClipboardFour} activeOpacity={0.7}>
              <Image source={require('./assets/images/copy.png')} tintColor="white" />
            </TouchableOpacity>
          }
        </View>
      </View>

      {/* Modal */}

      {/* <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          hardwareAccelerated={true}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>copied to clipboard</Text>
            </View>
          </View>
        </Modal>
      </View > */}

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
    fontFamily: 'Inter-Medium',
    textAlignVertical: 'center',
  },
  bottomSection: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-around',
  },

  //modal view

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    color: 'black',
    fontSize: 16,
    textAlign: "center",
    fontFamily: 'Inter-Medium'
  }
})

export default App