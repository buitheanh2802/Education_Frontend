import { createAsyncThunk } from '@reduxjs/toolkit';
import ChallengeApi from 'src/Apis/ChallengeApi'

export const ActionGetsChallenge = createAsyncThunk('challenge/find', async () => {
    try {
        const { data } = await ChallengeApi.gets();
        return data
    } catch (error) {
        return error.response.data
    }
})