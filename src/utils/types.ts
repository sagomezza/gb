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

export interface IWithChildrenAndProps extends IWithChildren {
  center?: boolean;
  maxWidth?: boolean;
}

export interface IWithStyle {
  style?: React.CSSProperties;
}
