import { combineReducers } from 'redux';
import { MODAL } from '../ac/actionTypes';

const initialState = {
    open: false,
    user: null
};

export function addModalOpen(state = false, action) {
    switch (action.type) {
        case MODAL.ADD.TOGGLE:
            return !state;
        default:
            return state;
    }
}

export function editModalOpen(state = initialState, action) {
    switch (action.type) {
        case MODAL.EDIT.TOGGLE:
        const { payload } = action;
            return {
                open: !state.open,
                user: payload
            };
        default:
            return state;
    }
}

export function removeModalOpen(state = false, action) {
    switch (action.type) {
        case MODAL.REMOVE.TOGGLE:
            return !state;
        default:
            return state;
    }
}

export default combineReducers({
    addModalOpen,
    editModalOpen,
    removeModalOpen
});


  