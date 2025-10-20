import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';
import { Ionicons } from '@expo/vector-icons';

export default function AdminKegiatanCRUD({ navigation }) {
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
            CRUD Kegiatan Kampus
          </Text>
        </View>

        {/* Card Section */}
        <View style={{ gap: 15 }}>
          <TouchableOpacity style={GlobalStyle.card}>
            <Text style={GlobalStyle.cardTitle}>Tambah Kegiatan</Text>
            <Text style={GlobalStyle.cardText}>
              Tambahkan kegiatan kampus baru ke dalam sistem
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={GlobalStyle.card}>
            <Text style={GlobalStyle.cardTitle}>Lihat Semua Kegiatan</Text>
            <Text style={GlobalStyle.cardText}>
              Tampilkan daftar seluruh kegiatan kampus yang terdaftar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={GlobalStyle.card}>
            <Text style={GlobalStyle.cardTitle}>Update Kegiatan</Text>
            <Text style={GlobalStyle.cardText}>
              Edit informasi kegiatan yang telah ada
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={GlobalStyle.card}>
            <Text style={GlobalStyle.cardTitle}>Hapus Kegiatan</Text>
            <Text style={GlobalStyle.cardText}>
              Hapus kegiatan yang sudah selesai atau dibatalkan
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={GlobalStyle.card}>
            <Text style={GlobalStyle.cardTitle}>Filter Berdasarkan Tanggal</Text>
            <Text style={GlobalStyle.cardText}>
              Lihat kegiatan berdasarkan rentang waktu tertentu
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={GlobalStyle.card}>
            <Text style={GlobalStyle.cardTitle}>Export Laporan</Text>
            <Text style={GlobalStyle.cardText}>
              Unduh laporan kegiatan dalam format Excel atau PDF
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
