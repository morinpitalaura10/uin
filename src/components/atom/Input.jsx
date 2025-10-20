import { TextInput } from 'react-native';
import GlobalStyle from '../../styles/GlobalStyle';

export default function Input({ placeholder, value, onChangeText, secure }) {
  return (
    <TextInput
      style={GlobalStyle.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secure}
    />
  );
}
