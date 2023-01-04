import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {genericDataService} from "./genericDataAPI";

const initialState = {
   testHeader: 'Default Value',
   testData: null
}


export const getHeaderAsync = createAsyncThunk(
    'genericData/header',
    async (name) => {
        return await genericDataService.header(name);
    }
)

export const genericDataSlice = createSlice({
    name: 'genericData',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getHeaderAsync.fulfilled, (state, action) => {
            // put user into state
           console.log("In headerAsync, testHeader:")
           console.log(state.testHeader)

            state.testHeader = action.payload;
        });
    }
});

export const selectTestHeader = (state) => {
    return state.genericData.testHeader;
}


export default genericDataSlice.reducer;