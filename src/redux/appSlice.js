import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    open: false,
    selected: null,
    searchText: "",
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
  },
});
export const { setOpen, setSelected, setSearchText } = appSlice.actions;
export default appSlice.reducer;
