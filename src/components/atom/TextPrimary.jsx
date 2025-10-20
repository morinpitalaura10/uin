import { Text } from 'react-native';
import GlobalStyle from '../../styles/GlobalStyle';

export default function TextPrimary({ children, style }) {
  return <Text style={[GlobalStyle.textPrimary, style]}>{children}</Text>;
}
