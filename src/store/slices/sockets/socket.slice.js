import { createSlice } from '@reduxjs/toolkit';

export const socketSlice = createSlice({
    name: 'socket',
    initialState: {
        socket: {} 
    },
    reducers: {
        setSocket: (state, action) => {
            const copyState = JSON.parse(JSON.stringify(state))
            copyState.socket = action.payload
            return copyState
        },
    }
});

export const { setSocket } = socketSlice.actions;