import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    items: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS: {
            return {
                ...state,
                items: action.payload
            };
        }
        case NEW_POST: {
            const newState = {items: [...state.items, action.payload.name]}
            return newState;
        }
        default:
            return state;
    }
}