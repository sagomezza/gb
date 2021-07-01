import BackButton from 'components/BackButton';
import { theme } from 'config/theme';
import React from 'react';
import {
  PaddedContainer,
  MainContainer,
  TitleContainer,
  HeaderText,
  ButtonContainer,
} from './styles';

interface IScreensHeaderProps {
  isGoBack?: boolean;
  justifyContent?: 'center' | 'flex-end' | 'flex-start' | 'space-around' | 'space-between';
  rightAligned?: boolean;
}

const ScreensHeader: React.FC<IScreensHeaderProps> = ({
  isGoBack,
  justifyContent = 'center',
  rightAligned,
}: IScreensHeaderProps) => (
  <>
    <MainContainer>
      <PaddedContainer justifyContent={justifyContent}>
        {isGoBack ? (
          <ButtonContainer>
            <BackButton iconColor={theme.colors.greenPrimary} size={30} />
          </ButtonContainer>
        ) : (
          <></>
        )}
        <TitleContainer isGoBack={isGoBack} rightAligned={rightAligned}>
          <HeaderText>Gym Buddy</HeaderText>
        </TitleContainer>
      </PaddedContainer>
    </MainContainer>
  </>
);

export default ScreensHeader;
