import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Back from '../assets/image/backimage.jpeg';

export default function Login({ navigation }) {
  return (
    <View>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.selamat}>Selamat Datang Kembali</Text>
        <Text style={{ color: 'grey' }}>Tap untuk lanjut</Text>
        <TextInput placeholder="Email" style={styles.inputlog} />
        <TextInput placeholder="Password" style={styles.inputlog} />
        <TouchableOpacity
          style={styles.buttonlog}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonlog}
          onPress={() => {
            navigation.navigate('Register');
          }}>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  back123: {
    flex: 1,
  },

  selamat: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 140,
    color: 'black',
  },

  inputlog: {
    borderWidth: 1,
    width: 250,
    height: 40,
    marginTop: 10,
    borderRadius: 5,
    paddingLeft: 10,
  },

  buttonlog: {
    width: 200,
    height: 40,
    backgroundColor: 'aqua',
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
