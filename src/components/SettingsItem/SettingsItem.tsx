//Libs
import React from 'react';
//Components
import SettingsView from '../Settings';
import Switch from '../Switch';
import { Subheading } from '../Subheading';

type Props = {
  label: string;
  value: boolean;
  onValueChange: () => void;
};

export default function SettingsItem({ label, value, onValueChange }: Props) {
  return (
    <SettingsView>
      <Subheading>{label}</Subheading>
      <Switch value={value} onValueChange={onValueChange} />
    </SettingsView>
  );
}
