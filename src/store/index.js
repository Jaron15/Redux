//the toolkit makes all changes immutable no matter what | you can edit the state directly when you are using toolkit because it has a package that detects these changes and creates the new state object behind the scenes making it impossible to actually directly change the state.
import {createSlice, configureStore} from '@reduxjs/toolkit'

//DO NOT update the state directly, must be replaced with a new state object 
const initialState = {counter: 0, showCounter: true}

//with create slice you only have to include what you want to edit and redux toolkit will automatically include the current states properties if not changed 
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.amount;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

const store = configureStore({
    reducer: counterSlice.reducer
});

export default store; 
