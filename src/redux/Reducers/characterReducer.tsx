import {
    SEARCH_NAME,
    LOADING,
    PAGE_CHANGE,
    PAGES_INFO,
    GET_CHARACTERS,
    GET_CHARACTER,
    ERROR,
} from '../ActionTypes';

const INITIAL_STATE = {
    loadingState: false,
    paginationInfo: { page: 1, pages: '', count: '' },
    characters: [],
    character: {},
    searchName: '',
    initalRender: false,
    errorState: false,
};
const charactersReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case LOADING: {
            return {
                ...state,
                paginationInfo: { ...state.paginationInfo },
                loadingState: action.payload,
            };
        }
        case ERROR: {
            return {
                ...state,
                paginationInfo: { ...state.paginationInfo },
                errorState: action.payload,
            };
        }
        case GET_CHARACTERS: {
            return {
                ...state,
                paginationInfo: { ...state.paginationInfo },
                characters: [...action.payload],
            };
        }
        case GET_CHARACTER: {
            return {
                ...state,
                paginationInfo: { ...state.paginationInfo },
                character: { ...action.payload },
            };
        }
        case SEARCH_NAME: {
            return {
                ...state,
                paginationInfo: { ...state.paginationInfo },
                searchName: action.payload,
            };
        }
        case PAGE_CHANGE: {
            return {
                ...state,
                paginationInfo: {
                    ...state.paginationInfo,
                    page: action.payload,
                },
            };
        }
        case PAGES_INFO: {
            return {
                ...state,
                paginationInfo: {
                    ...state.paginationInfo,
                    pages: action.payload.pages,
                    count: action.payload.count,
                },
            };
        }
        default:
            return state;
    }
};

export default charactersReducer;
