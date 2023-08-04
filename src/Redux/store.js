import { configureStore } from "@reduxjs/toolkit";

import userSlice from "../Redux/Reducers/userReducer";

export default configureStore({
  reducer: {
    user: userSlice,
  },
});
