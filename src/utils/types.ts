import React from "react";
import { NavigationScreenProp } from "react-navigation";

export interface IWithNavigation {
  navigation: NavigationScreenProp<any, any>;
}

export interface IWithChildren {
  children?:
    | React.ReactChildren
    | React.ReactElement
    | React.ReactElement[]
    | string
    | null;
}

export interface IWithStyle {
  style?: React.CSSProperties;
}
