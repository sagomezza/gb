import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { RouteProp } from '@react-navigation/native';
import { ChatBubble } from './styled';

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

  const { item } = route.params;

  const getMessage = (dataUser) => {
    const data = [];
    const user = {
      _id: dataUser.id,
      name: dataUser.user,
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

  return (
    <GiftedChat
      alwaysShowSend
      messages={messages}
      renderBubble={renderBubble}
      user={{
        _id: 1,
      }}
      onSend={(messages) => onSend(messages)}
    />
  );
};

export default ChatScreen;
