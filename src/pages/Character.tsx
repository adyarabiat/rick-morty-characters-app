import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { LOAD_CHARACTER } from '../graphql/Queries';
import Error from '../components/Error/Error';
import { getCharacterAction } from '../redux/Actions';
import CharacterCard from '../components/CharacterCard';
import { loadingAction, errorAction } from '../redux/Actions';
import Spinner from '../components/Spinner';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const Text = styled(Typography)(({ theme }) => ({
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
    color: theme.palette.grey['500'],
    marginBottom: 25,
}));
export const BackBtn = styled(Button)(({ theme }) => ({
    marginTop: 3,
    background: theme.palette.primary.main,
    fontWeight: 'bold',

    '&:hover': {
        backgroundColor: theme.palette.primary.light,
    },
}));

export default function Character() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    type MyParams = {
        id: string;
    };
    const { id } = useParams<keyof MyParams>() as MyParams;

    const { data, error, loading } = useQuery(LOAD_CHARACTER, {
        variables: {
            id,
        },
        errorPolicy: 'all',
    });

    useEffect(() => {
        if (isNaN(+id)) return navigate('/characters');
    }, [id, navigate]);

    useEffect(() => {
        if (data && data?.character) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            dispatch(getCharacterAction(data?.character));
        }
    }, [data, dispatch]);

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
    if (!data || !data?.character)
        return (
            <Box
                height="100vh"
                margin="auto"
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                textAlign="center"
            >
                <Text variant="h5">No character found...</Text>
                <BackBtn
                    startIcon={<ArrowBackIcon />}
                    variant="contained"
                    onClick={() => navigate(-1)}
                >
                    Back
                </BackBtn>
            </Box>
        );
    return <CharacterCard />;
}
