import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
    user: any | null,
    isAuthenticated: boolean
}

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action: PayloadAction<any>) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem('token')
        },
    },
});

export const { setAuth, logout } = authSlice.actions;
export default authSlice.reducer;