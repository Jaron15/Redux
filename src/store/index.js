import {createStore} from 'redux';

const initialState = {counter: 0, showCounter: true}

//default state and action is passes in
const counterReducer = (state = initialState, action) => {
// actions have to return a state instance that matches the default, in this case the showCounter value isnt changed, but still needs to be set 
    if (action.type === 'increment') {
      return { 
        counter: state.counter + 1,
        showCounter: state.showCounter
    }
    }
//action is not defined in the default state but it is created when it is passed in with the increase action type 
    if (action.type === 'increase') {
        return { 
            counter: state.counter + action.amount,
            showCounter: state.showCounter
        }
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }
//reference the existing state with state.counter or state.showCounter
    if (action.type === 'toggle') {
    //here were setting showCounter to the opposite of its current state
        return {
            showCounter: !state.showCounter,
            counter: state.counter
        }
    }

    return state;
}

const store = createStore(counterReducer);

export default store; 
