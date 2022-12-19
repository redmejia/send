import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { act } from "react-test-renderer";
import { ApiCalls } from "../api/api";

export const getWalletInfo = createAsyncThunk(
    'wallet/me',
    async (userID) => {
        const resp = await ApiCalls.walletInfo(userID)
        return resp
    }
)

export const transferToWallet = createAsyncThunk(
    'wallet/tx',
    async (payload) => {
        const resp = await ApiCalls.transferToWallet(payload)
        return resp
    }
)

export const getContactWalletInfo = createAsyncThunk(
    'wallet/shareid',
    async (shareid) => {
        const resp = await ApiCalls.contactWalletInfo(shareid)
        return resp
    }
)

export const wallet2walletTransfer = createAsyncThunk(
    'wallet/w2w',
    async (txIntent) => {
        const resp = await ApiCalls.wallet2Wallet(txIntent)
        return resp
    }
)

const walletSlice = createSlice({
    name: 'wallet',
    initialState: {
        wallet: {},
        bankToWalletStatus: {
            proceed: true,
            tx_amount_intent: 0,
            tx_status_code: 0,
            tx_message: ""
        },
        walletToWalletStatus: {
            proceed: true,
            tx_amount_intent: 0,
            tx_status_code: 0,
            tx_message: ""
        },
        contactInformation: {
            wallet_id: "",
            username: "",
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
        },
        [transferToWallet.pending]: (state) => {
            state.pending = true
        },
        [transferToWallet.fulfilled]: (state, action) => {
            state.bankToWalletStatus = action.payload
            state.pending = false
        },
        [getContactWalletInfo.fulfilled]: (state, action) => {
            state.contactInformation = action.payload
        },
        [wallet2walletTransfer.pending] : (state) => {
            state.pending = true
        },
        [wallet2walletTransfer.fulfilled] : (state, action) => {
            state.walletToWalletStatus = action.payload
            state.pending = false
        }
    }
})

export default walletSlice.reducer;