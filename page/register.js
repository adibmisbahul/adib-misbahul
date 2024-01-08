import {
  View,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  Text,
} from 'react-native';

export default function Register({ navigation }) {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 30 }}>
        Register
      </Text>
      <TextInput placeholder="Username" style={styles.inputreg} />
      <TextInput placeholder="Email" style={styles.inputreg} />
      <TextInput placeholder="Pasword" style={styles.inputreg} />
      <TouchableOpacity style={styles.buttonreg}  onPress={() => {
            navigation.navigate('Home');
          }}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputreg: {
    borderWidth: 1,
    width: 250,
    height: 40,
    marginTop: 10,
    borderRadius: 5,
    paddingLeft: 10,
  },

  buttonreg: {
    width: 200,
    height: 40,
    backgroundColor: 'aqua',
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
