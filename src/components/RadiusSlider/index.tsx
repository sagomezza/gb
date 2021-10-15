import * as React from 'react';
import { View, ViewStyle, Dimensions } from 'react-native';
import Slider from '@react-native-community/slider';
import { rs } from 'utils/dimensions';
import { theme } from 'config/theme';
import { TextMaxSlider, TitleContainer, TitleSlider, ValueSlider } from './styles';

const { width } = Dimensions.get('window');

type RadiusSliderProps = {
  maximumTrackTintColor?: string;
  maximumValue: number;
  minimumTrackTintColor?: string;
  minimumValue?: number;
  onSlidingComplete?: (value) => void;
  onValueChange?: (value) => void;
  step?: number;
  style?: ViewStyle;
  value: number;
};

export const RadiusSlider: React.FC<RadiusSliderProps> = ({
  maximumTrackTintColor,
  maximumValue,
  minimumTrackTintColor,
  minimumValue,
  onSlidingComplete,
  onValueChange,
  step,
  style,
  value,
}: RadiusSliderProps) => {
  const logic = maximumValue * 1.35;

  const left = value >= 100000000 ? (value * width) / logic - 40 : (value * width) / logic;
  return (
    <View>
      <TitleContainer>
        <TitleSlider>Radius</TitleSlider>
        <TextMaxSlider>Max</TextMaxSlider>
      </TitleContainer>

      <Slider
        maximumTrackTintColor={maximumTrackTintColor}
        maximumValue={maximumValue}
        minimumTrackTintColor={minimumTrackTintColor}
        minimumValue={minimumValue}
        step={step}
        style={style}
        value={value}
        onSlidingComplete={onSlidingComplete}
        onValueChange={onValueChange}
      />
      <ValueSlider
        style={{
          transform: [{ translateX: left }],
        }}
      >
        {value} miles
      </ValueSlider>
    </View>
  );
};

RadiusSlider.defaultProps = {
  minimumValue: 1,
  minimumTrackTintColor: theme.colors.primary,
  maximumTrackTintColor: theme.colors.graySlider,
  style: {
    width: rs(327),
    height: rs(17),
    marginTop: rs(7),
  },
  step: 1,
};

export default RadiusSlider;
