import * as React from 'react';
import { rs } from 'utils/dimensions';
import { Spacing as SpacingStyled } from './styles';

const Spacing = ({ isHorizontal, size }: { isHorizontal?: boolean; size?: number }) => (
  <SpacingStyled isHorizontal={isHorizontal} size={rs(size ?? 20)} />
);

export default Spacing;
