import React, { useMemo } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import {
  EmailLabel,
  NameLabel,
  SignOutButton,
  styles,
  SampleView,
  LineBreak,
} from "./styles";
import EditionLink from "./EditionLink";
import ProfilePicture from "./Picture";
import Input from "./Input";

const ProfileScreen = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = useMemo(
    () => ({
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    }),
    [isDarkMode]
  );

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <ScrollView
        contentContainerStyle={styles.mainScrollViewContainer}
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <ProfilePicture />
        <NameLabel size={14} variant="extraBold">
          Persons Name
        </NameLabel>
        <EmailLabel size={12} variant="regular">
          person@gmail.com
        </EmailLabel>
        <SignOutButton>Sign Out</SignOutButton>

        <LineBreak />

        <SampleView>
          <EditionLink label="Account details" to="#" />
          <EditionLink label="Payment Deatils" to="#" />
          <EditionLink label="Addresses" to="#" />
        </SampleView>

        <SampleView>
          <Input
            label="First name"
            placeholder="John"
            value=""
            onChange={() => {}}
          />
        </SampleView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
