import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    open: false,
    selected: null,
    searchText: "",
    user: null,
  },
  reducers: {
    //actions
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const { setOpen, setSelected, setSearchText, setUser } =
  appSlice.actions;
export default appSlice.reducer;
