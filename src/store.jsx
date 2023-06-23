import { configureStore } from '@reduxjs/toolkit'
import updateState from './reducers/reducerCompo';
import favourite from './reducers/favourite'
import updateCount from './reducers/count';
const store = configureStore({
  reducer:{
    reducerCompo:updateState,
    counter:updateCount,
    favourite:favourite
  }
})
export default store;