
import { createSlice } from '@reduxjs/toolkit';


interface UserInterface {
    username: string | null;
    id: string | null;
    token: string | null;
}
const initialState: UserInterface = {
    username: null,
    id: null,
    token: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: initialState
    },
    reducers: {
        userLogin: (state, action) => {
            state.value = action.payload
        },
    }
})


export const { userLogin } = userSlice.actions
export default userSlice.reducer