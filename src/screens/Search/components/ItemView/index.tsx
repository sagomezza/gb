import React from 'react';
import { TouchableOpacity } from 'react-native';
import { DetailItemList, TitleItemList } from './styles';

interface IItemViewProps {
  item: {
    email: string;
    id: number;
    label: string;
    owner: string;
  };
  onPress: () => void;
}

const ItemView: React.FC<IItemViewProps> = ({ item, onPress }: IItemViewProps) => (
  <TouchableOpacity onPress={onPress}>
    <TitleItemList>{item.label.toUpperCase()}</TitleItemList>
    <DetailItemList>
      {item.owner}
      {' ('}
      {item.email})
    </DetailItemList>
  </TouchableOpacity>
);

export default ItemView;
