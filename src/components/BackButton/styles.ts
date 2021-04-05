import { View } from 'react-native';
import styled from 'styled-components/native';
import icon from 'react-native-vector-icons/MaterialIcons';
import { theme } from 'config/theme';
import _Typography from '../Typography';

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

export const Typography = styled(_Typography)((p: any) => ({
  marginRight: 35,
  fontSize: p.size || 18,
}));

export const TextContainer = styled(View)({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});
