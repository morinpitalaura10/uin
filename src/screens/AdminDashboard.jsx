import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GlobalStyle from '../styles/GlobalStyle';
import { AuthContext } from '../context/AuthContext';

export default function AdminDashboard({ navigation }) {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout(); // reset user
    navigation.reset({
      index: 0,
      routes: [{ name: 'PublicHome' }], // langsung balik ke halaman utama
    });
  };

  return (
    <View style={GlobalStyle.screen}>
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 25,
          borderBottomWidth: 2,
          borderColor: '#9DC08B',
          paddingBottom: 10,
        }}
      >
        <Image
          source={require('../../assets/morin.jpg')}
          style={{ width: 50, height: 50, borderRadius: 25 }}
        />
        <Text style={[GlobalStyle.header, { color: '#40513B' }]}>
          Admin Dashboard
        </Text>
      </View>

      {/* Card Section */}
      <View style={{ gap: 15 }}>
        <TouchableOpacity
          style={GlobalStyle.card}
          onPress={() => navigation.navigate('AdminOrmawaCRUD')}
        >
          <Text style={GlobalStyle.cardTitle}>ORMAWA</Text>
          <Text style={GlobalStyle.cardText}>
            Kelola data organisasi mahasiswa
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={GlobalStyle.card}
          onPress={() => navigation.navigate('AdminUKMCRUD')}
        >
          <Text style={GlobalStyle.cardTitle}>UKM</Text>
          <Text style={GlobalStyle.cardText}>
            Kelola data Unit Kegiatan Mahasiswa
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={GlobalStyle.card}
          onPress={() => navigation.navigate('AdminKegiatanCRUD')}
        >
          <Text style={GlobalStyle.cardTitle}>Kegiatan Kampus</Text>
          <Text style={GlobalStyle.cardText}>
            Kelola Data Kegiatan Kampus
          </Text>
        </TouchableOpacity>
      </View>

      {/* Footer Navigasi Manual */}
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
          <Ionicons name="person-circle-outline" size={26} color="#40513B" />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={26} color="#40513B" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
