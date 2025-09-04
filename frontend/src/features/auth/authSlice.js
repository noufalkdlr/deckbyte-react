import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isAdmin: localStorage.getItem("isAdmin") === "true" || false,
    email : null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login(state, action) {
            state.isAdmin = true;
            state.email = action.payload.email;
            localStorage.setItem("isAdmin", "ture");
        },
        logout(state, action) {
            state.isAdmin = false;
            state.email = null;
            localStorage.removeItem("isAdmin");
        },

    }
});

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;