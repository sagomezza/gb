import Spacing from 'components/Spacing';
import * as React from 'react';
import { View, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/EvilIcons';
import DotIcon from 'react-native-vector-icons/Entypo';
import CarIcon from 'react-native-vector-icons/FontAwesome5';
import { useRequestLocation } from 'hooks/useRequestLocation';
import {
  DirectionsButton,
  DistanceText,
  GymCardContainer,
  GymName,
  GymNameContainer,
  Line,
  TextButton,
} from './styles';

interface IGymCardProps {
  coordinates: {
    latitude: number;
    longitude: number;
  };
  distance: number;
  duration: number;
  name: string;
  onPressClose: () => void;
}

const GymCard: React.FC<IGymCardProps> = ({
  coordinates = { latitude: 0, longitude: 0 },
  distance,
  duration,
  name,
  onPressClose,
}: IGymCardProps) => {
  const { currentLocation } = useRequestLocation();
  const startNavigation = () => {
    const { latitude, longitude } = coordinates;
    const url = `https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&origin=${currentLocation.latitude},${currentLocation.longitude}&destination=${latitude},${longitude}`;
    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          // TO DO: Can't handle url:
        } else {
          return Linking.openURL(url);
        }
        return {};
      })
      .catch(() => {
        // TO DO: Can't handle url:
      });
  };
  return (
    <GymCardContainer>
      <GymNameContainer>
        <GymName numberOfLines={1}>{name}</GymName>
        <TouchableOpacity disallowInterruption onPress={onPressClose}>
          <Icon color="black" name="close" size={24} />
        </TouchableOpacity>
      </GymNameContainer>
      <View>
        <DistanceText>{(distance * 0.6214).toFixed(1)} MILES</DistanceText>
        <Line />
        <Spacing size={30} />
        <DirectionsButton
          disallowInterruption
          onPress={() => {
            startNavigation();
          }}
        >
          <TextButton>Directions</TextButton>
          <DotIcon color="white" name="dot-single" size={30} />
          <CarIcon color="white" name="car" size={30} />
          <TextButton isTime>{duration.toFixed()} min</TextButton>
        </DirectionsButton>
      </View>
    </GymCardContainer>
  );
};

export default GymCard;
