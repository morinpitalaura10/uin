import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GlobalStyle from '../styles/GlobalStyle';
import { AuthContext } from '../context/AuthContext';

export default function UserDashboard({ navigation }) {
  const { logout } = useContext(AuthContext);

  const cardData = [
    { id: 1, title: 'Seminar Teknologi 2025', desc: 'Ikuti seminar AI & inovasi kampus' },
    { id: 2, title: 'Pelatihan Kepemimpinan', desc: 'Tingkatkan softskill mahasiswa' },
    { id: 3, title: 'Lomba Desain Poster', desc: 'Kreativitas untuk mahasiswa FST' },
  ];

  return (
    <View style={[GlobalStyle.screen, { backgroundColor: '#FFFBE9' }]}>
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
          source={require('../../assets/dika.png')}
          style={{ width: 50, height: 50, borderRadius: 25 }}
        />
        <Text style={[GlobalStyle.header, { color: '#40513B' }]}>User</Text>
      </View>

      {/* ScrollView supaya bisa digeser */}
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        {cardData.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={GlobalStyle.card}
            onPress={() =>
              navigation.navigate('DetailKegiatan', { data: item })
            }
          >
            <Text style={GlobalStyle.cardTitle}>{item.title}</Text>
            <Text style={GlobalStyle.cardText}>{item.desc}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

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
        <TouchableOpacity onPress={() => navigation.navigate('UserDashboard')}>
          <Ionicons name="home-outline" size={26} color="#40513B" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-circle-outline" size={26} color="#40513B" />
        </TouchableOpacity>

        <TouchableOpacity onPress={logout}>
          <Ionicons name="log-out-outline" size={26} color="#40513B" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
