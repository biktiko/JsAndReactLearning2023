const redux = require('redux'); //import reduex

const counterReducer = (state = { counter: 0}, action) => {     //store
    if(action.type === 'increment'){
        return {
            counter: state.counter+1
        }
    }
    
    if(action.type === 'discrement'){
        return {
            counter: state.counter-1
        }
    }
}

const store = redux.createStore(counterReducer); //create store

console.log(store.getState());

const counterSubscriber = () => {               
    const latestState = store.getState();
    console.log(latestState)
}

store.subscribe(counterSubscriber)      //method call when store is changing

store.dispatch({type: 'increment'});    //change store
store.dispatch({type: 'discrement'});
store.dispatch({type: 'increment'});
store.dispatch({type: 'increment'});