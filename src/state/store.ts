import { configureStore } from '@reduxjs/toolkit';
import gridSlice from './reducers/gridSlice';

export const store = configureStore({
    reducer: {
        gridSlice
    },
});

export type StoreState = ReturnType<typeof store.getState>;
