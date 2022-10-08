import { ACTION_TYPES } from '../ActionTypes';
import {
    errorType,
    ChoosenEpisodeType,
    ChoosenLocationType,
    ListOfEpisodes,
    ListOfLocations,
    PaginationInfo,
    Characters,
    Character,
} from './types';

export const loadingAction = (loading: boolean) => {
    return {
        type: ACTION_TYPES.LOADING,
        payload: loading,
    };
};

export const errorAction = (error: errorType) => {
    return {
        type: ACTION_TYPES.ERROR,
        payload: error,
    };
};
export const getEpisodesCount = (count: number) => {
    return {
        type: ACTION_TYPES.EPISODES_COUNT,
        payload: count,
    };
};
export const getLocationCount = (count: number) => {
    return {
        type: ACTION_TYPES.LOCATION_COUNT,
        payload: count,
    };
};

export const getChoosenEpisode = (episode: ChoosenEpisodeType) => {
    return {
        type: ACTION_TYPES.CHOOSEN_EPISODE,
        payload: episode,
    };
};

export const getChoosenLocation = (location: ChoosenLocationType) => {
    return {
        type: ACTION_TYPES.CHOOSEN_LOCATION,
        payload: location,
    };
};

export const getListOfEpisodes = (list: ListOfEpisodes) => {
    return {
        type: ACTION_TYPES.LIST_OF_EPISODES,
        payload: list,
    };
};

export const getListOfLocations = (list: ListOfLocations) => {
    return {
        type: ACTION_TYPES.LIST_OF_LOCATIONS,
        payload: list,
    };
};

export const getCharactersAction = (data: Characters) => {
    return {
        type: ACTION_TYPES.GET_CHARACTERS,
        payload: data,
    };
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

export const getPageInfoAction = (info: PaginationInfo) => {
    return {
        type: ACTION_TYPES.PAGES_INFO,
        payload: info,
    };
};
