import { ACTION_TYPES } from './ActionTypes';

export const loadingAction = (loading: boolean) => {
    return {
        type: ACTION_TYPES.LOADING,
        payload: loading,
    };
};

export const errorAction = (error: boolean) => {
    return {
        type: ACTION_TYPES.ERROR,
        payload: error,
    };
};

type Characters = {
    id: string;
    status: string;
    image: string;
    name: string;
    species: string;
}[];
export const getCharactersAction = (data: Characters) => {
    return {
        type: ACTION_TYPES.GET_CHARACTERS,
        payload: data,
    };
};

type Character = {
    image: string;
    name: string;
    gender: string;
    created: string;
    species: string;
    location: {
        name: string;
    };
    status: string;
    type: string;
    origin: {
        name: string;
    };
    episode: {
        episode: string;
        name: string;
    }[];
};
export const getCharacterAction = (data: Character) => {
    return {
        type: ACTION_TYPES.GET_CHARACTER,
        payload: data,
    };
};

export const searchNameAction = (text: string) => {
    return {
        type: ACTION_TYPES.SEARCH_NAME,
        payload: text,
    };
};
export const pageChangeAction = (page: number) => {
    return {
        type: ACTION_TYPES.PAGE_CHANGE,
        payload: page,
    };
};

type PaginationInfo = {
    page: number;
    pages: number;
    count: number;
};
export const getPageInfoAction = (info: PaginationInfo) => {
    return {
        type: ACTION_TYPES.PAGES_INFO,
        payload: info,
    };
};
