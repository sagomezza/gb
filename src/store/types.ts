export type ExampleState = {
  exampleError: string | null;
  fetchExample: null | FetchExampleEntity;
  homeWord: string;
};

export type SearchState = {
  recentSearches: string[];
};

export interface IItemMessage {
  avatar: string;
  id: number;
  messages: {
    createdAt: Date;
    id: number;
    text: string;
  }[];
  user: string;
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
