import React from 'react';
import Switch from 'components/Switch';
import { Container, Label } from './styles';
import { ProfilePrivacyProps } from './types';

const ProfilePrivacy: React.FC<ProfilePrivacyProps> = ({
  onValueChange,
  value,
}: ProfilePrivacyProps) => (
  <Container>
    <Label>Profile Privacy: Public</Label>
    <Switch value={value} onValueChange={(val) => onValueChange(val)} />
  </Container>
);

export default ProfilePrivacy;
