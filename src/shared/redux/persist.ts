import storage from 'redux-persist/lib/storage';
import type { PersistConfig } from 'redux-persist';
import type { RootState } from './rootReducer';

export const persistConfig: PersistConfig<RootState> = {
    key: 'root',
    storage,
    whitelist: ['auth','theme'],
};