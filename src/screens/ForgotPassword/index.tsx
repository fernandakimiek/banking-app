import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function ForgotPassword() {
  const [email, setEmail] = React.useState('');

  return (
    <>
      <View style={styles.container}>
        <View style={styles.login}>
          <Text style={styles.title}>
            Insert your email to recovery the password
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            placeholder="E-mail"
            value={email}
          />
        </View>
        <View style={styles.button}>
          <Button
            color="#973aee"
            title="Recovery password"
            onPress={() => console.log('logou')}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: '#d4c3eb', height: '100%'},
  login: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#63099e',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    width: '80%',
    borderRadius: 10,
    borderColor: '#b65ef1',
  },
  logo: {
    height: 150,
    width: 150,
    marginBottom: 40,
  },
  button: {
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 30,
  },
  footerText: {
    fontSize: 14,
  },
  textPressable: {
    fontSize: 14,
    color: '#721f99',
    fontWeight: 'bold',
  },
  containerForgotPassword: {
    alignItems: 'center',
  },
});
