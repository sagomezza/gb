import styled from 'styled-components/native';
import { theme } from 'config/theme';
import { rs } from 'utils/dimensions';

export const _ModalInfo = styled.View`
  background-color: ${theme.colors.error};
  justify-content: center;
  align-items: center;
  height: ${rs(90)};
  width: '100%';
  z-index: 5000;
  position: absolute;
  bottom: 0;
`;
