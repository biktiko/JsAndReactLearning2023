const redux = require("redux");

const counterReducer = (state = { counter: 0}, action) => {
    if(action.type === 'increment')
        return {counter: state.counter + 1};
    
    if(action.type === 'discrement')
        return {counter: state.counter - 1};

    return state;
};

const store= redux.createStore(counterReducer);
console.log(store.getState());

const counterSubscriber =  () => {
    const latestState = store.getState();
    console.log(latestState);
}

store.subscribe(counterSubscriber);
store.dispatch({type: 'increment'});
store.dispatch({type: 'increment'});
store.dispatch({type: 'increment'});
store.dispatch({type: 'increment'});
store.dispatch({type: 'increment'});
store.dispatch({type: 'discrement'});
store.dispatch({type: 'discrement'});
store.dispatch({type: 'discrement'});
store.dispatch({type: 'discrement'});