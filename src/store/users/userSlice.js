import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
   userRole: null,
   clientPrincipal: null,
   userDetails: null
}

export const getUserAsync = createAsyncThunk(
    'user/get',
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

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUserAsync.fulfilled, (state, action) => {
            // put user into state
           console.log("In getUserAsync")
           console.log(state.userDetails)
            state.clientPrincipal = action.payload;
            state.userDetails = action.payload.userDetails;
        });
    }
});

export const selectUserDetails = (state) => {
    return state.user.userDetails;
}

export const selectClientPrincipal = (state) => {
    return state.user.clientPrincipal;
}

export default userSlice.reducer;