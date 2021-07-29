export const getSpotsState = (state) => state.spots;
export const getActiveSpot = (state) => getSpotsState(state).activeSpot;
export const getActivePlace = (state) => getSpotsState(state).activePlace;
