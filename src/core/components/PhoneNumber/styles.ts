import styled from 'styled-components/native';
import { View } from 'react-native';
import { TextInputNumber as TextInputNumberComponent } from '../TextInput';
import { rs } from '../../../utils/dimensions';

export const ContainerText = styled(View)({
  paddingLeft: rs(74),
});

export const ContainerInput = styled(View)({
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
});

export const ContainerWrapper = styled(View)({
  maxWidth: rs(304),
  alignSelf: 'center',
});

export const TextInputNumber = styled(TextInputNumberComponent)({
  flexGrow: 1,
});
