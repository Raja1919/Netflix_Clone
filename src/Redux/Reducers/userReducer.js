import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    Login: (state, action) => {
      
        state.user=action.payload
    },
    logout:(state)=>{
      state.user=null
    }
    
  },
});


export const { Login,logout } = userSlice.actions;

export const selectUser=(state)=>state.user.user;

export default userSlice.reducer;
