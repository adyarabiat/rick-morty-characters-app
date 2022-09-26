import {
    LOADING,
    ERROR,
    GET_CHARACTERS,
    GET_CHARACTER,
    SEARCH_NAME,
    PAGE_CHANGE,
    PAGES_INFO,
} from './ActionTypes';

export const loadingAction = (loading: Boolean) => {
    return {
        type: LOADING,
        payload: loading,
    };
};
export const errorAction = (error: any) => {
    return {
        type: ERROR,
        payload: error,
    };
};
export const getCharactersAction = (data: Object) => {
    return {
        type: GET_CHARACTERS,
        payload: data,
    };
};
export const getCharacterAction = (data: Object) => {
    return {
        type: GET_CHARACTER,
        payload: data,
    };
};
export const searchNameAction = (text: String) => {
    return {
        type: SEARCH_NAME,
        payload: text,
    };
};
export const pageChangeAction = (page: Number) => {
    return {
        type: PAGE_CHANGE,
        payload: page,
    };
};
export const getPageInfoAction = (info: Object) => {
    return {
        type: PAGES_INFO,
        payload: info,
    };
};
