export type errorType = {
    error: boolean;
    message: any;
};
export type ChoosenEpisodeType = {
    name: string;
    id: string;
};
export type ChoosenLocationType = {
    name: string;
    id: string;
};
export type ListOfEpisodes = {
    id: string;
    name: string;
}[];
export type ListOfLocations = {
    id: string;
    name: string;
}[];
export type PaginationInfo = {
    page: number;
    pages: number;
    count: number;
};
export type Characters = {
    id: string;
    status: string;
    image: string;
    name: string;
    species: string;
    gender: string;
}[];
export type Character = {
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
