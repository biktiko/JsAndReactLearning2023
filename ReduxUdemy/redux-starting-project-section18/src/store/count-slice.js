import { createSlice } from '@reduxjs/toolkit'

const initialCounterState = { counter: 0, showCounter: true }

const counterSlice = createSlice({ // create store data
    name: "counter",
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++
        },
        discrement(state) {
            state.counter--
        },
        increse(state, action) {
            state.counter = state.counter + action.payload
        },
        toggle(state) {
            state.showCounter = !state.showCounter
        }
    }
})

export const counterActions = counterSlice.actions; // for using store actions in another 
export default counterSlice.reducer