import { gql } from '@apollo/client';

export const getFilterCharactersQuery = gql`
    query getCharactersByFilter(
        $page: Int
        $status: String!
        $name: String!
        $species: String!
        $gender: String!
    ) {
        characters(
            page: $page
            filter: {
                status: $status
                name: $name
                species: $species
                gender: $gender
            }
        ) {
            results {
                id
                name
                image
                status
                species
                gender
            }
            info {
                count
                pages
                next
                prev
            }
        }
    }
`;
export const getCharacterQuery = gql`
    query getCharacterbyId($id: ID!) {
        character(id: $id) {
            id
            name
            status
            species
            type
            gender
            image
            created
            origin {
                name
            }
            location {
                name
            }
        }
    }
`;
export const getEpisodesCountQuery = gql`
    query getEpisodesCounts {
        episodes {
            info {
                count
            }
        }
    }
`;
export const getEpisodesListQuery = gql`
    query getEpisodesList($ids: [ID!]!) {
        episodesByIds(ids: $ids) {
            id
            name
        }
    }
`;
export const getEpisodesCharactersQuery = gql`
    query getEpisodeCharacters($id: ID!) {
        episode(id: $id) {
            characters {
                id
                name
                image
                status
                species
                gender
            }
        }
    }
`;
export const getLocationsCountQuery = gql`
    query getLocationsCounts {
        locations {
            info {
                count
            }
        }
    }
`;
export const getLocationsListQuery = gql`
    query getLocationsList($ids: [ID!]!) {
        locationsByIds(ids: $ids) {
            id
            name
        }
    }
`;
export const getLocationCharactersQuery = gql`
    query getLocationCharacters($id: ID!) {
        location(id: $id) {
            residents {
                id
                name
                image
                status
                species
                gender
            }
        }
    }
`;
