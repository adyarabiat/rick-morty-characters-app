import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import useCharacter from '../graphql/hooks/useCharacter';
import Error from '../components/Error/Error';
import CircularIndeterminate from '../components/Loading';
import { getCharacterAction } from '../redux/Actions';
import NoCharacterFound from '../components/NoCharacterFound';
import CharacterCard from '../components/CharacterCard';

export default function Character() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams<{ id: string }>();
    if (isNaN(+id)) {
        history.goBack();
    }
    const { data, error, loading } = useCharacter(id);

    useEffect(() => {
        if (data && data?.character) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            dispatch(getCharacterAction(data?.character));
        }
    }, [data, dispatch, history]);

    if (loading) return <CircularIndeterminate />;
    if (error) return <Error />;
    if (!data || !data?.character) return <NoCharacterFound />;
    return <CharacterCard />;
}
