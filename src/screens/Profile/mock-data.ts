const MOCK_PROFILE_PICTURE = require('../../../assets/imgs/ProfilePhoto.png');

export const ProfileScreenMockData = {
  age: 26,
  city: 'Boise',
  description:
    'I love to get outside and hike the foothills! Looking for friend who is also a morning person!',
  interests: [
    {
      name: 'Running',
      id: 1,
    },
    {
      name: 'Hikking',
      id: 2,
    },
    {
      name: 'Yoga',
      id: 3,
    },
    {
      name: 'HIIT',
      id: 4,
    },
  ],
  isTrainer: false,
  name: 'Molly B.',
  profilePicture: MOCK_PROFILE_PICTURE,
  state: 'ID',
};

export type IProfileScreenProps = typeof ProfileScreenMockData;
