import React from 'react';
import {Button, Image, StyleSheet, TextInput, View} from 'react-native';

export default function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  // const navigation = useNavigation<StackTypes>();
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://icons.iconarchive.com/icons/flat-icons.com/flat/256/Wallet-icon.png',
        }}
      />
      {/* <Text style={styles.title}>Login</Text> */}
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        placeholder="E-mail"
        value={email}
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Senha"
      />
      <Button
        color="#0DD6BC"
        title="Login"
        onPress={() => console.log('logou')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    width: '80%',
    borderRadius: 30,
    borderColor: '#0DD6BC',
  },
  logo: {
    height: 120,
    width: 120,
    paddingBottom: 50,
    marginBottom: 50,
  },
});
