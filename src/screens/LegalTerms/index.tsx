import * as React from 'react';
import { ScrollView } from 'react-native';
import { GeneralText } from 'components/GeneralText';
import { IWithDrawerNavigation } from 'utils/types';
import ScreensHeader from 'components/ScreensHeader';
import { BodyTerms, ContainerTerms, HeaderContainer } from './styles';
import { privacy, terms } from './text';

interface ILegalProps {
  contentType: string;
}

const LegalTermsScreen: React.FC<IWithDrawerNavigation> = ({ route }: IWithDrawerNavigation) => {
  const routeParams: ILegalProps = route?.params;

  return (
    <ContainerTerms>
      <HeaderContainer>
        <ScreensHeader isGoBack />
      </HeaderContainer>
      <BodyTerms>
        <ScrollView showsVerticalScrollIndicator={false}>
          <GeneralText
            content={routeParams.contentType === 'terms' ? terms : privacy}
            title={routeParams.contentType === 'terms' ? 'Terms and conditions' : 'Privacy policy'}
            version="0.0.1"
          />
        </ScrollView>
      </BodyTerms>
    </ContainerTerms>
  );
};

export default LegalTermsScreen;
