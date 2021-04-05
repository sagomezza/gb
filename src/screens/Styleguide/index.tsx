import React from 'react';
import { ScrollView } from 'react-native';
import { StyleguideColors, StyleguideTitle } from './Styleguide';

import {
  Title,
  Subheading,
  Paragraph,
  Spacing,
  Caption,
  CaptionButton,
  Caption14,
  Caption12,
  PrimaryButton,
  SecondaryButton,
  LinkButton,
  TextInput,
  TextInputNumber,
  TextInputPasscode,
  TextInput6Digit,
  CaptionLabel,
  PhoneNumber,
  Dropdown,
} from 'components';
import Alert from 'components/Alert';
import Container from 'components/Container';

const StyleguideScreen = ({ navigation }) => {
  const [visible, setVisible] = React.useState(false);
  const hideModal = () => setVisible(false);
  const showModal = () => setVisible(true);

  return (
    <Container style={{ flex: 1 }}>
      <ScrollView style={{ paddingRight: 10, paddingLeft: 10 }}>
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

        <StyleguideTitle>Buttons</StyleguideTitle>

        <Spacing size={10} />
        <PrimaryButton mode="contained" onPress={() => navigation.goBack()}>
          Enable
        </PrimaryButton>

        <Spacing size={10} />
        <SecondaryButton onPress={() => console.log('Pressed')}>Enable</SecondaryButton>
        <Spacing size={10} />

        <Spacing size={10} />
        <LinkButton onPress={() => console.log('Pressed')}>Link Button</LinkButton>
        <Spacing size={10} />

        <SecondaryButton color="#A1D5FF" mode="contained" onPress={() => console.log('Pressed')}>
          Disable
        </SecondaryButton>

        <StyleguideTitle>Colors</StyleguideTitle>
        <StyleguideColors />

        <StyleguideTitle>Dropdown</StyleguideTitle>
        <Dropdown items={[{ label: 'dropdown-0', value: 'dropdown-0' }]} />

        <StyleguideTitle>Fields</StyleguideTitle>
        <CaptionLabel>Number</CaptionLabel>
        <TextInputNumber placeholder="Number Field" />

        <Spacing size={20} />
        <CaptionLabel>Text Field</CaptionLabel>
        <TextInput placeholder="Number Field" />

        <Spacing size={20} />
        <PhoneNumber numberLabel="Phone Number" />

        <Spacing size={20} />
        <TextInputPasscode onChange={(value) => value} />

        <Spacing size={20} />
        <TextInput6Digit onChange={(value) => value} />

        <Spacing size={20} />
        <CaptionLabel>Caption</CaptionLabel>

        <StyleguideTitle>Modals</StyleguideTitle>
        <PrimaryButton onPress={showModal}>Open Modal Warning</PrimaryButton>
      </ScrollView>

      <Alert
        text="A valid mobile phone number is
        required to start an account"
        textButton="OK"
        visible={visible}
        onDismiss={hideModal}
        hideModal={hideModal}
      />
    </Container>
  );
};

export default StyleguideScreen;
