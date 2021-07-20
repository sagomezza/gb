import DefaultIcon from 'components/DefaultIcon';
import { theme } from 'config/theme';
import React, { useEffect, useState } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { CornerContainer, Input, SearchInputMainContainer } from './styles';

type ISearchInputProps = {
  clearButton?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  onChange: (value: string) => void;
  placeholder?: string;
  searchButton?: boolean;
};

const SearchInput = ({
  clearButton = false,
  containerStyle = {},
  onChange,
  placeholder,
  searchButton = true,
}: ISearchInputProps) => {
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    if (onChange) {
      onChange(value);
    }
  }, [onChange, value]);

  return (
    <SearchInputMainContainer style={[containerStyle]}>
      {searchButton ? (
        <CornerContainer>
          <DefaultIcon color="gray3" iconFamily="FontAwesome5" name="search" size={18} />
        </CornerContainer>
      ) : (
        <></>
      )}

      <Input
        placeholder={placeholder || 'Search'}
        placeholderTextColor={theme.colors.placeholder}
        value={value}
        onChangeText={setValue}
      />
      {clearButton ? (
        <CornerContainer>
          <DefaultIcon
            color="gray3"
            iconFamily="FontAwesome5"
            margin={10}
            name="times"
            size={12}
            onPress={() => setValue('')}
          />
        </CornerContainer>
      ) : (
        <View />
      )}
    </SearchInputMainContainer>
  );
};

export default SearchInput;
