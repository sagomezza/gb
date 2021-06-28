import React from 'react';
import Spacing from 'components/Spacing';
import { View } from 'react-native';
import { TextAlert, TitleInput, ButtonModal } from './styles';

type ContentModalChildrenProps = {
  children?: React.ReactNode | React.ReactNodeArray;
  onSubmit: () => void;
  text: string;
  textButton: string;
  title: string;
};

const ContentModalChildren = ({
  children,
  onSubmit,
  text,
  textButton,
  title,
}: ContentModalChildrenProps) => (
  <View>
    <TitleInput>{title}</TitleInput>
    <Spacing />
    <TextAlert textAlign="left">{text}</TextAlert>
    <Spacing />
    {children}
    <Spacing />
    <ButtonModal onPress={onSubmit}>{textButton}</ButtonModal>
  </View>
);

export default ContentModalChildren;
