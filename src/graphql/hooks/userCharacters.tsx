import { useQuery } from '@apollo/client';
import { LOAD_CHARACTERS } from '../Queries';

const useCharacters = (page: Number) => {
    const { data, error, loading } = useQuery(LOAD_CHARACTERS, {
        variables: {
            page,
        },
    });
    return {
        data,
        error,
        loading,
    };
};

export default useCharacters;
