import { createSlice } from "@reduxjs/toolkit";

const mySice = createSlice({
    name: "user",
    initialState: {
        isUser: true,
        profile: {
            fullname: "Nguyễn Thành Đạt"
        }
    },
    reducers: {}
})

const { actions, reducer } = mySice;
export const { } = actions;
export default reducer