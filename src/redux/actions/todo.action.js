import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllTodo = createAsyncThunk('todo/fetchAllTodo',async() => {
    const data = await fetch('https://6006daa53698a80017de20ff.mockapi.io/todos').then(data => data.json());
    return data
})