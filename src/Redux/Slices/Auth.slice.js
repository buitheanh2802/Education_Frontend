import { ActionLogin, ActionLogout } from "../Actions/Auth.action";

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
            const { status, data, message } = action.payload;
            state.isLoading = false;
            if (status) state.profile = data;
            switch (message[0]) {
                case "NOT_VERIFY":
                    state.error = "Tài khoản chưa được kích hoạt";
                    break;
                case "EMAIL_NOTEXIST":
                case "INVALID_PASSWORD":
                    state.error = "Tài khoản mật khẩu không chính xác";
                    break;
                default:
                    break;
            }
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
            const { status } = action.payload;
            if (status) {
                state = {
                    ...state,
                    isLoading: false,
                    actionLoading: false,
                    profile: null,
                    error: null,
                    message: null
                }
            }
        })
    }
})

export const { RemoveErrorAuth } = mySlice.actions;
export default mySlice.reducer;