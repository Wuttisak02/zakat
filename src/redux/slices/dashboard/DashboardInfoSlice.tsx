import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState, rootStore } from "../../RouteStore";
import { DashboardInfoResponse } from "../../../types/DashboardTypes"

const initialState: DashboardInfoResponse = {
    dashboardName: ""
}

const dashboardInfoSlice = createSlice({
    name: "dashboardInfo",
    initialState,
    reducers: {
        dashboardInfo: (state, action: PayloadAction<DashboardInfoResponse>) => {
            state.dashboardName = action.payload.dashboardName;
        }
    }
});

export const { dashboardInfo } = dashboardInfoSlice.actions;
export default dashboardInfoSlice.reducer;