// Importing the DisplayList reducer from "./Reducer"
import DisplayList from "./Reducer";

// Importing the combineReducers function from redux
import { combineReducers } from 'redux';

// Combining the DisplayList reducer using the combineReducers function and exporting the combined reducer as the rootReducer
const rootReducer = combineReducers({ DisplayList });
export default rootReducer;