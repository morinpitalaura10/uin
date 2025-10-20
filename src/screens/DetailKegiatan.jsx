import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';
import { Ionicons } from '@expo/vector-icons';

export default function DetailKegiatan({ route, navigation }) {
  const { data } = route.params || {};

  const detailList = [
    { id: 1, title: 'Peserta Terdaftar', info: '120 Mahasiswa' },
    { id: 2, title: 'Tanggal Pelaksanaan', info: '25 Oktober 2025' },
    { id: 3, title: 'Lokasi', info: 'Aula Fakultas Sains & Teknologi' },
    { id: 4, title: 'Pemateri', info: 'Ir. Ahmad Ramdhan, M.Kom' },
    { id: 5, title: 'Penyelenggara', info: 'UKM Teknologi & Inovasi' },
    { id: 6, title: 'Deskripsi', info: 'Kegiatan ini membahas tren AI terbaru dalam dunia industri.' },
  ];

  return (
    <View style={[GlobalStyle.screen, { backgroundColor: '#FEFFF0' }]}>
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20,
          borderBottomWidth: 2,
          borderColor: '#9DC08B',
          paddingBottom: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#40513B" />
        </TouchableOpacity>
        <Text style={[GlobalStyle.header, { color: '#40513B', fontSize: 20 }]}>
          Detail
        </Text>
        <View style={{ width: 28 }} /> {/* Spacer biar rata tengah */}
      </View>

      {/* Detail content */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: 25 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#40513B' }}>
            {data?.title || 'Judul Kegiatan'}
          </Text>
          <Text style={{ color: '#555', marginTop: 4 }}>
            {data?.desc || 'Deskripsi kegiatan ini.'}
          </Text>
        </View>

        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
          {detailList.map((item) => (
            <View
              key={item.id}
              style={{
                width: '47%',
                backgroundColor: '#E9F5E9',
                padding: 10,
                borderRadius: 10,
                marginBottom: 10,
              }}
            >
              <Text style={{ fontWeight: 'bold', color: '#40513B' }}>
                {item.title}
              </Text>
              <Text style={{ color: '#333' }}>{item.info}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Footer navigasi manual */}
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
        <TouchableOpacity onPress={() => navigation.navigate('UserDashboard')}>
          <Ionicons name="home-outline" size={26} color="#40513B" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-circle-outline" size={26} color="#40513B" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Ionicons name="log-out-outline" size={26} color="#40513B" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
