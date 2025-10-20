import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';
import { Ionicons } from '@expo/vector-icons';

export default function AdminUKMCRUD({ navigation }) {
  return (
    <View style={[GlobalStyle.screen, { backgroundColor: '#FFFCEE' }]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
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
            source={require('../../assets/icon.png')}
            style={{ width: 50, height: 50, borderRadius: 25 }}
          />
          <Text style={[GlobalStyle.header, { color: '#40513B' }]}>
            CRUD UKM
          </Text>
        </View>

        {/* Card Section */}
        <View style={{ gap: 15 }}>
          <TouchableOpacity style={GlobalStyle.card}>
            <Text style={GlobalStyle.cardTitle}>Tambah UKM</Text>
            <Text style={GlobalStyle.cardText}>
              Tambahkan data Unit Kegiatan Mahasiswa baru
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={GlobalStyle.card}>
            <Text style={GlobalStyle.cardTitle}>Lihat UKM</Text>
            <Text style={GlobalStyle.cardText}>
              Tampilkan seluruh UKM yang aktif di kampus
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={GlobalStyle.card}>
            <Text style={GlobalStyle.cardTitle}>Update UKM</Text>
            <Text style={GlobalStyle.cardText}>
              Edit data dan informasi UKM terdaftar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={GlobalStyle.card}>
            <Text style={GlobalStyle.cardTitle}>Hapus UKM</Text>
            <Text style={GlobalStyle.cardText}>
              Hapus data UKM yang sudah tidak aktif
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={GlobalStyle.card}>
            <Text style={GlobalStyle.cardTitle}>Cari UKM</Text>
            <Text style={GlobalStyle.cardText}>
              Temukan UKM berdasarkan nama atau bidang
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={GlobalStyle.card}>
            <Text style={GlobalStyle.cardTitle}>Export Data UKM</Text>
            <Text style={GlobalStyle.cardText}>
              Simpan data UKM ke file Excel atau PDF
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
