//the toolkit makes all changes immutable no matter what 
//you can edit the state directly when you are using toolkit because it has a package that detects these changes 
//and creates the new state object behind the scenes making it impossible to actually directly change the state.
import {configureStore} from '@reduxjs/toolkit'

import counterReducer from './counter';
import authReducer from './auth';

//this one reducer contains both of the seperate reducers and provides them through store to the entire app through
//the provider in index.js at the root level of the app
const store = configureStore({
    reducer: {
    counter: counterReducer,
    auth: authReducer
    }
});



export default store; 
