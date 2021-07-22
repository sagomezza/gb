import { ImageSourcePropType } from 'react-native';

const POST_PICTURE_A = require('../../../assets/imgs/PostPictureA.png');
const POST_PICTURE_B = require('../../../assets/imgs/PostPictureB.png');

export interface IHomeScreenPostElement {
  description: string;
  id: number | string;
  picture: ImageSourcePropType;
  postedBy: string;
  title: string;
}

const BaseHomeScreenMockData: IHomeScreenPostElement[] = [
  {
    id: 1,
    description: 'Hi everyone! I am organizing a weekly running group!',
    picture: POST_PICTURE_A,
    postedBy: 'Molly B.',
    title: 'Running Group',
  },
  {
    id: 2,
    description:
      'Sup Guys, I’m looking for someone to work out with and spot me on the bench press.',
    picture: POST_PICTURE_B,
    postedBy: 'Hunter S.',
    title: 'Looking for a Spotter',
  },
];

export const HomeScreenMockData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => ({
  ...BaseHomeScreenMockData[i % 2 === 0 ? 1 : 0],
  id: i,
}));
