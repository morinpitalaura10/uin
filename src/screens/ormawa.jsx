import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GlobalStyle from '../styles/GlobalStyle';

export default function Ormawa({ navigation }) {
  const ormawaList = [
    {
      id: 1,
      nama: 'SEMA UNIVERSITAS',
      deskripsi: 'Senat Eksekutif Mahasiswa tingkat universitas.',
      tanggal: '15 Okt 2025',
      gambar: require('../../assets/logosemau.jpg'),
    },
    {
      id: 2,
      nama: 'DEMA UNIVERSITAS',
      deskripsi: 'Dewan Eksekutif Mahasiswa tingkat universitas.',
      tanggal: '10 Okt 2025',
      gambar: require('../../assets/logodemau.jpg'),
    },
    {
      id: 3,
      nama: 'SEMA FAKULTAS',
      deskripsi: 'Senat Eksekutif Mahasiswa tingkat fakultas.',
      tanggal: '8 Okt 2025',
      gambar: require('../../assets/logosemaf.jpg'),
    },
    {
      id: 4,
      nama: 'DEMA FAKULTAS',
      deskripsi: 'Dewan Eksekutif Mahasiswa tingkat fakultas.',
      tanggal: '5 Okt 2025',
      gambar: require('../../assets/logodemaf.jpg'),
    },
    {
      id: 5,
      nama: 'HMJ',
      deskripsi: 'Himpunan Mahasiswa Jurusan.',
      tanggal: '5 Okt 2025',
      gambar: require('../../assets/logohmj.jpg'),
    },
  ];

  return (
    <View style={[GlobalStyle.screen, { backgroundColor: '#FDFCF5' }]}>
      {/* Header */}
      <View
        style={{
          borderWidth: 2,
          borderColor: '#9DC08B',
          borderRadius: 12,
          padding: 20,
          marginBottom: 20,
          alignItems: 'center',
          backgroundColor: '#c5e5a9dd',
        }}
      >
        <Text style={[GlobalStyle.header, { marginBottom: 5 }]}>ORMAWA</Text>
        <Text style={{ color: '#40513B', fontSize: 16 }}>
          Organisasi Mahasiswa UIN
        </Text>
      </View>

      {/* Grid Card */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginBottom: 80, // biar gak ketiban navigasi bawah
          }}
        >
          {ormawaList.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={{
                width: '48%',
                backgroundColor: '#E8F3E8',
                borderRadius: 12,
                padding: 10,
                marginBottom: 15,
                shadowColor: '#000',
                shadowOpacity: 0.1,
                shadowOffset: { width: 0, height: 2 },
              }}
              onPress={() => navigation.navigate('DetailOrmawa', { ormawa: item })}
            >
              <Image
                source={item.gambar}
                style={{ width: '100%', height: 145, borderRadius: 10 }}
                resizeMode="cover"
              />
              <Text style={{ fontWeight: 'bold', fontSize: 16, marginTop: 8, color: '#40513B' }}>
                {item.nama}
              </Text>
              <Text style={{ fontSize: 12, color: '#666', marginBottom: 5 }}>
                {item.tanggal}
              </Text>
              <Text style={{ fontSize: 13, color: '#333' }}>{item.deskripsi}</Text>
            </TouchableOpacity>
          ))}
        </View>
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
        <TouchableOpacity onPress={() => navigation.navigate('PublicHome')}>
          <Ionicons name="home-outline" size={26} color="#40513B" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('About')}>
          <Ionicons name="information-circle-outline" size={26} color="#40513B" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Ionicons name="person-circle-outline" size={26} color="#40513B" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
