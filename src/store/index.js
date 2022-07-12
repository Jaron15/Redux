import {createStore} from 'redux';

//default state and action is passes in
const counterReducer = (state = {counter: 0}, action) => {
    if (action.type === 'increment') {
      return { 
        counter: state.counter + 1
    }
    }
//action is not defined in the default state but it is created when it is passed in with the increase action type 
    if (action.type === 'increase') {
        return { 
            counter: state.counter + action.amount
        }
    }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }

    return state;
}

const store = createStore(counterReducer);

export default store; 
