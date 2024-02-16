import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome</Text>
      <Text style={styles.usernameText}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan username anda"
        onChangeText={text => console.log(text)}
      />
      <Text style={styles.passwordText}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan password anda"
        secureTextEntry={true}
        onChangeText={text => console.log(text)}
      />
      <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#fc5e03',
    marginTop: 50,
    padding: 15,
    margin: 15,
    borderRadius: 12,
  },
  welcomeText: {
    color: 'black',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'left', 
    marginTop: 20,
    marginBottom: 50,
    marginLeft: 15, 
  },
  usernameText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left', 
    marginLeft: 15, 
  },
  passwordText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left', 
    marginLeft: 15,
    marginTop: 30, 
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft: 15,
    marginRight: 15,
    padding: 15,
    borderRadius: 12,
  },
  signInText: {
    color:  'white',
  }
});

export default App;