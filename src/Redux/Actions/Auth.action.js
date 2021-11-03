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

export const ActionGetProfile = createAsyncThunk('auth/profile/me', async () => {
    try {
        const { data } = await AuthApi.profile();
        return data
    } catch (error) {
        return error.response.data
    }
})

export const ActionLogout = createAsyncThunk('auth/logout', async () => {
    try {
        const { data } = await AuthApi.logout();
<<<<<<< HEAD
        console.log(data)
        return data
    } catch (error) {
        console.log(error.response.data)
=======
        return data
    } catch (error) {
>>>>>>> 6f13f814d30f7bc48e7c9171bb1951b12c761a0f
        return error.response.data
    }
})