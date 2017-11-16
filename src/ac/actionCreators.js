import { ENTITY, MODAL } from './actionTypes';

export const modalAddToggle = payload => 
    ({ type: MODAL.ADD.TOGGLE, payload });

export const modalEditToggle = () => 
    ({ type: MODAL.EDIT.TOGGLE });

export const modalRemoveToggle = () =>
    ({ type: MODAL.REMOVE.TOGGLE,});

export const entityAdd = payload => 
    ({ type: ENTITY.ADD, payload });

export const entityEdit = payload => 
    ({ type: ENTITY.EDIT, payload });

export const entityRemove = payload => 
    ({ type: ENTITY.REMOVE, payload });
