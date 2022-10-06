import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLazyQuery } from '@apollo/client';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import RepeatIcon from '@mui/icons-material/Repeat';
import {
    getCharactersAction,
    getPageInfoAction,
    errorAction,
    loadingAction,
    searchNameAction,
    pageChangeAction,
    changeStatus,
    changeSpecies,
    changeGender,
    changeInitialRender,
} from '../../redux/Actions';
import { MainStateType } from '../../redux';
import { TextBox, Text } from './styles';
import { FITLER_CHARACTERS } from '../../graphql/Queries';
import PrograssCircular from '../PrograssCircular/PrograssCircular';
import { statusList, genderList, speciesList } from './staticData';

export default function ByCharacters() {
    const [typing, setTyping] = useState(false);
    const dispatch = useDispatch();
    const {
        status,
        species,
        gender,
        pageInfo,
        searchName,
        initialRender,
        characters,
        loadingState,
    } = useSelector<MainStateType, MainStateType['characters']>(
        ({ characters }) => characters
    );
    const [getCharactersByFilter, { loading, error, data, called }] =
        useLazyQuery(FITLER_CHARACTERS);

    const clearFilterHanlder = () => {
        dispatch(changeStatus(''));
        dispatch(changeGender(''));
        dispatch(changeSpecies(''));
        dispatch(searchNameAction(''));
        dispatch(pageChangeAction(1));
        dispatch(changeInitialRender(false));
    };

    useEffect(() => {
        if (searchName) {
            const debounce = setTimeout(() => {
                getCharactersByFilter({
                    variables: {
                        page: pageInfo.page,
                        status,
                        name: searchName,
                        species,
                        gender,
                    },
                    errorPolicy: 'all',
                });
                return () => clearTimeout(debounce);
            }, 500);
        } else {
            getCharactersByFilter({
                variables: {
                    page: pageInfo.page,
                    status,
                    name: searchName,
                    species,
                    gender,
                },
                errorPolicy: 'all',
            });
        }
        if (data) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            let results = data?.characters?.results;
            let info = data?.characters?.info;
            dispatch(getCharactersAction(results));
            dispatch(getPageInfoAction(info));
            dispatch(changeInitialRender(true));
        }
    }, [
        dispatch,
        data,
        pageInfo.page,
        getCharactersByFilter,
        status,
        searchName,
        species,
        gender,
    ]);

    useEffect(() => {
        if (!called)
            getCharactersByFilter({
                variables: {
                    page: pageInfo.page,
                    status,
                    name: searchName,
                    species,
                    gender,
                },
                errorPolicy: 'all',
            });
    }, [
        called,
        initialRender,
        pageInfo.page,
        status,
        searchName,
        species,
        gender,
        getCharactersByFilter,
    ]);
    useEffect(() => {
        if (loading) dispatch(loadingAction(true));
        if (!loading) dispatch(loadingAction(false));
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

    return (
        <Box width="100%" maxWidth="600px" marginBottom={3}>
            <Grid container spacing={2} marginBottom={3}>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <TextField
                        value={status}
                        fullWidth
                        select
                        label="Status"
                        onChange={(e) => {
                            dispatch(pageChangeAction(1));
                            dispatch(changeStatus(e.target.value));
                        }}
                    >
                        {statusList.map(({ key, label, value }) => (
                            <MenuItem key={key} value={value}>
                                {label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <TextField
                        value={gender}
                        fullWidth
                        onChange={(e) => {
                            dispatch(pageChangeAction(1));
                            dispatch(changeGender(e.target.value));
                        }}
                        select
                        label="Gender"
                    >
                        {genderList.map(({ label, value, key }) => (
                            <MenuItem key={key} value={value}>
                                {label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <TextField
                        value={species}
                        fullWidth
                        onChange={(e) => {
                            dispatch(pageChangeAction(1));
                            dispatch(changeSpecies(e.target.value));
                        }}
                        select
                        label="Species"
                    >
                        {speciesList.map(({ label, value, key }) => (
                            <MenuItem key={key} value={value}>
                                {label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <TextBox
                        id="input-with-icon-textfield"
                        placeholder="Search for character"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="start">
                                    {typing && <PrograssCircular />}
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined"
                        value={searchName}
                        onKeyDown={() => setTyping(true)}
                        onKeyUp={() => setTyping(false)}
                        onChange={(e) => {
                            dispatch(pageChangeAction(1));
                            dispatch(searchNameAction(e.target.value));
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        width="100%"
                        height="100%"
                    >
                        <Button
                            startIcon={<RepeatIcon />}
                            onClick={clearFilterHanlder}
                            variant="contained"
                            style={{ color: '#fff' }}
                        >
                            Reset
                        </Button>
                    </Box>
                </Grid>
                {!loadingState && characters.length === 0 && (
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Box
                            maxWidth={500}
                            margin="auto"
                            display="flex"
                            justifyContent="center"
                            marginTop={6}
                        >
                            <Text variant="h5">No character found...</Text>
                        </Box>
                    </Grid>
                )}
            </Grid>
        </Box>
    );
}
