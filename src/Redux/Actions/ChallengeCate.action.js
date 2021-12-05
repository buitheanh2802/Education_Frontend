import { createAsyncThunk } from '@reduxjs/toolkit';
import ChallengeCateApi from 'src/Apis/ChallengeCateApi'

export const ActionGetChallengeCate = createAsyncThunk('challengeCate/findone', async (id) => {
    try {
        const { data } = await ChallengeCateApi.get(id);
        return data
    } catch (error) {
        return error.response.data
    }
})

export const ActionGetsChallengeCate = createAsyncThunk('challengeCate/find', async () => {
    try {
        const { data } = await ChallengeCateApi.gets();
        return data
    } catch (error) {
        return error.response.data
    }
})

export const ActionOPostChallengCate = createAsyncThunk('challengeCate/create', async () => {
    try {
        const { data } = await ChallengeCateApi.gets();
        return data
    } catch (error) {
        return error.response.data
    }
})