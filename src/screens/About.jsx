import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GlobalStyle from '../styles/GlobalStyle';

export default function About({ navigation }) {
  return (
    <View style={GlobalStyle.screen}>
      {/* Header */}
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
        <Text style={[GlobalStyle.header, { marginBottom: 8 }]}>Tentang SIMAK-UIN</Text>
        <Text style={{ color: '#40513B', fontSize: 16 }}>
          Sistem Informasi Kegiatan Mahasiswa
        </Text>
      </View>

      {/* Konten deskripsi */}
      <ScrollView style={{ flex: 1, marginBottom: 80, paddingHorizontal: 16 }}>
        <Text style={{ fontSize: 16, color: '#40513B', marginBottom: 15, textAlign: 'justify' }}>
          <Text style={{ fontWeight: 'bold' }}>SIMAK-UIN</Text> adalah aplikasi berbasis mobile 
          yang dirancang untuk memudahkan mahasiswa dalam mengakses informasi seputar kegiatan 
          kampus di lingkungan UIN. Melalui aplikasi ini, pengguna dapat mengetahui jadwal, 
          deskripsi, dan dokumentasi kegiatan dari berbagai organisasi mahasiswa.
        </Text>

        <Text style={{ fontSize: 16, color: '#40513B', marginBottom: 10 }}>
          ✳️ <Text style={{ fontWeight: 'bold' }}>Ormawa (Organisasi Mahasiswa)</Text>  
          — berisi daftar organisasi kemahasiswaan seperti SEMA, DEMA, HMJ, dan lainnya.  
          Mahasiswa bisa mengenal struktur, program kerja, serta kegiatan yang mereka lakukan.
        </Text>

        <Text style={{ fontSize: 16, color: '#40513B', marginBottom: 10 }}>
          🎯 <Text style={{ fontWeight: 'bold' }}>UKM (Unit Kegiatan Mahasiswa)</Text>  
          — menampung berbagai kegiatan pengembangan minat dan bakat seperti seni, olahraga, 
          riset, dan lainnya. Di sini mahasiswa bisa mencari wadah sesuai passion mereka.
        </Text>

        <Text style={{ fontSize: 16, color: '#40513B', marginBottom: 10 }}>
          🎉 <Text style={{ fontWeight: 'bold' }}>Acara Kampus</Text>  
          — menyajikan agenda kegiatan terbaru di kampus seperti seminar, lomba, pelatihan, 
          hingga event tahunan yang diselenggarakan oleh Ormawa atau pihak kampus.
        </Text>

        <Text style={{ fontSize: 16, color: '#40513B', marginTop: 15, textAlign: 'justify' }}>
          Dengan antarmuka yang sederhana dan informatif, SIMAK-UIN bertujuan menjadi pusat 
          informasi kegiatan kampus yang mudah diakses oleh mahasiswa dan civitas akademika.
        </Text>
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
        <TouchableOpacity onPress={() => navigation.navigate('PublicHome')}>
          <Ionicons name="home-outline" size={26} color="#40513B" />
        </TouchableOpacity>

        {/* About */}
        <TouchableOpacity onPress={() => navigation.navigate('About')}>
          <Ionicons name="information-circle-outline" size={26} color="#40513B" />
        </TouchableOpacity>

        {/* Login */}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Ionicons name="person-circle-outline" size={26} color="#40513B" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
