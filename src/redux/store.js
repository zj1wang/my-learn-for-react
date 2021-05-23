import{createStore,combineReducers} from 'redux'
import counterReducer from './count_reducer'
import personReducer from './person_reducer'
import {composeWithDevTools} from 'redux-devtools-extension'


const allReducer=combineReducers({
    count: counterReducer,
    person: personReducer
})
export default createStore(allReducer,composeWithDevTools())