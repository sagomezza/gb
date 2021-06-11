import { View } from 'react-native';
import styled from 'styled-components/native';
import { rs } from '../../utils/dimensions';

type StyledSpaceProps = {
  isHorizontal: boolean;
  size: number;
};

export const Spacing = styled(View)(({ isHorizontal, size }: StyledSpaceProps) => ({
  height: !isHorizontal ? rs(size) : 'auto',
  width: isHorizontal ? rs(size) : 'auto',
}));
