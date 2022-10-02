import { useQuery } from '@apollo/client';
import { LOAD_CHARACTERS } from '../graphql/Queries';

const useCharacters = (page: number) => {
    const { data, error, loading } = useQuery(LOAD_CHARACTERS, {
        variables: {
            page,
        },
        errorPolicy: 'all',
    });
    return {
        data,
        error,
        loading,
    };
};

export default useCharacters;
