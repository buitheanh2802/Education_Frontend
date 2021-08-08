import { createAsyncThunk } from '@reduxjs/toolkit';

export const findNotification = createAsyncThunk('notification/findNotification', async () => {
    return fetch('https://6006daa53698a80017de20ff.mockapi.io/notification',
        { method: "GET" })
        .then(res => res.json())
        .then(data => data)
})