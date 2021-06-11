// Libs
import React from 'react';
// Components
import SettingsView from '../Settings';
import Switch from '../Switch';
import { Subheading } from '../Subheading';

type Props = {
  label: string;
  onValueChange: () => void;
  value: boolean;
};

export default function SettingsItem({ label, onValueChange, value }: Props) {
  return (
    <SettingsView>
      <Subheading>{label}</Subheading>
      <Switch value={value} onValueChange={onValueChange} />
    </SettingsView>
  );
}
