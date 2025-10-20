import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GlobalStyle from '../styles/GlobalStyle';
import { AuthContext } from '../context/AuthContext';

export default function ProfileUser({ navigation }) {
  const { logout } = useContext(AuthContext);

  // Data user dummy (nanti bisa diganti dari database/login)
  const userData = {
    namaLengkap: 'Dika Hasan',
    namaPanggilan: 'Hasan',
    nim: '2388010033',
    jurusan: 'Informatika',
    ttl: 'Cirebon, 18 Agustus 2005',
    role: 'Mahasiswa',
    foto: require('../../assets/dika.png'), // pastiin ada gambarnya di folder assets
  };

  return (
    <View style={[GlobalStyle.screen, { backgroundColor: '#F6FFF2' }]}>
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 20,
          borderBottomWidth: 2,
          borderColor: '#9DC08B',
          paddingBottom: 10,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#40513B' }}>
          Profile Mahasiswa
        </Text>
      </View>

      {/* Isi */}
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <Image
          source={userData.foto}
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            borderWidth: 3,
            borderColor: '#9DC08B',
            marginBottom: 15,
          }}
        />
        <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#40513B' }}>
          {userData.namaLengkap}
        </Text>
        <Text style={{ fontSize: 16, color: '#61876E' }}>
          ({userData.namaPanggilan})
        </Text>
      </View>

      {/* Data Identitas */}
      <View
        style={{
          backgroundColor: '#E8F3E8',
          padding: 20,
          borderRadius: 20,
          marginHorizontal: 20,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowRadius: 3,
          elevation: 2,
        }}
      >
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontWeight: 'bold', color: '#40513B' }}>NIM</Text>
          <Text style={{ color: '#61876E' }}>{userData.nim}</Text>
        </View>

        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontWeight: 'bold', color: '#40513B' }}>Jurusan</Text>
          <Text style={{ color: '#61876E' }}>{userData.jurusan}</Text>
        </View>

        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontWeight: 'bold', color: '#40513B' }}>
            Tempat, Tanggal Lahir
          </Text>
          <Text style={{ color: '#61876E' }}>{userData.ttl}</Text>
        </View>

        <View>
          <Text style={{ fontWeight: 'bold', color: '#40513B' }}>Role</Text>
          <Text style={{ color: '#61876E' }}>{userData.role}</Text>
        </View>
      </View>

      {/* Footer Navigasi */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: '#E8F3E8',
          borderTopWidth: 1,
          borderTopColor: '#C7D2C5',
          paddingVertical: 10,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        {/* HOME */}
        <TouchableOpacity onPress={() => navigation.navigate('UserDashboard')}>
          <Ionicons name="home-outline" size={26} color="#40513B" />
        </TouchableOpacity>

        {/* PROFILE */}
        <TouchableOpacity onPress={() => navigation.navigate('ProfileUser')}>
          <Ionicons name="person-circle-outline" size={26} color="#40513B" />
        </TouchableOpacity>

        {/* LOGOUT */}
        <TouchableOpacity
          onPress={() => {
            logout();
            navigation.replace('Login');
          }}
        >
          <Ionicons name="log-out-outline" size={26} color="#40513B" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
