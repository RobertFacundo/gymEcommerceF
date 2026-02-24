import { combineReducers } from "@reduxjs/toolkit";
import authReducer from '../../features/auth/redux/auth.slice';
import cartReducer from '../../features/cart/redux/cart.slice'
import themeReducer from './slice/theme.slice'

export const rootReducer = combineReducers({
    auth: authReducer,
    theme: themeReducer,
    cart: cartReducer
});

export type RootState = ReturnType<typeof rootReducer>;