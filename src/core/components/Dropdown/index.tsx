import React from 'react';

import DropDownPicker, { DropDownPickerProps } from 'react-native-dropdown-picker';
import { Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import { theme } from 'config/theme';

import { styles, RightDropDownContent, VerticalLine } from './styles';

export const Dropdown = (props: DropDownPickerProps) => (
  <DropDownPicker
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    activeItemStyle={styles.activeItemStyle}
    activeLabelStyle={styles.activeLabelStyle}
    containerStyle={styles.containerStyle}
    customArrowDown={() => (
      <RightDropDownContent>
        <VerticalLine />
        <Icon color={theme.colors.gray5} name="triangle-down" size={20} />
      </RightDropDownContent>
    )}
    customArrowUp={() => (
      <RightDropDownContent>
        <VerticalLine />
        <Icon color={theme.colors.gray5} name="triangle-up" size={20} />
      </RightDropDownContent>
    )}
    dropDownStyle={styles.dropDownStyle}
    globalTextStyle={styles.globalTextStyle}
    itemStyle={styles.itemStyle}
    labelStyle={styles.labelStyle}
    placeholderStyle={styles.placeholderStyle}
    onOpen={() => Keyboard.dismiss()}
  />
);
