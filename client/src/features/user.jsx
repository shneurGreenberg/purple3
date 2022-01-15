import { createSlice } from "@reduxjs/toolkit";
// import { getUserFunc, setUseFunc } from "../api/api";

const initialState = {
  name: "",
  title: "",
  description: "",
  currentCompany: "",
  describYorself: "",
  phoneNumber: "",
  image: "",
};

export const userSlices = createSlice({
  name: "user",
  initialState: {
    value: initialState,
  },
  reducers: {
    setUser: (state, action) => {
      // debugger;
      console.log(action);

      state.value = action.payload;
      console.log(state.value);
    },
    // deleteUser: (state) => {
    //   state.value = {};
    // },
  },
});

export const { setUser, deleteUser } = userSlices.actions;
export default userSlices.reducer;
