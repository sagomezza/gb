// @ts-nocheck
import { theme } from 'config/theme';
import React, { useEffect, useState } from 'react';
import { Switch } from 'react-native';
/* import { useSelector } from 'react-redux';
import { getUserQuery } from 'service/queries';
import { getUserId } from 'store/auth/authSelectors'; */
import { TogglerRow, TitleLabel } from '../styles';

const ACTIVE_COLOR = theme.colors.greenPrimary;
const UNACTIVE_COLOR = theme.colors.beige;
const ACTIVE_TRACK_COLOR = theme.colors.primaryBlur;
const UNACTIVE_TRACK_COLOR = theme.colors.darkerBeige;

const PrivacyTogggler = () => {
  const [isEnabled, toggleSwitch] = useState<boolean | null>(true);
  /* const userId = useSelector(getUserId);
  const { data: userData } = getUserQuery(
    { id: userId },
    {
      refetchOnWindowFocus: false,
      select: (data) => data.getUser ?? [],
    },
  ); */

  useEffect(() => {
    toggleSwitch(false);
  }, []);

  return (
    <TogglerRow>
      <TitleLabel>Profile Privacy: Public</TitleLabel>
      {isEnabled !== null && (
        <Switch
          ios_backgroundColor={UNACTIVE_COLOR}
          thumbColor={isEnabled ? ACTIVE_COLOR : UNACTIVE_COLOR}
          trackColor={{ true: ACTIVE_TRACK_COLOR, false: UNACTIVE_TRACK_COLOR }}
          value={isEnabled}
          onValueChange={() => {
            if (isEnabled) {
              toggleSwitch(false);
              // removeNotificationsArn(userData?.endpointArn);
              return;
            }

            if (isEnabled === false) {
              toggleSwitch(true);
              // registerNotificationsArn();
            }
          }}
        />
      )}
    </TogglerRow>
  );
};

export default PrivacyTogggler;
