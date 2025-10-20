import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';
import { AuthContext } from '../context/AuthContext';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    const success = login(username, password);
    if (!success) {
      Alert.alert('Login gagal', 'Periksa kembali username dan password');
    }
  };

  return (
    <View
      style={[
        GlobalStyle.screen,
        {
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F6FFF2',
          paddingHorizontal: 30,
        },
      ]}
    >
      {/* Logo UIN */}
      <Image
        source={require('../../assets/logoUIN.png')}
        style={{
          width: 100,
          height: 100,
          resizeMode: 'contain',
          marginBottom: 15,
        }}
      />

      {/* Header */}
      <Text
        style={[
          GlobalStyle.header,
          { marginBottom: 25, color: '#40513B', textAlign: 'center' },
        ]}
      >
        Login SIMAK-UIN
      </Text>

      {/* Input username */}
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={[
          GlobalStyle.input,
          {
            width: '100%',
            backgroundColor: '#E8F3E8',
            borderRadius: 15,
            marginBottom: 10,
          },
        ]}
      />

      {/* Input password */}
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={[
          GlobalStyle.input,
          {
            width: '100%',
            backgroundColor: '#E8F3E8',
            borderRadius: 15,
          },
        ]}
      />

      {/* Tombol login */}
      <TouchableOpacity
        style={[
          GlobalStyle.button,
          { width: '100%', marginTop: 15, backgroundColor: '#40513B' },
        ]}
        onPress={handleLogin}
      >
        <Text style={[GlobalStyle.buttonText, { color: '#fff' }]}>Login</Text>
      </TouchableOpacity>

      {/* Tombol kembali ke home */}
      <TouchableOpacity
        style={[
          GlobalStyle.button,
          { width: '100%', backgroundColor: '#E8F3E8', marginTop: 10 },
        ]}
        onPress={() => navigation.navigate('PublicHome')}
      >
        <Text style={[GlobalStyle.buttonText, { color: '#40513B' }]}>
          ← Kembali ke Home
        </Text>
      </TouchableOpacity>

      {/* Info bawah */}
      <Text
        style={{
          marginTop: 25,
          textAlign: 'center',
          color: '#555',
          fontStyle: 'italic',
        }}
      >
        Admin / Mahasiswa | Password: 12345
      </Text>
    </View>
  );
}
