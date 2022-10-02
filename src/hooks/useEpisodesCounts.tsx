import { useQuery } from '@apollo/client';
import { LOAD_CHARACTER } from '../graphql/Queries';

const useEpisodesCounts = () => {
    const { data, error, loading } = useQuery(LOAD_CHARACTER, {
        errorPolicy: 'all',
    });
    return {
        data,
        error,
        loading,
    };
};

export default useEpisodesCounts;
