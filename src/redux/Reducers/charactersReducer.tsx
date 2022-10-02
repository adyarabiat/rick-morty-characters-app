import { ACTION_TYPES } from '../ActionTypes';

type ActionsType =
    | {
          type:
              | ACTION_TYPES.SEARCH_NAME
              | ACTION_TYPES.LOADING
              | ACTION_TYPES.DIALOG_OPEN
              | ACTION_TYPES.FILTERED
              | ACTION_TYPES.INITIAL_RENDER;
          payload: boolean;
      }
    | {
          type:
              | ACTION_TYPES.SEARCH_NAME
              | ACTION_TYPES.STATUS
              | ACTION_TYPES.SPECIES
              | ACTION_TYPES.GENDER
              | ACTION_TYPES.GET_BY;

          payload: string;
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
          type: ACTION_TYPES.ERROR;
          payload: {
              error: boolean;
              message: any;
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
          type: ACTION_TYPES.LIST_OF_EPISODES | ACTION_TYPES.LIST_OF_LOCATIONS;
          payload: {
              id: string;
              name: string;
          }[];
      }
    | {
          type: ACTION_TYPES.CHOOSEN_EPISODE | ACTION_TYPES.CHOOSEN_LOCATION;
          payload: {
              name: string;
              id: string;
          };
      }
    | {
          type: ACTION_TYPES.EPISODES_COUNT | ACTION_TYPES.LOCATION_COUNT;
          payload: number;
      };

const INITIAL_STATE = {
    getBy: 'characters',
    characters: [],
    character: {},
    episodesCount: 0,
    listOfEpisodes: [],
    choosenEpisode: {
        name: '',
        id: '',
    },
    locationsCount: 0,
    listOfLocations: [],
    choosenLocation: {
        name: '',
        id: '',
    },
    pageInfo: {
        page: 1,
        pages: 0,
        count: 0,
    },
    loadingState: false,
    errorState: {
        error: false,
        message: '',
    },
    searchName: '',
    initialRender: false,
    dialogOpen: false,
    filtered: false,
    status: '',
    species: '',
    gender: '',
};
const charactersReducer = (state = INITIAL_STATE, action: ActionsType) => {
    switch (action.type) {
        case ACTION_TYPES.EPISODES_COUNT: {
            return {
                ...state,
                episodesCount: action?.payload,
            };
        }
        case ACTION_TYPES.LOCATION_COUNT: {
            return {
                ...state,
                locationsCount: action?.payload,
            };
        }
        case ACTION_TYPES.LIST_OF_EPISODES: {
            return {
                ...state,
                listOfEpisodes: action?.payload?.map(({ id, name }) => ({
                    id,
                    name,
                })),
            };
        }
        case ACTION_TYPES.LIST_OF_LOCATIONS: {
            return {
                ...state,
                listOfLocations: action?.payload?.map(({ id, name }) => ({
                    id,
                    name,
                })),
            };
        }
        case ACTION_TYPES.CHOOSEN_EPISODE: {
            return {
                ...state,
                choosenEpisode: action?.payload,
            };
        }
        case ACTION_TYPES.CHOOSEN_LOCATION: {
            return {
                ...state,
                choosenLocation: action?.payload,
            };
        }
        case ACTION_TYPES.GET_BY: {
            return {
                ...state,
                getBy: action?.payload,
            };
        }

        case ACTION_TYPES.INITIAL_RENDER: {
            return {
                ...state,
                initialRender: action?.payload,
            };
        }
        case ACTION_TYPES.LOADING: {
            return {
                ...state,
                loadingState: action?.payload,
            };
        }
        case ACTION_TYPES.DIALOG_OPEN: {
            return {
                ...state,
                dialogOpen: action?.payload,
            };
        }
        case ACTION_TYPES.STATUS: {
            return {
                ...state,
                status: action?.payload,
            };
        }
        case ACTION_TYPES.SPECIES: {
            return {
                ...state,
                species: action?.payload,
            };
        }
        case ACTION_TYPES.GENDER: {
            return {
                ...state,
                gender: action?.payload,
            };
        }
        case ACTION_TYPES.FILTERED: {
            return {
                ...state,
                filtered: action?.payload,
            };
        }
        case ACTION_TYPES.ERROR: {
            return {
                ...state,
                errorState: {
                    error: action?.payload?.error,
                    message: action?.payload?.message,
                },
            };
        }
        case ACTION_TYPES.GET_CHARACTERS: {
            return {
                ...state,
                characters: action?.payload?.map(
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
