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
            const newState = {items: [...state.items, {id: action.payload.id, name: action.payload.name,
            surname: action.payload.surname, email: action.payload.email, event: action.payload.event}]}
            return newState;
        }
        default:
            return state;
    }
}