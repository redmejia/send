import { configureStore } from "@reduxjs/toolkit";
import acccountSlice from "../redux/auth/auth"
import wallet  from "../redux/wallet/wallet";

export default configureStore({
    reducer : {
        account : acccountSlice,
        wallet : wallet
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})