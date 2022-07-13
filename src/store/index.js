//the toolkit makes all changes immutable no matter what | you can edit the state directly when you are using toolkit because it has a package that detects these changes and creates the new state object behind the scenes making it impossible to actually directly change the state.
import {createSlice, configureStore} from '@reduxjs/toolkit'

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

const initialAuthState = {
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        }
    }
});

const store = configureStore({
    reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer
    }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store; 
