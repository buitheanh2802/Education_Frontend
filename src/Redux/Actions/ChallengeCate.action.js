import { createAsyncThunk } from '@reduxjs/toolkit';
import ChallengeCateApi from 'src/Apis/ChallengeCateApi'

export const ActionGetsChallengeCate = createAsyncThunk('challengeCate/find', async () => {
    try {
        const { data } = await ChallengeCateApi.gets();
        return data
    } catch (error) {
        return error.response.data
    }
})