import itemReducer from './item'
import listReducer from './list'

import {combineReducers} from 'redux'

export default combineReducers({
    item: itemReducer,
    list: listReducer
})