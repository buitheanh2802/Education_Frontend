import { createAsyncThunk } from '@reduxjs/toolkit';
import CommentsApi from 'src/Apis/CommentsApi';

export const ActionGetsComment = createAsyncThunk('comments/gets', async (shortId) => {
    try {
        const { data } = await CommentsApi.gets(shortId);
        return data
    } catch (error) {
        return error.response.data
    }
})

export const ActionPostComment = createAsyncThunk('comments/post', async (comment) => {
    try {
        const { data } = await CommentsApi.post(comment);
        return { ...data, comment }
    } catch (error) {
        return error.response.data
    }
})

export const ActionPutComment = createAsyncThunk('comments/put', async (comment) => {
    try {
        const { data } = await CommentsApi.put(comment);
        return data
    } catch (error) {
        return error.response.data
    }
})

export const ActionDeleteComment = createAsyncThunk('comments/delete', async (id) => {
    try {
        const { data } = await CommentsApi.delete(id);
        return data
    } catch (error) {
        return error.response.data
    }
})

export const ActionLikeComment = createAsyncThunk('comments/like', async (id) => {
    try {
        const { data } = await CommentsApi.like(id);
        return data
    } catch (error) {
        return error.response.data
    }
})

export const ActiondDslikeComment = createAsyncThunk('comments/dislike', async (id) => {
    try {
        const { data } = await CommentsApi.dislike(id);
        return data
    } catch (error) {
        return error.response.data
    }
})

export const ActionFindComments = createAsyncThunk('comments/find', async (page) => {
    try {
        const { data } = await CommentsApi.find(page);
        return data
    } catch (error) {
        return error.response.data
    }
})