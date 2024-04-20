import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    isIncrement: true,
    isDecrement: true
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
            state.isDecrement = true;
        },
        decrement: (state) => {
            if(state.value > 0){
                state.isDecrement = true;
                state.value -= 1;
            }
            else{
                state.isDecrement = false;
            }
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
