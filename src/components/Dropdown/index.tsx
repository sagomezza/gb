import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { DropDownPickerProps } from 'react-native-dropdown-picker';
import { StyleSheet, Keyboard, View } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import { theme } from 'config/theme';

export const Dropdown = (props: DropDownPickerProps) => {
  const [value, setValue] = useState('dropdown-0');

  return (
    <DropDownPicker
      {...props}
      defaultValue={value}
      onChangeItem={(item) => setValue(item.value)}
      containerStyle={{ height: 48 }}
      style={{
        backgroundColor: theme?.colors?.white,
        width: '100%',
      }}
      itemStyle={{
        justifyContent: 'flex-start',
        paddingHorizontal: 10,
        height: 38,
      }}
      activeItemStyle={{
        backgroundColor: theme?.colors?.primary,
      }}
      activeLabelStyle={{
        color: theme?.colors?.white,
      }}
      dropDownStyle={{
        paddingHorizontal: 0,
      }}
      globalTextStyle={{
        fontSize: 15,
      }}
      onOpen={() => Keyboard.dismiss()}
      customArrowDown={() => {
        return (
          <View style={styles?.rightDropDownContent}>
            <View style={styles?.verticalLine} />
            <Icon name={'triangle-down'} size={20} color={theme?.colors?.gray5} />
          </View>
        );
      }}
      customArrowUp={() => {
        return (
          <View style={styles?.rightDropDownContent}>
            <View style={styles?.verticalLine} />
            <Icon name={'triangle-up'} size={20} color={theme?.colors?.gray5} />
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  rightDropDownContent: {
    flexDirection: 'row',
    height: '100%',
  },
  verticalLine: {
    borderLeftWidth: 1,
    borderLeftColor: theme?.colors?.borderColor,
    marginRight: 12,
    marginVertical: -13,
  },
});
