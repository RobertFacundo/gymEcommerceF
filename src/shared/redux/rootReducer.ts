import { combineReducers } from "@reduxjs/toolkit";
import authReducer from '../../features/auth/redux/auth.slice';
import themeReducer from './slice/theme.slice'

export const rootReducer = combineReducers({
    auth: authReducer,
    theme: themeReducer
});

export type RootState = ReturnType<typeof rootReducer>;