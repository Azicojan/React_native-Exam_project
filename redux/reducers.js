// reducers.js

import { SET_USERS, ADD_USER, DELETE_USER, LOG_OUT } from './actionTypes';

const initialState = {
  users: [],
  isLoggedIn: false,
  // Add other state properties as needed
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
        
      };
      
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
      case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: true, // Set the login status to false on logout
      };
    // Add other cases for additional actions
    default:
      return state;
      
  }
  
};

export default reducer;
