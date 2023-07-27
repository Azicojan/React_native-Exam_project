// actions.js

import { SET_USERS, ADD_USER, DELETE_USER } from './actionTypes';
import { LOG_OUT } from './actionTypes';


export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users,
});

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});

export const deleteUser = (userId) => ({
  type: DELETE_USER,
  payload: userId,
});

export const logoutUser = () => {
  return {
    type: LOG_OUT,
  };
};
