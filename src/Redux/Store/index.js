import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../Slices';

const Store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // ignoredActionPaths: ['payload.socketModel'],
      },
    }),
});

export default Store;