import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import useCharacter from '../../hooks/useCharacter';
import Error from '../../components/Error/Error';

import { getCharacterAction } from '../../redux/Actions';
import CharacterCard from '../../components/CharacterCard';
import { loadingAction, errorAction } from '../../redux/Actions';
import NoCharacterFound from '../../components/NoCharacterFound';
import Spinner from '../../components/Spinner';

export default function Character() {
    const dispatch = useDispatch();
    const history = useHistory();

    const { id } = useParams<{ id: string }>();
    const { data, error, loading } = useCharacter(id);

    useEffect(() => {
        if (isNaN(+id)) return history.push({ pathname: '/' });
    }, [id, history]);
    useEffect(() => {
        if (data && data?.character) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            dispatch(getCharacterAction(data?.character));
        }
    }, [data, dispatch, history]);
    useEffect(() => {
        dispatch(loadingAction(loading));
        if (error)
            dispatch(
                errorAction({
                    error: true,
                    message: error,
                })
            );
        if (!error)
            dispatch(
                errorAction({
                    error: false,
                    message: '',
                })
            );
    }, [loading, error, dispatch]);

    if (loading) return <Spinner height={100} />;
    if (error) return <Error />;
    if (!data || !data?.character) return <NoCharacterFound />;
    return <CharacterCard />;
}
