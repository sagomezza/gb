import React, { ReactElement } from 'react';
import { theme } from 'config/theme';
import { Pressable } from 'react-native';
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

export enum FontFamily {
  AntDesign = 'AntDesign',
  Entypo = 'Entypo',
  EvilIcons = 'EvilIcons',
  Feather = 'Feather',
  FontAwesome = 'FontAwesome',
  FontAwesome5 = 'FontAwesome5',
  Fontisto = 'Fontisto',
  Foundation = 'Foundation',
  Ionicons = 'Ionicons',
  MaterialCommunityIcons = 'MaterialCommunityIcons',
  MaterialIcons = 'MaterialIcons',
  Octicons = 'Octicons',
  SimpleLineIcons = 'SimpleLineIcons',
  Zocial = 'Zocial',
}
export type FontFamilyType = keyof typeof FontFamily;
interface IDefaultIconProps {
  color: keyof typeof theme.colors;
  iconFamily?: FontFamilyType;
  margin?: number;
  name: string;
  onLongPress?: () => void;
  onPress?: () => void;
  size: number;
  solid?: boolean;
}

const DefaultIcon = ({
  color,
  iconFamily,
  margin = 0,
  name,
  onLongPress,
  onPress,
  size,
  solid,
}: IDefaultIconProps) => {
  const RenderIcon = (): ReactElement => {
    switch (iconFamily) {
      case FontFamily.AntDesign:
        return <IconAntDesign color={color} margin={margin} name={name} size={size} />;
      case FontFamily.Entypo:
        return <IconEntypo color={color} margin={margin} name={name} size={size} />;
      case FontFamily.EvilIcons:
        return <IconEvil color={color} margin={margin} name={name} size={size} />;
      case FontFamily.Feather:
        return <IconFeather color={color} margin={margin} name={name} size={size} />;
      case FontFamily.FontAwesome:
        return <IconAwesome color={color} margin={margin} name={name} size={size} />;
      case FontFamily.FontAwesome5:
        return <IconAwesome5 color={color} margin={margin} name={name} size={size} solid={solid} />;
      case FontFamily.Fontisto:
        return <IconFontisto color={color} margin={margin} name={name} size={size} />;
      case FontFamily.Foundation:
        return <IconFoundation color={color} margin={margin} name={name} size={size} />;
      case FontFamily.Ionicons:
        return <IconIonicons color={color} margin={margin} name={name} size={size} />;
      case FontFamily.MaterialCommunityIcons:
        return <IconMaterialCommunity color={color} margin={margin} name={name} size={size} />;
      case FontFamily.Octicons:
        return <IconOcticons color={color} margin={margin} name={name} size={size} />;
      case FontFamily.SimpleLineIcons:
        return <IconSimpleLine color={color} margin={margin} name={name} size={size} />;
      case FontFamily.Zocial:
        return <IconZocial color={color} margin={margin} name={name} size={size} />;
      default:
        return <Icon color={color} margin={margin} name={name} size={size} />;
    }
  };
  return (
    <Pressable onLongPress={onLongPress} onPress={onPress}>
      <RenderIcon />
    </Pressable>
  );
};

export default DefaultIcon;
