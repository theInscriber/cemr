import itemReducer from './item'
import listReducer from './passport'

import { combineReducers}  from 'redux'

export default combineReducers({
    item: itemReducer,
    list: listReducer
})