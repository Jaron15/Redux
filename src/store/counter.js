import {createSlice} from '@reduxjs/toolkit';

//DO NOT update the state directly, must be replaced with a new state object 
const initialCounterState = {counter: 0, showCounter: true}

//with create slice you only have to include what you want to edit and redux toolkit will automatically include the current states properties if not changed 
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;