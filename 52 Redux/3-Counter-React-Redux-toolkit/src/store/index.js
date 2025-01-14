import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counter';
import privacySlice from './privacy';


const CounterStore = configureStore({reducer:{
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer
}})

export default CounterStore

/*

const INITIAL_VALUE = {
    counter: 0,
    privacy: false
}

const CounterReducer = (store = INITIAL_VALUE, action) => {
    if(action.type === 'INCREMENT'){
        return {...store, counter: store.counter + 1}
    } else if (action.type === 'DECREMENT'){
        return {...store, counter: store.counter - 1}
    } else if (action.type === 'ADD'){
        return {...store, counter: store.counter + Number(action.payload.num)}
    } else if (action.type === 'SUBSTRACT'){
        return {...store, counter: store.counter - Number(action.payload.num)}
    } else if (action.type === 'PRIVACY_TOGGLE') {
        return {...store, privacy: !store.privacy}
    }
    return store
}*/