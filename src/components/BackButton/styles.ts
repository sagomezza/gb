import { View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import icon from 'react-native-vector-icons/MaterialIcons';
import { theme } from 'config/theme';

export const Container = styled(View)({
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
});

export const IconContainer = styled(View)({
  alignItems: 'flex-start',
  padding: 5,
});

export const Icon = styled(icon)((p) => ({
  color: p.color || theme.colors.primary,
  fontSize: p.size || 20,
  alignSelf: 'flex-start',
}));

export const FullWidthTouchable = styled(TouchableOpacity)`
  width: 100%;
`;
