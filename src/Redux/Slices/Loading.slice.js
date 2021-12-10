const { createSlice } = require("@reduxjs/toolkit");

const mySlice = createSlice({
    name: "Auth",
    initialState: false,
    reducers: {
        setLoading: (state,action) => {
            return state = action.payload
        },
        getLoading: (state) => {
            return state
        }
    },
})

export const { setLoading, getLoading } = mySlice.actions;
export default mySlice.reducer;