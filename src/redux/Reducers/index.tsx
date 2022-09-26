import { combineReducers } from 'redux';
import charactersReducer from './charactersReducer';
import paginationReducer from './paginationReducer';

const MainReducer = combineReducers({
    characters: charactersReducer,
    paginationInfo: paginationReducer,
});
export default MainReducer;
