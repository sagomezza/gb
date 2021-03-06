import { DrawerNavigationProp } from '@react-navigation/drawer';
import React from 'react';
import { NavigationScreenProp } from 'react-navigation';

export interface IWithNavigation {
  navigation: NavigationScreenProp<any, any>;
}

export interface IWithChildren {
  children?:
    | React.ReactChildren
    | React.ReactElement
    | React.ReactElement[]
    | JSX.Element[]
    | JSX.Element
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

export interface IWithDrawerNavigation {
  navigation: DrawerNavigationProp<any, any>;
  route?: {
    params?: any | null;
  };
}
