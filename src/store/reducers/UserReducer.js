// initial state
const initialState = {
  name: "Artur Gouveia",
};

// reducer
export function userReducer(state = initialState, action) {
  return state;
}

// selectors
export const getName = (state) => state.user.name;
