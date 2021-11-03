import ResponseMessage from "src/Constants/ResponseMessage";
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
        resetErrorAuth: (state) => {
            state.error = null;
        },

        resetMessageAuth: (state) => {
            state.message = null;
        }
    },
    extraReducers: (builder) => {
        // login
        builder.addCase(ActionLogin.pending, (state) => {
            state.isLoading = true;
        })

        builder.addCase(ActionLogin.rejected, (state) => {
            state.isLoading = false;
            state.error = [ResponseMessage("ERROR_SERVER")];
        })

        builder.addCase(ActionLogin.fulfilled, (state, action) => {
            console.log(action?.payload)
            const { status, data, message } = action?.payload;
            state.isLoading = false;
            if (status) {
                state.message = [ResponseMessage("LOGIN_SUCCESS")];
                state.profile = data?.profile;
                LocalStorage.Set('_token_', data?.token);
            }
            else {
                state.error = [ResponseMessage(message[0])];
            }
        })

        // profile
        builder.addCase(ActionGetProfile.pending, (state) => {
            state.isLoading = true;
        })

        builder.addCase(ActionGetProfile.rejected, (state) => {
            state.isLoading = false;
            state.error = [ResponseMessage("ERROR_SERVER")]
        })

        builder.addCase(ActionGetProfile.fulfilled, (state, action) => {
            const { status, data, message } = action?.payload;
            state.isLoading = false;
            if (status) {
                state.message = [ResponseMessage("LOGIN_SUCCESS")];
                state.profile = data;
            } else {
                state.error = [ResponseMessage(message[0])]
                LocalStorage.Remove("_token_")
            }
        })


        // logout
        builder.addCase(ActionLogout.pending, (state) => {
            state.actionLoading = true
        })

        builder.addCase(ActionLogout.rejected, (state) => {
            state.isLoading = false;
            state.error = [ResponseMessage("LOGOUT_ERROR")]
        })

        builder.addCase(ActionLogout.fulfilled, (state, action) => {
            const { status, message } = action?.payload;
            if (status) {
                state.message = [ResponseMessage("LOGOUT_SUCCESS")];
                state.actionLoading = false;
                state.profile = null;
                LocalStorage.Remove('_token_');
            } else {
                state.error = [ResponseMessage(message[0])];
            }
        })
    }
})

export const { resetErrorAuth, resetMessageAuth } = mySlice.actions;
export default mySlice.reducer;