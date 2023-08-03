import { configureStore } from '@reduxjs/toolkit';
import blocks from './slices/block';

const store = configureStore({
    reducer: {
        blocks
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;

export default store;