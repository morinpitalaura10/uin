import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';
import { Ionicons } from '@expo/vector-icons';

export default function AdminOrmawaCRUD({ navigation }) {
  return (
    <View style={[GlobalStyle.screen, { backgroundColor: '#FFFCEE' }]}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Header */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 25,
            borderBottomWidth: 2,
            borderColor: '#9DC08B',
            paddingBottom: 10,
          }}
        >
          <Image
            source={require('../../assets/icon.png')}
            style={{ width: 50, height: 50, borderRadius: 25 }}
          />
          <Text style={[GlobalStyle.header, { color: '#40513B' }]}>
            CRUD ORMAWA
          </Text>
        </View>

        {/* Card Section */}
        <View style={{ gap: 15 }}>
          <TouchableOpacity style={GlobalStyle.card}>
            <Text style={GlobalStyle.cardTitle}>Tambah Data ORMAWA</Text>
            <Text style={GlobalStyle.cardText}>
              Tambahkan organisasi mahasiswa baru ke sistem
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={GlobalStyle.card}>
            <Text style={GlobalStyle.cardTitle}>Lihat Data</Text>
            <Text style={GlobalStyle.cardText}>
              Tampilkan seluruh data organisasi mahasiswa aktif
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={GlobalStyle.card}>
            <Text style={GlobalStyle.cardTitle}>Update Data</Text>
            <Text style={GlobalStyle.cardText}>
              Edit informasi organisasi yang sudah terdaftar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={GlobalStyle.card}>
            <Text style={GlobalStyle.cardTitle}>Hapus Data</Text>
            <Text style={GlobalStyle.cardText}>
              Hapus data ORMAWA yang tidak aktif
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={GlobalStyle.card}>
            <Text style={GlobalStyle.cardTitle}>Cari Data</Text>
            <Text style={GlobalStyle.cardText}>
              Temukan ORMAWA berdasarkan nama atau bidangnya
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={GlobalStyle.card}>
            <Text style={GlobalStyle.cardTitle}>Export Data</Text>
            <Text style={GlobalStyle.cardText}>
              Simpan data ORMAWA ke format Excel atau PDF
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Tombol Home */}
      <View
        style={{
          position: 'absolute',
          bottom: 20,
          alignSelf: 'center',
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate('AdminDashboard')}
          style={{
            backgroundColor: '#9DC08B',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 8,
            paddingVertical: 10,
            paddingHorizontal: 25,
            borderRadius: 25,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 3,
            elevation: 3,
          }}
        >
          <Ionicons name="home-outline" size={22} color="#fff" />
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>
            Home
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
