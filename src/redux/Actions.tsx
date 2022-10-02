import { ACTION_TYPES } from './ActionTypes';

export const changeInitialRender = (value: boolean) => {
    return {
        type: ACTION_TYPES.INITIAL_RENDER,
        payload: value,
    };
};
export const loadingAction = (loading: boolean) => {
    return {
        type: ACTION_TYPES.LOADING,
        payload: loading,
    };
};
export const openDialog = (open: boolean) => {
    return {
        type: ACTION_TYPES.DIALOG_OPEN,
        payload: open,
    };
};
export const fitlered = (fitlered: boolean) => {
    return {
        type: ACTION_TYPES.FILTERED,
        payload: fitlered,
    };
};

type errorType = {
    error: boolean;
    message: any;
};
export const errorAction = (error: errorType) => {
    return {
        type: ACTION_TYPES.ERROR,
        payload: error,
    };
};

type ChoosenEpisodeType = {
    name: string;
    id: string;
};
export const getChoosenEpisode = (episode: ChoosenEpisodeType) => {
    return {
        type: ACTION_TYPES.CHOOSEN_EPISODE,
        payload: episode,
    };
};
export const getEpisodesCount = (count: number) => {
    return {
        type: ACTION_TYPES.EPISODES_COUNT,
        payload: count,
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
export const changeStatus = (status: string) => {
    return {
        type: ACTION_TYPES.STATUS,
        payload: status,
    };
};
export const changeSpecies = (status: string) => {
    return {
        type: ACTION_TYPES.SPECIES,
        payload: status,
    };
};
export const changeGender = (gender: string) => {
    return {
        type: ACTION_TYPES.GENDER,
        payload: gender,
    };
};
export const changeGetBy = (by: string) => {
    return {
        type: ACTION_TYPES.GET_BY,
        payload: by,
    };
};
type ListOfEpisodes = {
    id: string;
    name: string;
}[];
export const getListOfEpisodes = (by: ListOfEpisodes) => {
    return {
        type: ACTION_TYPES.LIST_OF_EPISODES,
        payload: by,
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
