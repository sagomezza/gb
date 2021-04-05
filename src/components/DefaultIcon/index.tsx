// REACT
import React, { ReactElement } from 'react';

// STYLES
import {
  Icon,
  IconAwesome,
  IconAntDesign,
  IconEntypo,
  IconEvil,
  IconFeather,
  IconAwesome5,
  IconFontisto,
  IconFoundation,
  IconIonicons,
  IconMaterialCommunity,
  IconOcticons,
  IconSimpleLine,
  IconZocial,
} from './styles';
import { theme } from 'config/theme';

import { Pressable } from 'react-native';

export enum fontFamily {
  MaterialIcons = 'MaterialIcons',
  FontAwesome = 'FontAwesome',
  AntDesign = 'AntDesign',
  Entypo = 'Entypo',
  EvilIcons = 'EvilIcons',
  Feather = 'Feather',
  FontAwesome5 = 'FontAwesome5',
  Fontisto = 'Fontisto',
  Foundation = 'Foundation',
  Ionicons = 'Ionicons',
  MaterialCommunityIcons = 'MaterialCommunityIcons',
  Octicons = 'Octicons',
  Zocial = 'Zocial',
  SimpleLineIcons = 'SimpleLineIcons',
}
type FontFamily = keyof typeof fontFamily;

interface Props {
  color: keyof typeof theme.colors;
  name: string;
  margin: number;
  size: number;
  onPress?: () => void;
  onLongPress?: () => void;
  iconFamily?: FontFamily;
}

const DefaultIcon = ({ iconFamily, color, size, margin, name, onPress, onLongPress }: Props) => {
  const RenderIcon = (): ReactElement => {
    switch (iconFamily) {
      case fontFamily.AntDesign:
        return <IconAntDesign name={name} color={color} size={size} margin={margin} />;
      case fontFamily.Entypo:
        return <IconEntypo name={name} color={color} size={size} margin={margin} />;
      case fontFamily.EvilIcons:
        return <IconEvil name={name} color={color} size={size} margin={margin} />;
      case fontFamily.Feather:
        return <IconFeather name={name} color={color} size={size} margin={margin} />;
      case fontFamily.FontAwesome:
        return <IconAwesome name={name} color={color} size={size} margin={margin} />;
      case fontFamily.FontAwesome5:
        return <IconAwesome5 name={name} color={color} size={size} margin={margin} />;
      case fontFamily.Fontisto:
        return <IconFontisto name={name} color={color} size={size} margin={margin} />;
      case fontFamily.Foundation:
        return <IconFoundation name={name} color={color} size={size} margin={margin} />;
      case fontFamily.Ionicons:
        return <IconIonicons name={name} color={color} size={size} margin={margin} />;
      case fontFamily.MaterialCommunityIcons:
        return <IconMaterialCommunity name={name} color={color} size={size} margin={margin} />;
      case fontFamily.Octicons:
        return <IconOcticons name={name} color={color} size={size} margin={margin} />;
      case fontFamily.SimpleLineIcons:
        return <IconSimpleLine name={name} color={color} size={size} margin={margin} />;
      case fontFamily.Zocial:
        return <IconZocial name={name} color={color} size={size} margin={margin} />;
      default:
        return <Icon name={name} color={color} size={size} margin={margin} />;
    }
  };
  return (
    <Pressable onPress={onPress} onLongPress={onLongPress}>
      <RenderIcon />
    </Pressable>
  );
};

DefaultIcon.defaultProps = {
  color: theme.colors.white,
  name: 'arrow',
  margin: 0,
  size: 15,
  font: 'MaterialIcons',
  onPress: () => {},
  onLongPress: () => {},
};

export default DefaultIcon;
