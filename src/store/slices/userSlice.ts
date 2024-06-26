import { createSlice } from "@reduxjs/toolkit";
import { getUserFromLS } from "../../utils/getUserFromLs";
import { IUser } from "../../interfaces/interfaces";

interface userState {
  user: IUser | null;
}

const initialState: userState = {
  user: getUserFromLS(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logOutUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logOutUser } = userSlice.actions;
export default userSlice.reducer;
