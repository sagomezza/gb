export type ExampleState = {
  exampleError: string | null;
  fetchExample: null | FetchExampleEntity;
  homeWord: string;
};

export type SearchState = {
  recentSearches: string[];
};

export interface IItemMessage {
  age: number;
  avatar: string;
  gender: string;
  id: number;
  interests: string[];
  location: string;
  messages: {
    createdAt: Date;
    id: number;
    text: string;
  }[];
  user: {
    firstName: string;
    lastName: string;
  };
}

export type MessagesState = {
  recentConversations: IItemMessage[];
};

export type FetchExampleEntity = {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: [string];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: [string];
  starships: [];
  url: string;
  vehicles: [];
};

export interface IModalState {
  hideModal: () => void;
  onDismiss: () => void;
  text: string;
  textButton: string;
  title: string;
  type: string;
  visible: boolean;
}

export type AppState = {
  modalAlert: IModalState;
};

export interface Spot {
  address: string;
  age?: number;
  coordinates: { latitude: number; longitude: number };
  email: string;
  gender?: string;
  id: number;
  interests?: string[];
  location?: string;
  name: string;
  phone: string;
  picture: string;
  type: string;
}

interface PlaceLocation {
  lat: number;
  lng: number;
}

export interface Place {
  geometry: { location: PlaceLocation };
  name: string;
  place_id: string;
}
