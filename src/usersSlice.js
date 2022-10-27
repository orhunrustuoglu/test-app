import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  content: [],
  loadingUsers: true,
  currentUser: {},
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, content) => {
      state.content = content.payload;
      console.log(state.content);
    },
    setLoadingUsers: (state, loadingStatus) => {
      state.loadingUsers = loadingStatus.payload;
      console.log(state.loadingUsers);
    },
    setCurrentUser: (state, user) => {
      state.currentUser = user.payload;
      console.log(state.currentUser);
    },
  },
});

export const getUsers = () => async (dispatch) => {
  //fetching users...
  await fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //console.log(data);
      dispatch(setUsers(data));
      dispatch(setLoadingUsers(false));
    });
};

export const setUser = (user) => (dispatch) => {
  dispatch(setCurrentUser(user));
};

export const { setUsers, setLoadingUsers, setCurrentUser } = usersSlice.actions;

export default usersSlice.reducer;
