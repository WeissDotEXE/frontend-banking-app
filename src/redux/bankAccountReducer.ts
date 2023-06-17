import currencyEnum from "../enums/currencyEnum";
import { createSlice } from "@reduxjs/toolkit";
import { AccountInterface } from "../components/BalanceCard/BalanceCard";

const initialState: AccountInterface = {
    _id: "",
    balance: 0,
    userId: "",
    currency: currencyEnum.ron,
};

const bankAccountSlice = createSlice({
    name: "bankingAccount",
    initialState,
    reducers: {
        changeBankingAccount: (state, action) => {
            const changedAccount: AccountInterface = action.payload;
            state.userId = changedAccount.userId;
            state.balance = changedAccount.balance;
            state.currency = changedAccount.currency;
            state._id = changedAccount._id;
        },
    },
});

export const { changeBankingAccount } = bankAccountSlice.actions;
export default bankAccountSlice.reducer;
