// REACT
import { Text } from 'react-native';

// STYLES
import styled from 'styled-components/native';
import { theme } from 'config/theme';

// TYPES

// UTILS
import { nlz } from 'utils/dimensions';
import { isIos } from 'utils/responsive';
import { StyledTextProps, TypographyVariant } from './types';

export const StyledText = styled(Text)((p: StyledTextProps) => ({
  color: theme.colors[p.color],
  fontFamily: isIos ? 'Arial' : TypographyVariant[p.variant],
  fontSize: nlz(p.size),
  lineHeight: p.lineSpacing,
  margin: p.margin,
  marginEnd: p.marginEnd,
  marginStart: p.marginStart,
  textAlign: p.textAlign,
}));
