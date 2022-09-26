import { useQuery } from '@apollo/client';
import { LOAD_CHARACTER } from '../Queries';

const useCharacter = (id: string) => {
    const { data, error, loading } = useQuery(LOAD_CHARACTER, {
        variables: {
            id,
        },
    });
    return {
        data,
        error,
        loading,
    };
};

export default useCharacter;
