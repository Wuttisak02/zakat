import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../RouteStore";
import { AccountInfoResponse } from "../../../types/AccountTypes"

const initialState: AccountInfoResponse = {
    userId: 0,
    userName: "",
    email: "",
    firstName: "",
    lastName: ""
}

const accountInfoSlice = createSlice({
    name: "accountInfo",
    initialState,
    reducers: {
        accountInfo: (state, action: PayloadAction<AccountInfoResponse>) => {
            state.userId = action.payload.userId;
            state.userName = action.payload.userName;
            state.email = action.payload.email;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        }
    }
});

export const { accountInfo } = accountInfoSlice.actions;
export default accountInfoSlice.reducer;