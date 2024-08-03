import { createSlice } from '@reduxjs/toolkit'


const initialAuthState = { isLogin: false };

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        logIn(state) {
            state.isLogin = true
        },
        logOut(state) {
            state.isLogin = false;
        }
    }
})

export const authActions = authSlice.actions; // for using store actions in another files
export default authSlice.reducer