import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiCalls } from "../api/api";

export const getWalletInfo = createAsyncThunk(
    'wallet/me',
    async (userID) => {
        const resp = await ApiCalls.walletInfo(userID)
        return resp
    }
)

const walletSlice = createSlice({
    name: 'wallet',
    initialState: {
        wallet: {
            share_id: "",
            user_id: "",
            wallet_id: "",
            username: "",
            balance: 0,
            created_at: ""
        },
        pending: true
    },
    reducers: {},
     extraReducers: {
         [getWalletInfo.pending]: (state) => {
             state.pending = true
         },
         [getWalletInfo.fulfilled]: (state, action) => {
             state.wallet = action.payload
             state.pending = false
         }
     }
})

export default walletSlice.reducer;