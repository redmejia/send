import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiCalls } from "../api/api";

export const newSignin = createAsyncThunk(
    'send/account',
    async (payload) => {
        const resp = await ApiCalls.userSigninAccount(payload)
        return resp
    }
)
export const newRegister = createAsyncThunk(
    'send/account',
    async (payload) => {
        const resp = await ApiCalls.userRegisterNewAccount(payload)
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
    reducers: {
        updateBalance: (state, action) => void(
            // console.log("try to update this action : ", action.payload.amount);
            state.account.wallet = { ...state.account.wallet, ...{ balance: state.account.wallet.balance + parseInt(action.payload.amount, 10) } }
        )
    },
    extraReducers: {
        [newSignin.pending]: (state) => {
            state.pending = true
        },
        [newSignin.fulfilled]: (state, action) => {
            state.account = action.payload
            state.pending = false
        },
        [newRegister.pending] : (state) => {
            state.pending = true
        },
        [newRegister.fulfilled] : (state, action) => {
            state.account = action.payload
            state.pending = false
        }
    }
})

export const { updateBalance } = accountSlice.actions

export default accountSlice.reducer;
