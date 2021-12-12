import { createSlice } from '@reduxjs/toolkit';
import { io } from 'socket.io-client';

const mySlice = createSlice({
    name: 'socket',
    initialState : {
        socket : io(process.env.REACT_APP_SOCKET_URL),
    }
})

const { reducer,actions } = mySlice;
export const { notificationStartJoin } = actions;
export default reducer;