import { combineReducers } from 'redux';
import authReducer from './user/authReducer';
import userDataReducer from './user/userDataReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    userData: userDataReducer,
})

export default rootReducer;