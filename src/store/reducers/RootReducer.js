import { combineReducers } from "redux";
import { filterReducer } from "./FilterReducer";
import { todoReducer } from "./TodoReducer";
import { userReducer } from "./UserReducer";



export const rootreducer = combineReducers(
    {
        //state name: reducer name
        todoR: todoReducer,
        filterR: filterReducer,
        userState: userReducer
        //add more to include them in store
    }
)