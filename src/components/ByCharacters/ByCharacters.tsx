import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLazyQuery } from '@apollo/client';

import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
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
import { TextBox } from './styles';

import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { FITLER_CHARACTERS } from '../../graphql/Queries';
import PrograssCircular from './components/PrograssCircular';

export default function ByCharacters() {
    const dispatch = useDispatch();
    const {
        status,
        species,
        gender,
        pageInfo,
        searchName,
        loadingState,
        initialRender,
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
        if (!initialRender)
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
        initialRender,
        pageInfo.page,
        status,
        searchName,
        species,
        gender,
        getCharactersByFilter,
    ]);

    useEffect(() => {
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
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (data) {
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
        <Box width="70%">
            <Grid container spacing={2} marginBottom={3}>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <TextField
                        value={status}
                        fullWidth
                        onChange={(e) => {
                            dispatch(pageChangeAction(1));
                            dispatch(changeStatus(e.target.value));
                        }}
                        select
                        label="Status"
                    >
                        <Typography gutterBottom></Typography>
                        <MenuItem key={1} value="Alive">
                            Alive
                        </MenuItem>
                        <MenuItem key={2} value="Dead">
                            Dead
                        </MenuItem>
                        <MenuItem key={3} value="unknown">
                            Unknown
                        </MenuItem>
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
                        <Typography gutterBottom></Typography>
                        <MenuItem key={1} value="female">
                            Female
                        </MenuItem>
                        <MenuItem key={2} value="male">
                            Male
                        </MenuItem>
                        <MenuItem key={3} value="genderless">
                            Genderless
                        </MenuItem>
                        <MenuItem key={4} value="unknown">
                            Unknown
                        </MenuItem>
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
                        <Typography gutterBottom></Typography>
                        <MenuItem key={1} value="Human">
                            Human
                        </MenuItem>
                        <MenuItem key={2} value="Animal">
                            Animal
                        </MenuItem>
                        <MenuItem key={3} value="Robot">
                            Robot
                        </MenuItem>
                        <MenuItem key={4} value="Alien">
                            Alien
                        </MenuItem>
                        <MenuItem key={5} value="Humanoid">
                            Humanoid
                        </MenuItem>

                        <MenuItem key={6} value="unPoopybuttholeknown">
                            Poopybutthole
                        </MenuItem>
                        <MenuItem key={7} value="Mythological Creature">
                            Mythological Creature
                        </MenuItem>
                        <MenuItem key={8} value="Cronenberg">
                            Cronenberg
                        </MenuItem>
                        <MenuItem key={9} value="Disease">
                            Disease
                        </MenuItem>
                        <MenuItem key={10} value="unknown">
                            unknown
                        </MenuItem>
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
                                    {loadingState && <PrograssCircular />}
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined"
                        value={searchName}
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
                            variant="outlined"
                        >
                            Reset
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
