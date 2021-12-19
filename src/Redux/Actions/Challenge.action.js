import { createAsyncThunk } from '@reduxjs/toolkit';
import ChallengeApi from 'src/Apis/ChallengeApi'

export const ActionGetsChallenge = createAsyncThunk('challenge/find', async (cateid) => {
    try {
        const { data } = await ChallengeApi.gets(cateid);
        return data
    } catch (error) {
        return error.response.data
    }
})

export const ActionGetChallenge = createAsyncThunk('challenge/findone', async (id) => {
    try {
        const { data } = await ChallengeApi.get(id);
        return data
    } catch (error) {
        return error.response.data
    }
})

export const ActionFindChallenge = createAsyncThunk('challegne/cate', async (findCate) => {
    try {
        const { cateid, value } = findCate;
        const { data } = await ChallengeApi.FilterChallenges(cateid, value)
        return data
    } catch (error) {
        return error.response.data
    }
})