import { createStore, compose } from 'redux';
import MainReducer from './Reducers';
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(MainReducer, composeEnhancers());

export type MainStateType = {
    characters: {
        getBy: string;
        loadingState: boolean;
        dialogOpen: boolean;
        filtered: boolean;
        status: string;
        species: string;
        gender: string;
        episodesCount: number;
        listOfEpisodes: {
            id: string;
            name: string;
        }[];
        choosenEpisode: {
            name: string;
            id: string;
        };
        pageInfo: {
            page: number;
            pages: number;
            count: number;
        };
        characters: {
            id: string;
            status: string;
            image: string;
            name: string;
            species: string;
        }[];
        character: {
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
        searchName: string;
        initialRender: boolean;
        errorState: {
            error: boolean;
            message: any;
        };
    };
};
