import { combineReducers } from 'redux';
import charactersReducer from './charactersReducer';

const MainReducer = combineReducers({
    characters: charactersReducer,
});
export default MainReducer;
