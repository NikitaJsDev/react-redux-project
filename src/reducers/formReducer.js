import { ENTITY } from '../ac/actionTypes';

const initialState = JSON.parse(localStorage.getItem('testKey')) || [];

export function entity(state = initialState, action) {
    switch (action.type) {
        case ENTITY.ADD: {
            state.push(action.payload);
            localStorage.setItem('testKey', JSON.stringify(state));
            return state;
        }
        case ENTITY.EDIT: {
            const index = state.findIndex(payload =>
                payload.id === action.payload.id);

            if (index !== -1) {
                const newState = state.map(payload => {
                    if (payload.id === action.payload.id) {
                        return action.payload;
                    } else {
                        return payload;
                    }
                });
                localStorage.setItem('testKey', JSON.stringify(newState));
                return newState;
            } else {
                return state;
            }
        }
        case ENTITY.REMOVE: {
            state.splice(state.indexOf(action.payload), 1);
            localStorage.setItem('testKey', JSON.stringify(state));
            return state;
        }
        default:
            return state;
    }
}

