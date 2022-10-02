import { useQuery } from '@apollo/client';
import { LOAD_CHARACTER } from '../graphql/Queries';

const useCharacter = (id: string) => {
    const { data, error, loading } = useQuery(LOAD_CHARACTER, {
        variables: {
            id,
        },
        errorPolicy: 'all',
    });
    return {
        data,
        error,
        loading,
    };
};

export default useCharacter;
