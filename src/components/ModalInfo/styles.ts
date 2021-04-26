import styled from 'styled-components/native';
import { theme } from 'config/theme';
import Typography from 'components/Typography';

const getColorBasedOnEmphasis = (emphasis: string, theme: any) => {
  const { colors } = theme;

  if (emphasis === "SUCCESS") {
    return colors.primary;
  }

  if (emphasis === "ERROR") {
    return colors.error;
  }

  return colors.primary;
};

export const FadedContainer = styled.View`
  align-items: center;
  background-color: ${theme.menu.shadowColor};
  flex: 1;
  height: 250px;
  justify-content: center;
  padding-left: 25px;
  padding-right: 25px;
`;

export const ModalCardContainer = styled.View`
  min-height: 340px;
  padding-top: 25px;
  position: relative;
  width: 100%;
  z-index: 1;
`;

export const CardContainer = styled.View`
  align-items: center;
  background-color: white;
  border-radius: 15px;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  padding-top: 25px;
  position: relative;
`;

export const CardFooter = styled.View`
  background-color: ${({ emphasis }) =>
    getColorBasedOnEmphasis(emphasis, theme)};
  border-bottom-left-radius: ${() => 2 * theme.roundness}px;
  border-bottom-right-radius: ${() => 2 * theme.roundness}px;
  bottom: -24px;
  height: 24px;
  position: absolute;
  width: 80%;
`;

export const EmphasisIconContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  position: absolute;
  width: 100%;
  z-index: 1;
`;

export const EmphasisIcon = styled.Image`
  height: 103px;
  width: 103px;
`;

export const TextContainer = styled.View`
  align-items: center;
  justify-content: space-around;
  max-width: 65%;
  min-height: 150px;
  padding-top: 25px;
`;

export const Title = styled(Typography)`
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 5px;
  text-align: center;
`;

export const Subtitle = styled(Typography)`
  font-size: 17px;
  font-weight: normal;
  text-align: center;
`;

export const ActionLabel = styled(Typography)`
  color: ${({ emphasis }) =>
    getColorBasedOnEmphasis(emphasis, theme)};
  font-size: 18px;
  text-align: center;
`;

export const CloseButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 40px;
  width: 100%;
`;

export const CloseIcon = styled.Image`
  height: 38px;
  width: 38px;
`;
