import { View, TouchableOpacity, Text } from 'react-native';
import GlobalStyle from '../../styles/GlobalStyle';

export default function CardGrid({ data, onPress }) {
  return (
    <View style={GlobalStyle.grid}>
      {data.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={GlobalStyle.card}
          onPress={() => onPress(item)}
        >
          <Text style={GlobalStyle.cardTitle}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
