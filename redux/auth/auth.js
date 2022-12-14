import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiCalls } from "../api/api";

export const newSignin = createAsyncThunk(
    'send/signin',
    async (payload) => {
        const resp = await ApiCalls.userSigninAccount(payload)
        return resp
    }
)

const accountSlice = createSlice({
    name: 'send',
    initialState: {
        account: {
            user_id: "",
            username: "",
            phone_number: "",
            wallet: {
                share_id: "",
                user_id: "",
                wallet_id: "",
                username: "",
                balance: 0,
                created_at: ""
            },
            fail: {
                is_err: false,
                message: ""
            },
        },
        pending: true
    },
    reducers: {},
    extraReducers: {
        [newSignin.pending]: (state) => {
            state.pending = true
        },
        [newSignin.fulfilled]: (state, action) => {
            state.account = action.payload
            state.pending = false
        },
    }
})

export default accountSlice.reducer;