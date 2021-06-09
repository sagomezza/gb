import React from "react";
import {
  Caption,
  Caption12,
  Caption14,
  CaptionButton,
  Paragraph,
  PrimaryButton,
  Spacing,
  Subheading,
  Title,
} from "core/components";
import Alert from "core/components/Alert";
import { IWithNavigation } from "utils/types";
import { StyleguideTitle } from "./Styleguide";
import { MainScrollView, StyleguideContainer } from "./styles";

interface IStyleguideScreenProps extends IWithNavigation {}

const StyleguideScreen: React.FC<IStyleguideScreenProps> = () => {
  const [visible, setVisible] = React.useState(false);
  const hideModal = () => setVisible(false);
  const showModal = () => setVisible(true);

  return (
    <StyleguideContainer>
      <MainScrollView>
        <StyleguideTitle>Text</StyleguideTitle>

        <Title>Titles Text</Title>
        <Subheading>Subtitles Text</Subheading>
        <Spacing size={10} />
        <Caption>Caption</Caption>
        <CaptionButton>Button Caption</CaptionButton>
        <Caption14>Caption 14</Caption14>
        <Caption12>Caption 12</Caption12>
        <Spacing size={10} />
        <Paragraph>Paragraph</Paragraph>
        <Spacing size={10} />

        <StyleguideTitle>Modals</StyleguideTitle>
        <PrimaryButton onPress={showModal}>Open Modal Warning</PrimaryButton>
      </MainScrollView>

      <Alert
        hideModal={hideModal}
        text="A valid mobile phone number is
        required to start an account"
        textButton="OK"
        visible={visible}
        onDismiss={hideModal}
      />
    </StyleguideContainer>
  );
};

export default StyleguideScreen;
