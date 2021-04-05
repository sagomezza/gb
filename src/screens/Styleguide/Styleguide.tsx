import React from 'react';
import { View, Text } from 'react-native';
import { theme } from 'config/theme';

export const StyleguideTitle = (props) => (
  <Text
    style={{
      color: '#000',
      fontWeight: '700',
      fontSize: 12,
      marginBottom: 20,
      marginTop: 40,
    }}
  >
    {props.children}
  </Text>
);

const Color = (props) => (
  <View
    style={{
      backgroundColor: props.color,
      height: 40,
      marginBottom: 10,
      marginRight: 15,
      borderColor: '#F2F2F2',
      borderWidth: 1,
      borderStyle: 'solid',
      width: 40,
      borderRadius: 50,
    }}
  ></View>
);

export const StyleguideColors = () => (
  <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
    <Color color={theme.colors.white} />
    <Color color={theme.colors.primary} />
    <Color color={theme.colors.secondary} />
    <Color color={theme.colors.gray3} />
    <Color color={theme.colors.black} />
    <Color color={theme.colors.error} />
    <Color color={theme.colors.green} />
    <Color color={theme.colors.text} />
  </View>
);
