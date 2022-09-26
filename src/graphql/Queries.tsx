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
