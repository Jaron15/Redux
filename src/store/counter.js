import {createSlice} from '@reduxjs/toolkit';

//DO NOT update the state directly, must be replaced with a new state object 
const initialCounterState = {counter: 0, showCounter: true}

//with create slice you only have to include what you want to edit and redux toolkit will automatically include the current states properties if not changed 
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
//these are the dispatch actions, the toolkit does some of the work behind the scenes so that we can make them simple functions like this 
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

//exports the dispatch actions so that all you would have to do to call them is dispatch(counterActions.increment()) for example
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;