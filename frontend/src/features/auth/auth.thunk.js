import { createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./auth.service";


//Register user
export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    try {
        return await authService.register(user)

    } catch (error) {
        const message =
            (error.response && error.response.data && error.response.data.message) || error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})
