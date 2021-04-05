import * as React from 'react';
import { Button } from 'react-native-paper';
import { theme } from 'config/theme';

export const PrimaryButton = (props) => (
  <Button
    mode="contained"
    uppercase={false}
    rippleColor={theme.colors.onPrimary}
    labelStyle={{
      color: theme.colors.white,
      fontSize: 16,
      fontWeight: theme.fonts.regular.fontWeight,
      fontFamily: theme.fonts.regular.fontFamily,
    }}
    contentStyle={{ height: 48, shadowOpacity: 0 }}
    color={theme.colors.primary}
    {...props}
  />
);

export const SecondaryButton = (props) => (
  <Button
    mode="contained"
    uppercase={false}
    rippleColor={theme.colors.onSecondary}
    labelStyle={{
      color: theme.colors.white,
      fontSize: 16,
      fontWeight: theme.fonts.regular.fontWeight,
      fontFamily: theme.fonts.regular.fontFamily,
    }}
    contentStyle={{ height: 48 }}
    color={theme.colors.secondary}
    {...props}
  />
);

export const LinkButton = (props) => (
  <Button
    mode="text"
    rippleColor={'transparent'}
    uppercase={false}
    labelStyle={{
      fontSize: 16,
      letterSpacing: 0,
      fontWeight: props.fontRegular
        ? theme.fonts.regular.fontWeight
        : theme.fonts.medium.fontWeight,
      fontFamily: theme.fonts.regular.fontFamily,
      marginHorizontal: 0,
      marginVertical: 0,
      margin: 0,
    }}
    contentStyle={{ height: 25, marginHorizontal: 0, marginVertical: 0 }}
    color={theme.colors.primary}
    {...props}
  />
);

export const OutlinedButton = (props) => (
  <Button
    mode="outlined"
    rippleColor={'transparent'}
    uppercase={false}
    labelStyle={{
      color: theme.colors.primary,
      fontSize: 16,
      fontWeight: theme.fonts.regular.fontWeight,
      fontFamily: theme.fonts.regular.fontFamily,
    }}
    contentStyle={{ height: 48 }}
    style={{
      borderColor: theme.colors.primary,
    }}
    {...props}
  />
);
