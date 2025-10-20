import { TouchableOpacity, Text } from 'react-native';
import GlobalStyle from '../../styles/GlobalStyle';

export default function ButtonPrimary({ label, onPress }) {
  return (
    <TouchableOpacity style={GlobalStyle.button} onPress={onPress}>
      <Text style={GlobalStyle.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}
