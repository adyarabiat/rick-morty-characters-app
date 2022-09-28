import { ACTION_TYPES } from '../ActionTypes';

type ActionsType =
    | {
          type:
              | ACTION_TYPES.SEARCH_NAME
              | ACTION_TYPES.ERROR
              | ACTION_TYPES.LOADING;
          payload: boolean;
      }
    | {
          type: ACTION_TYPES.PAGES_INFO | ACTION_TYPES.PAGE_CHANGE;
          payload: {
              page: number;
              pages: number;
              count: number;
          };
      }
    | {
          type: ACTION_TYPES.GET_CHARACTER;
          payload: {
              id: string;
              image: string;
              name: string;
              gender: string;
              created: string;
              species: string;
              status: string;
              type: string;
              episode: {
                  episode: string;
                  name: string;
              }[];
              location: {
                  name: string;
              };
              origin: {
                  name: string;
              };
          };
      }
    | {
          type: ACTION_TYPES.GET_CHARACTERS;
          payload: {
              id: string;
              status: string;
              image: string;
              name: string;
              species: string;
          }[];
      }
    | {
          type: ACTION_TYPES.SEARCH_NAME;
          payload: string;
      };

const INITIAL_STATE = {
    characters: [],
    character: {},
    pageInfo: {
        page: 1,
        pages: 0,
        count: 0,
    },
    loadingState: false,
    errorState: false,
    searchName: '',
    initalRender: false,
};
const charactersReducer = (state = INITIAL_STATE, action: ActionsType) => {
    switch (action.type) {
        case ACTION_TYPES.LOADING: {
            return {
                ...state,
                loadingState: action.payload,
            };
        }
        case ACTION_TYPES.ERROR: {
            return {
                ...state,
                errorState: action.payload,
            };
        }
        case ACTION_TYPES.GET_CHARACTERS: {
            return {
                ...state,
                characters: action.payload.map(
                    ({ id, status, image, name, species }) => ({
                        id,
                        status,
                        image,
                        name,
                        species,
                    })
                ),
            };
        }
        case ACTION_TYPES.GET_CHARACTER: {
            const {
                id,
                image,
                name,
                gender,
                created,
                species,
                status,
                type,
                episode,
                location,
                origin,
            } = action.payload;
            let episodes = episode?.map(({ name, episode }) => ({
                name,
                episode,
            }));
            return {
                ...state,
                character: {
                    id,
                    image,
                    name,
                    gender,
                    created,
                    species,
                    status,
                    type,
                    episode: episodes,
                    location: {
                        name: location?.name,
                    },
                    origin: {
                        name: origin?.name,
                    },
                },
            };
        }
        case ACTION_TYPES.SEARCH_NAME: {
            return {
                ...state,
                searchName: action.payload,
            };
        }
        case ACTION_TYPES.PAGE_CHANGE: {
            return {
                ...state,
                pageInfo: {
                    ...state.pageInfo,
                    page: action.payload,
                },
            };
        }
        case ACTION_TYPES.PAGES_INFO: {
            return {
                ...state,
                pageInfo: {
                    ...state.pageInfo,
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
