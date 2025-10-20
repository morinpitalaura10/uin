import { View, Text, TouchableOpacity } from 'react-native';
import GlobalStyle from '../../styles/GlobalStyle';

export default function KartuKegiatan({ item, onPress }) {
  return (
    <TouchableOpacity style={GlobalStyle.card} onPress={onPress}>
      <Text style={GlobalStyle.cardTitle}>{item.judul}</Text>
      <Text>{item.tanggal}</Text>
      <Text>{item.deskripsi}</Text>
    </TouchableOpacity>
  );
}
