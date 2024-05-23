import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/action/userAction';
import Loginsvg from '../assets/login.svg';
import { StyleSheet } from 'react-native';
import { Input, Text, View, Button } from 'native-base';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (!username || !password) {
      setErrorMessage('Please enter both username and password.');
      return;
    }
    // You may want to add further validation here before dispatching the action
    dispatch(loginUser({ username, password }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <Loginsvg style={{marginBottom:100}} height="300" width="300" />
      <Input
        placeholder="Email"
        size="lg"
        onChangeText={(text) => setUsername(text)}
        value={username}
        style={styles.input}
      />

      <Input
        size="lg"
        placeholder="Password"
        type="password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        style={styles.input}
      />

      {errorMessage !== '' && (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      )}

      <Button onPress={handleLogin} style={styles.button}>
        <Text>Login</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingLeft: 10,
    width: '100%',
  },
  errorMessage: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    width:80
  },
});

export default Login;
