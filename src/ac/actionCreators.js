import { ENTITY, MODAL } from './actionTypes';

export const modalAddToggle = payload => 
    ({ type: MODAL.ADD.TOGGLE, payload });

export const modalEditToggle = payload => 
    ({ type: MODAL.EDIT.TOGGLE, payload });

export const modalRemoveToggle = payload =>
    ({ type: MODAL.REMOVE.TOGGLE, payload });

export const entityAdd = payload => 
    ({ type: ENTITY.ADD, payload });

export const entityEdit = payload => 
    ({ type: ENTITY.EDIT, payload });

export const entityRemove = payload => 
    ({ type: ENTITY.REMOVE, payload });
