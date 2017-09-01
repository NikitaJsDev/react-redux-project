import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { entity } from './formReducer';
import modal from './modalReducer';

const rootReducer = combineReducers({
    form: reduxFormReducer,
    entity,
    modal
});


export default rootReducer;