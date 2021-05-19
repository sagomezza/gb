// COMPONENTS
import icon from "react-native-vector-icons/MaterialIcons";
import iconAwesome from "react-native-vector-icons/FontAwesome";
import iconAntDesign from "react-native-vector-icons/AntDesign";
import iconEntypo from "react-native-vector-icons/Entypo";
import iconEvil from "react-native-vector-icons/EvilIcons";
import iconFeather from "react-native-vector-icons/Feather";
import iconAwesome5 from "react-native-vector-icons/FontAwesome5";
import iconFontisto from "react-native-vector-icons/Fontisto";
import iconFoundation from "react-native-vector-icons/Foundation";
import iconIonicons from "react-native-vector-icons/Ionicons";
import iconMaterialCommunity from "react-native-vector-icons/MaterialCommunityIcons";
import iconOcticons from "react-native-vector-icons/Octicons";
import iconZocial from "react-native-vector-icons/Zocial";
import iconSimpleLine from "react-native-vector-icons/SimpleLineIcons";

// STYLES
import styled from "styled-components/native";
import { theme } from "config/theme";

// UTILS
import { nlz, rs } from "utils/dimensions";

export const Icon = styled(icon)((p) => ({
  color: theme.colors[p.color],
  fontSize: nlz(p.size),
  margin: rs(p.margin),
}));

export const IconAwesome = styled(iconAwesome)((p) => ({
  color: theme.colors[p.color],
  fontSize: nlz(p.size),
  margin: rs(p.margin),
}));

export const IconAntDesign = styled(iconAntDesign)((p) => ({
  color: theme.colors[p.color],
  fontSize: nlz(p.size),
  margin: rs(p.margin),
}));

export const IconEntypo = styled(iconEntypo)((p) => ({
  color: theme.colors[p.color],
  fontSize: nlz(p.size),
  margin: rs(p.margin),
}));

export const IconEvil = styled(iconEvil)((p) => ({
  color: theme.colors[p.color],
  fontSize: nlz(p.size),
  margin: rs(p.margin),
}));

export const IconFeather = styled(iconFeather)((p) => ({
  color: theme.colors[p.color],
  fontSize: nlz(p.size),
  margin: rs(p.margin),
}));

export const IconAwesome5 = styled(iconAwesome5)((p) => ({
  color: theme.colors[p.color],
  fontSize: nlz(p.size),
  margin: rs(p.margin),
}));

export const IconFontisto = styled(iconFontisto)((p) => ({
  color: theme.colors[p.color],
  fontSize: nlz(p.size),
  margin: rs(p.margin),
}));

export const IconFoundation = styled(iconFoundation)((p) => ({
  color: theme.colors[p.color],
  fontSize: nlz(p.size),
  margin: rs(p.margin),
}));

export const IconIonicons = styled(iconIonicons)((p) => ({
  color: theme.colors[p.color],
  fontSize: nlz(p.size),
  margin: rs(p.margin),
}));

export const IconMaterialCommunity = styled(iconMaterialCommunity)((p) => ({
  color: theme.colors[p.color],
  fontSize: nlz(p.size),
  margin: rs(p.margin),
}));

export const IconOcticons = styled(iconOcticons)((p) => ({
  color: theme.colors[p.color],
  fontSize: nlz(p.size),
  margin: rs(p.margin),
}));

export const IconZocial = styled(iconZocial)((p) => ({
  color: theme.colors[p.color],
  fontSize: nlz(p.size),
  margin: rs(p.margin),
}));

export const IconSimpleLine = styled(iconSimpleLine)((p) => ({
  color: theme.colors[p.color],
  fontSize: nlz(p.size),
  margin: rs(p.margin),
}));
