import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const signUp = createAsyncThunk('user/signUp', async ({credentials})=>{

    return credentials;
});

let authUserSlice = createSlice({
    name: 'authUser',
    initialState:{
        userAuth: null,
        status: ''
    },
    reducers:{
        signIn:(state,action)=>{
            console.log('action into signUp ', action.payload);
            state.user = action.payload 
        },

        logOut: (state,action)=>{
            state.user = null
        },
        
    },
    extraReducers:{
        [signUp.pending]: (state,action)=>{
            state.status = 'pending'
        },
        [signUp.fulfilled]: (state,action)=>{
            state.status = action.payload
        },
        [signUp.rejected]: (state,action)=>{
            state.status = 'failed'
        },
    }
})

export const {signIn,logOut} = authUserSlice.actions;
export default authUserSlice.reducer;