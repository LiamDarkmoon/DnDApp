// initial TodoState

import { ADD_TODO, TOGGLE_TODO } from "../actions/actions";

// initialy Todo is empty
const initialState = [];

export const todoReducer = ( state = initialState, action ) => {

    switch (action.type) {

        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.payload.id,
                    text: action.payload.text,
                    completed: false
                }
            ]

        case TOGGLE_TODO:
            return state.map((todo) => 
                (todo.id === action.payload.id)
                ?
                {
                    ...todo,
                    completed: !todo.completed
                }
                :
                todo

            )
    
        default:
            return state;
    }
}
