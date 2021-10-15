import React, { useState } from 'react';
import { DefaultIcon, GBScreenHeader, Input } from 'components';
import { navigator } from 'navigation';
import routes from 'config/routes';
import Conversations from './components/Conversations';
import { SafeAreaView } from '../styles';
import {
  MainContainer,
  NewMessageIconContainer,
  SearchContainer,
  SearchInputContainer,
} from './styles';

const MessagesScreen: React.FC = () => {
  const [query, setQuery] = useState('');
  const { goToPage } = navigator();

  return (
    <SafeAreaView>
      <GBScreenHeader title={routes.MESSAGES} />
      <MainContainer>
        <SearchContainer>
          <SearchInputContainer>
            <Input
              placeholder="🔍 Search"
              useShadow={false}
              value={query}
              onChangeText={(newText) => setQuery(newText)}
            />
          </SearchInputContainer>
          <NewMessageIconContainer>
            <DefaultIcon
              color="secondary"
              iconFamily="FontAwesome"
              name="pencil-square-o"
              size={30}
              onPress={() => goToPage(routes.NEWMESSAGE)}
            />
          </NewMessageIconContainer>
        </SearchContainer>
        <Conversations query={query} />
      </MainContainer>
    </SafeAreaView>
  );
};

export default MessagesScreen;
