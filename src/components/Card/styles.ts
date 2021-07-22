import { StyleSheet, View } from 'react-native';
import styled from 'styled-components';
import { rs } from 'utils/dimensions';

export const shadowCardStyles = StyleSheet.create({
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,
    elevation: 5,
  },
});

export const CardContainer = styled(View)`
  background-color: white;
  border-radius: ${rs(10)}px;
  width: 100%;
`;
