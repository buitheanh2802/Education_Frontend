import { createAsyncThunk } from '@reduxjs/toolkit';
import AuthApi from 'src/Apis/AuthApi';

export const ActionLogin = createAsyncThunk('auth/login', async (account) => {
    try {
        const { data } = await AuthApi.login(account);
        return data
    } catch (error) {
        return error.response.data
    }
})

export const ActionRegister = createAsyncThunk('auth/register', async (account) => {
    try {
        const { data } = await AuthApi.register(account);
        console.log(data)
        return data
    } catch (error) {
        console.log(error.response.data)
        return error.response.data
    }
})

export const ActionLogout = createAsyncThunk('auth/logout', async () => {
    try {
        const { data } = await AuthApi.logout();
        console.log(data)
        return data
    } catch (error) {
        console.log(error.response.data)
        return error.response.data
    }
})