import ResponseError from "src/Constants/ResponseError";
import LocalStorage from "src/Helpers/Storage";
import { ActionGetProfile, ActionLogin, ActionLogout } from "../Actions/Auth.action";

const { createSlice } = require("@reduxjs/toolkit");

const mySlice = createSlice({
    name: "Auth",
    initialState: {
        isLoading: false,
        actionLoading: false,
        profile: null,
        error: null,
        message: null
    },
    reducers: {
        RemoveErrorAuth: (state) => {
            state.error = null
        }
    },
    extraReducers: (builder) => {
        // login
        builder.addCase(ActionLogin.pending, (state) => {
            state.isLoading = true;
        })

        builder.addCase(ActionLogin.rejected, (state) => {
            state.isLoading = false;
            state.error = "Đăng nhập không thành công"
        })

        builder.addCase(ActionLogin.fulfilled, (state, action) => {
            const { status, data, message } = action?.payload;
            state.isLoading = false;
            if (status) {
                state.profile = data?.profile;
                LocalStorage.Set('_token_', data?.token)
            }
            else {
                state.error = ResponseError(message[0]);
            }
        })

        // profile
        builder.addCase(ActionGetProfile.pending, (state) => {
            state.isLoading = true;
        })

        builder.addCase(ActionGetProfile.rejected, (state) => {
            state.isLoading = false;
            state.error = ResponseError("ERROR_SERVER")
        })

        builder.addCase(ActionGetProfile.fulfilled, (state, action) => {
            const { status, data, message } = action?.payload;
            state.isLoading = false;
            if (status) state.profile = data;
            if (message[0]) LocalStorage.Remove('_token_')
        })


        // logout
        builder.addCase(ActionLogout.pending, (state) => {
            state.actionLoading = true
        })

        builder.addCase(ActionLogout.rejected, (state) => {
            state.isLoading = false;
            state.error = "Đăng xuất không thành công"
        })

        builder.addCase(ActionLogout.fulfilled, (state, action) => {
            const { status } = action?.payload;
            if (status) {
                state.isLoading = false;
                state.actionLoading = false;
                state.profile = null;
                state.error = null;
                state.message = null;
                LocalStorage.Remove('_token_');
            }
        })
    }
})

export const { RemoveErrorAuth } = mySlice.actions;
export default mySlice.reducer;