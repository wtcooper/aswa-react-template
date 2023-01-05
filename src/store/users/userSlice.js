import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {userService} from "./userAPI";

const initialState = {
   userRole: null,
   clientPrincipal: null,
   userDetails: null,
   userData: null
}

export const getUserDetailsAsync = createAsyncThunk(
    'user/getDetails',
    async () => {
        // Retrieve response from /.auth/me
        const response = await fetch('/.auth/me');
        // Convert to JSON
        const payload = await response.json();
        // Retrieve the clientPrincipal (current user)
        const { clientPrincipal } = payload;
        if (clientPrincipal) return clientPrincipal;
        else return '';
    }
)

export const getUserDataAsync = createAsyncThunk(
    'user/getData',
    async () => {
        return await userService.getUserData();
    }
)


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
           .addCase(getUserDetailsAsync.fulfilled, (state, action) => {
            // put user into state
           console.log("In getUserDetailsAsync")
            state.clientPrincipal = action.payload;
            state.userDetails = action.payload.userDetails;
        })
           .addCase(getUserDataAsync.fulfilled, (state, action) => {
            // put user into state
           console.log("In getUserDataAsync")
            state.userData = action.payload;
        })
    }
});

export const selectUserDetails = (state) => {
    return state.user.userDetails;
}

export const selectUserData = (state) => {
    return state.user.userData;
}

export const selectClientPrincipal = (state) => {
    return state.user.clientPrincipal;
}

export default userSlice.reducer;