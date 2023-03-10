// This imports the createStore function from redux library
import { createStore } from 'redux';

// This imports the rootReducer function from the "./reducer" module
import rootReducer from "./reducer";

// This creates a new store instance using the rootReducer function
const store = createStore(rootReducer);

// This exports the store instance as the default export of this module
export default store;

// This module creates a store object using the root reducer function. The created store object is then exported as a default export for other modules to use.