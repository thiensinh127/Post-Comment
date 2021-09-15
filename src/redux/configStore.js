  
import { combineReducers, createStore } from "redux";
import BlogReducer from "./reducers/BlogReducer";

const rootReducer = combineReducers({
    BlogReducer,
})

const store = createStore(rootReducer);
export default store;