import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLazyQuery, useQuery } from '@apollo/client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import { MainStateType } from '../../redux';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { Text } from './styles';
import { numberToArr } from '../../helpers/numbertoArr';
import {
    GET_EPISODES_COUNT,
    GET_EPISODES_LIST,
    GET_EPIDSODE_CHARACTERS,
} from '../../graphql/Queries';
import {
    getCharactersAction,
    errorAction,
    loadingAction,
    getEpisodesCount,
    getListOfEpisodes,
    getChoosenEpisode,
} from '../../redux/Actions';
import PrograssCircular from '../PrograssCircular/PrograssCircular';

export default function ByEpisodes() {
    const dispatch = useDispatch();
    const {
        listOfEpisodes,
        choosenEpisode,
        episodesCount,
        characters,
        loadingState,
    } = useSelector<MainStateType, MainStateType['characters']>(
        ({ characters }) => characters
    );
    const {
        data: episodesCountData,
        loading: loadingEpisodeCounts,
        error: errorEpisodeCounts,
    } = useQuery(GET_EPISODES_COUNT, {
        errorPolicy: 'all',
    });
    const [
        getEpisodesList,
        {
            data: episodesList,
            loading: loadingEpisodesList,
            error: errorEpisodesList,
            called: calledEpisodesList,
        },
    ] = useLazyQuery(GET_EPISODES_LIST);
    const [
        getEpisodesCharacters,
        {
            data: charactersList,
            loading: loadingEpisodeCharacters,
            error: errorEpisodeCharacters,
        },
    ] = useLazyQuery(GET_EPIDSODE_CHARACTERS);

    useEffect(() => {
        if (loadingEpisodeCharacters) dispatch(loadingAction(true));
        if (!loadingEpisodeCharacters) dispatch(loadingAction(false));
        if (errorEpisodeCounts || errorEpisodesList || errorEpisodeCharacters) {
            let error;
            if (errorEpisodeCounts) error = errorEpisodeCounts;
            if (errorEpisodesList) error = errorEpisodesList;
            if (errorEpisodeCharacters) error = errorEpisodeCharacters;
            dispatch(
                errorAction({
                    error: true,
                    message: error,
                })
            );
        }
        if (!errorEpisodesList || !errorEpisodeCharacters)
            dispatch(
                errorAction({
                    error: false,
                    message: '',
                })
            );
    }, [
        loadingEpisodeCharacters,
        errorEpisodeCounts,
        errorEpisodesList,
        errorEpisodeCharacters,
        dispatch,
    ]);
    useEffect(() => {
        if (episodesCountData) {
            let count = episodesCountData?.episodes?.info?.count;
            dispatch(getEpisodesCount(count));
        }
    }, [dispatch, episodesCountData]);
    useEffect(() => {
        if (episodesCount !== 0 || !calledEpisodesList) {
            getEpisodesList({
                variables: {
                    ids: numberToArr(episodesCount),
                },
                errorPolicy: 'all',
            });
            if (episodesList) {
                let episodes = episodesList?.episodesByIds;
                dispatch(getListOfEpisodes(episodes));
            }
        }
    }, [
        dispatch,
        getEpisodesList,
        episodesList,
        episodesCount,
        calledEpisodesList,
    ]);
    useEffect(() => {
        if (choosenEpisode.id !== '' && choosenEpisode.name !== '') {
            getEpisodesCharacters({
                variables: {
                    id: choosenEpisode.id,
                },
                errorPolicy: 'all',
            });
            if (charactersList) {
                let characters = charactersList?.episode?.characters;
                dispatch(getCharactersAction(characters));
            }
        }
    }, [dispatch, getEpisodesCharacters, charactersList, choosenEpisode]);

    return (
        <Box width="100%" maxWidth="600px" marginBottom={3}>
            <Grid container spacing={2} marginBottom={3}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <TextField
                        value={choosenEpisode.id}
                        fullWidth
                        disabled={listOfEpisodes.length === 0}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment
                                    position="start"
                                    style={{ marginRight: 30 }}
                                >
                                    {loadingEpisodeCounts ||
                                    loadingEpisodesList ||
                                    loadingEpisodeCharacters ? (
                                        <PrograssCircular />
                                    ) : null}
                                </InputAdornment>
                            ),
                        }}
                        sx={{ m: 1 }}
                        onChange={(e) => {
                            let selected = listOfEpisodes.find(
                                (el) => el.id === e.target.value
                            );
                            if (selected) dispatch(getChoosenEpisode(selected));
                        }}
                        select
                        label="Pick Episode"
                    >
                        <Typography gutterBottom></Typography>
                        {listOfEpisodes?.map(({ name, id }) => (
                            <MenuItem key={id} value={id}>
                                {id} - {name}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        flexDirection="column"
                        width="100%"
                        marginTop={3}
                        marginBottom={3}
                    >
                        {choosenEpisode.name !== '' &&
                        choosenEpisode.id !== '' ? (
                            <Typography variant="h4" color="primary">
                                <span
                                    style={{
                                        color: '#010101',
                                    }}
                                >
                                    Episode {choosenEpisode?.id}:
                                </span>{' '}
                                {choosenEpisode?.name}
                            </Typography>
                        ) : (
                            <Box
                                maxWidth={500}
                                margin="auto"
                                display="flex"
                                justifyContent="center"
                                marginTop={3}
                                marginBottom={5}
                            >
                                <Text variant="h5">
                                    Please pick episode to show characters
                                </Text>
                            </Box>
                        )}
                    </Box>
                </Grid>
                {choosenEpisode.name !== '' &&
                    choosenEpisode.id !== '' &&
                    !loadingState &&
                    characters.length === 0 && (
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Box
                                maxWidth={500}
                                margin="auto"
                                display="flex"
                                justifyContent="center"
                                marginTop={3}
                                marginBottom={5}
                            >
                                <Text variant="h5">
                                    On {choosenEpisode?.name} episode there are
                                    no characters...
                                </Text>
                            </Box>
                        </Grid>
                    )}
            </Grid>
        </Box>
    );
}
