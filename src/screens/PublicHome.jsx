import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';
import { Ionicons } from '@expo/vector-icons';

export default function PublicHome({ navigation }) {
  // Data kegiatan dengan foto dan halaman tujuan
  const kegiatanList = [
    {
      id: 1,
      judul: 'Organisasi Mahasiswa UIN [ORMAWA]',
      deskripsi: 'Jelajahi berbagai organisasi mahasiswa aktif di kampus!',
      image: require('../../assets/ormawa/ormawa1.jpg'), // ormawa
      page: 'ormawa',
    },
    {
      id: 2,
      judul: 'Unit Kegiatan Mahasiswa UIN [UKM]',
      deskripsi: 'Temukan UKM yang sesuai minat dan bakatmu!',
      image: require('../../assets/ukm/ukm1.jpg'), // ukm
      page: 'ukm',
    },
    {
      id: 3,
      judul: 'Acara Kampus UIN',
      deskripsi: 'Ikuti berbagai event menarik yang diadakan di kampus UIN!',
      image: require('../../assets/acara/if1.jpg'), // acara kampus
      page: 'acarakampus',
    },
  ];

  return (
    <View style={GlobalStyle.screen}>

      {/* Header dengan border sage */}
      <View
        style={{
          borderWidth: 2,
          borderColor: '#9DC08B',
          borderRadius: 0,
          padding: 10,
          marginBottom: 20,
          alignItems: 'center',
          backgroundColor: '#c5e5a9dd',
        }}
      >
        <Text style={[GlobalStyle.header, { marginBottom: 8 }]}>SIMAK-UIN</Text>
        <Text style={{ color: '#40513B', fontSize: 16 }}>
          Sistem Informasi Kegiatan Mahasiswa
        </Text>
      </View>

      {/* Daftar card kegiatan */}
      <ScrollView style={{ flex: 1, marginBottom: 80 }}>
        {kegiatanList.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              GlobalStyle.card,
              {
                marginBottom: 20,
                overflow: 'hidden',
                backgroundColor: '#F6FFF0',
                borderColor: '#B9D8A7',
                borderWidth: 1,
              },
            ]}
            onPress={() => navigation.navigate(item.page)}
          >
            <Image
              source={item.image}
              style={{
                width: '100%',
                height: 150,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
              }}
            />
            <View style={{ padding: 12 }}>
              <Text style={[GlobalStyle.cardTitle, { fontWeight: 'bold' }]}>
                {item.judul}
              </Text>
              <Text style={{ color: '#555' }}>{item.deskripsi}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      

      {/* Navigasi bawah */}
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
        {/* Home */}
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home-outline" size={26} color="#40513B" />
        </TouchableOpacity>

        {/* About */}
        <TouchableOpacity onPress={() => navigation.navigate('About')}>
          <Ionicons
            name="information-circle-outline"
            size={26}
            color="#40513B"
          />
        </TouchableOpacity>

        {/* Login */}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Ionicons name="person-circle-outline" size={26} color="#40513B" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
