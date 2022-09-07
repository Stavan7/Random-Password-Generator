import React, { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const App = () => {

  const [password, setPassword] = useState('');
  const [passwordTwo, setPasswordTwo] = useState('');
  const [passwordThree, setPasswordThree] = useState('');
  const [passwordFour, setPasswordFour] = useState('');

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
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />

      <View style={styles.upperSection}>
        <Text style={styles.title}>Generate a</Text>
        <Text style={styles.subTitle}>random password</Text>
        <Text style={styles.supportingText}>Never use an insecure password again</Text>
        <TouchableOpacity style={styles.button} onPress={() => getRandomPassword()} activeOpacity={0.5}>
          <Text style={styles.btnText}>Generate passwords</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.partition}></View>

      <View style={styles.bottomSection}>
        <Text style={styles.passView}>{password}</Text>
        <Text style={styles.passView}>{passwordTwo}</Text>
      </View>

      <View style={[styles.bottomSection, { marginTop: 20 }]}>
        <Text style={styles.passView}>{passwordThree}</Text>
        <Text style={styles.passView}>{passwordFour}</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F2937'
  },
  upperSection: {
    marginTop: '50%',
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: '800',
    fontFamily: 'Karla-Bold',
  },
  subTitle: {
    fontSize: 30,
    color: '#4ADF86',
    fontWeight: '800',
    fontFamily: 'Karla-Bold',
  },
  supportingText: {
    fontSize: 17,
    marginTop: 10,
    color: '#D5D4D8',
    fontFamily: 'Inter-Regular',
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
  passView: {
    height: 50,
    width: '45%',
    color: '#55F991',
    borderRadius: 5,
    fontSize: 14,
    textAlign: 'center',
    backgroundColor: '#273549',
    textAlignVertical: 'center',
    fontFamily: 'Inter-Regular',
  }
})

export default App