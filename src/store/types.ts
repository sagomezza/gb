export type ExampleState = {
  exampleError: string | null;
  fetchExample: null | FetchExampleEntity;
  homeWord: string;
};

export type FetchExampleEntity = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: [string];
  species: [string];
  vehicles: [];
  starships: [];
  created: string;
  edited: string;
  url: string;
};
