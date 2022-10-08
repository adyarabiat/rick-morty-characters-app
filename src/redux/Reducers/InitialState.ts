export const INITIAL_STATE = {
    pageInfo: {
        page: 1,
        pages: 0,
        count: 0,
    },
    getBy: 'characters',
    loadingState: false,
    errorState: {
        error: false,
        message: '',
    },
    characters: [],
    character: {},
    searchName: '',
    status: '',
    species: '',
    gender: '',
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
};
