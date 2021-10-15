import React from 'react';
import { Switch } from 'react-native-switch';
import { theme } from 'config/theme';
import { styles } from './styles';
import { SwitchProps } from './types';

const SwitchComponent: React.FC<SwitchProps> = ({ onValueChange, value }: SwitchProps) => (
  <Switch
    backgroundActive={theme.switch.backgroundActive}
    backgroundInactive={theme.switch.backgroundInactive}
    circleActiveColor={theme.switch.circleActiveColor}
    circleBorderWidth={0}
    circleInActiveColor={theme.switch.circleInActiveColor}
    containerStyle={styles.containerStyle}
    renderActiveText={false}
    renderInActiveText={false}
    switchBorderRadius={15}
    value={value}
    onValueChange={(val) => onValueChange(val)}
  />
);

export default SwitchComponent;
