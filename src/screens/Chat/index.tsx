/* eslint-disable react/jsx-no-bind */
import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat, Send } from 'react-native-gifted-chat';
import { RouteProp } from '@react-navigation/native';
import { SafeAreaView } from 'screens/styles';
import { DefaultIcon, GBScreenHeader } from 'components';
import { ChatContainer, ChatBubble, IconContainer } from './styles';

type MessagesStackParamList = {
  Messages: {
    item: string;
  };
};

type ChatScreenRouteProp = RouteProp<MessagesStackParamList, 'Messages'>;

interface IChatScreenProps {
  route: ChatScreenRouteProp;
}

const ChatScreen: React.FC<IChatScreenProps> = ({ route }: IChatScreenProps) => {
  const [messages, setMessages] = useState([]);
  const [userName, setUsername] = useState('');

  const { item } = route.params;

  const getMessage = (dataUser) => {
    const data = [];
    setUsername(`${dataUser.user.firstName} ${dataUser.user.lastName}`);
    const user = {
      _id: dataUser.id,
      name: `${dataUser.user.firstName} ${dataUser.user.lastName}`,
      avatar: dataUser.avatar,
    };

    dataUser.messages.forEach((msg) => {
      const aux = {
        _id: msg.id,
        text: msg.text,
        createdAt: msg.createdAt,
        user,
      };
      data.push(aux);
    });

    return data;
  };

  useEffect(() => {
    const messageData = JSON.parse(item);
    const newMessages = getMessage(messageData);
    setMessages(newMessages);
  }, [item]);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
  }, []);

  function renderBubble(props) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <ChatBubble {...props} />;
  }

  function renderSend(props) {
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Send {...props}>
        <IconContainer>
          <DefaultIcon color="secondary" iconFamily="Feather" name="send" size={20} />
        </IconContainer>
      </Send>
    );
  }

  return (
    <SafeAreaView>
      <ChatContainer>
        <GBScreenHeader title={userName} />
        <GiftedChat
          alwaysShowSend
          messages={messages}
          renderBubble={renderBubble}
          renderSend={renderSend}
          user={{
            _id: 1,
          }}
          onSend={(messages) => onSend(messages)}
        />
      </ChatContainer>
    </SafeAreaView>
  );
};

export default ChatScreen;
