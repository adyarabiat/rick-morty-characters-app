import { PAGE_CHANGE, PAGES_INFO } from '../ActionTypes';

const INITIAL_STATE = {
    page: 1,
    pages: 0,
    count: 0,
};
const paginationReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case PAGE_CHANGE: {
            return {
                ...state,
                page: action.payload,
            };
        }
        case PAGES_INFO: {
            return {
                ...state,
                pages: action.payload.pages,
                count: action.payload.count,
            };
        }
        default:
            return state;
    }
};
export default paginationReducer;
