import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GlobalStyle from '../styles/GlobalStyle';

export default function Profile({ navigation }) {
  // nanti kamu bisa ganti data ini dengan data dari context atau database
  const userData = {
    namaLengkap: 'Morin Pita Laura',
    namaPanggilan: 'Laura',
    nim: '2388010040',
    role: 'Admin',
    jurusan: 'Informatika',
    ttl: 'Bandung, 10 Mei',
    foto: require('../../assets/morin.jpg'), // ganti sesuai foto kamu
  };

  return (
    <View style={[GlobalStyle.screen, { backgroundColor: '#F8FFF8' }]}>
      {/* Header */}
      <Text style={[GlobalStyle.header, { color: '#40513B', marginBottom: 20 }]}>
        Profil Saya
      </Text>

      {/* Foto Profil */}
      <View style={{ alignItems: 'center', marginBottom: 25 }}>
        <Image
          source={userData.foto}
          style={{
            width: 130,
            height: 130,
            borderRadius: 65,
            borderWidth: 3,
            borderColor: '#9DC08B',
          }}
        />
      </View>

      {/* Data Identitas */}
      <View style={{ gap: 10, paddingHorizontal: 25 }}>
        <Text style={GlobalStyle.profileText}>NIM                      : {userData.nim}</Text>
        <Text style={GlobalStyle.profileText}>Nama Lengkap     : {userData.namaLengkap}</Text>
        <Text style={GlobalStyle.profileText}>Nama Panggilan   : {userData.namaPanggilan}</Text>
        <Text style={GlobalStyle.profileText}>Role                      : {userData.role}</Text>
        <Text style={GlobalStyle.profileText}>Jurusan                 : {userData.jurusan}</Text>
        <Text style={GlobalStyle.profileText}>TTL                       : {userData.ttl}</Text>
      </View>

      {/* Footer Navigasi */}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: '#E8F3E8',
          borderTopWidth: 1,
          borderTopColor: '#C7D2C5',
          paddingVertical: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate('AdminDashboard')}>
          <Ionicons name="home-outline" size={26} color="#40513B" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-circle" size={26} color="#40513B" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('PublicHome')}>
          <Ionicons name="log-out-outline" size={26} color="#40513B" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
