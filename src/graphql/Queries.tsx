import { gql } from '@apollo/client';

export const LOAD_CHARACTERS = gql`
    query LoadCharacters($page: Int) {
        characters(page: $page) {
            results {
                id
                name
                image
                status
                species
            }
            info {
                count
                pages
            }
        }
    }
`;
export const LOAD_CHARACTER = gql`
    query LoadCharacter($id: ID!) {
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
            episode {
                name
                episode
            }
        }
    }
`;
export const GET_CHARACTERS_BY_NAME = gql`
    query getCharactersByName($name: String!) {
        characters(filter: { name: $name }) {
            results {
                id
                name
                image
                status
                species
                location {
                    name
                }
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
export const FITLER_CHARACTERS = gql`
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
                location {
                    name
                }
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

export const GET_EPISODES_COUNT = gql`
    query {
        episodes {
            info {
                count
            }
        }
    }
`;
export const GET_EPISODES_LIST = gql`
    query getEpisodes($ids: [ID!]!) {
        episodesByIds(ids: $ids) {
            id
            name
        }
    }
`;

export const GET_EPIDSODE_CHARACTERS = gql`
    query getEpisodeCharacters($id: ID!) {
        episode(id: $id) {
            characters {
                id
                name
                image
                status
                species
            }
        }
    }
`;
