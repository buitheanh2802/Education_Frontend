import { createAsyncThunk } from '@reduxjs/toolkit'

export const actionLogin = createAsyncThunk('user', async () => {
    return fetch('https://6006daa53698a80017de20ff.mockapi.io/users/1',
        { method: "GET" })
        .then(res => res.json())
        .then(data => data)
})