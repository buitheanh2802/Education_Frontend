import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../Slices';

const Store = configureStore({
    reducer: rootReducer
});

export default Store;