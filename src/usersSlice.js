import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  content: [],
  loadingUsers: true,
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

export const { setUsers, setLoadingUsers } = usersSlice.actions;

export default usersSlice.reducer;
