// const redux = require('redux'); //import redux
import {configureStore} from '@reduxjs/toolkit'
import countSlice from './count-slice';
import authSlice from './auth-slice';

const store = configureStore({ //create store
    reducer:{counter: countSlice, auth: authSlice}
}); 


const counterSubscriber = () => {               
    const latestState = store.getState(); // get store data
    console.log(latestState)
}

store.subscribe(counterSubscriber)      //method call when store is changing


export default store