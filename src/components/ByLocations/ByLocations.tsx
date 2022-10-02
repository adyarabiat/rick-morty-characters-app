import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLazyQuery, useQuery } from '@apollo/client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { MainStateType } from '../../redux';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { Text } from './styles';
import { numberToArr } from '../../helpers/numbertoArr';
import {
    GET_LOCATIONS_COUNT,
    GET_LOCATIONS_LIST,
    GET_LOCATIONS_CHARACTERS,
} from '../../graphql/Queries';
import {
    getCharactersAction,
    getLocationCount,
    getListOfLocations,
    getChoosenLocation,
    errorAction,
    loadingAction,
} from '../../redux/Actions';

export default function ByLocations() {
    const dispatch = useDispatch();
    const {
        listOfLocations,
        choosenLocation,
        locationsCount,
        characters,
        loadingState,
    } = useSelector<MainStateType, MainStateType['characters']>(
        ({ characters }) => characters
    );

    const {
        data: locationsCountData,
        error: errorLocationCounts,
        loading: loadingLocationCounts,
    } = useQuery(GET_LOCATIONS_COUNT, {
        errorPolicy: 'all',
    });

    const [
        getLocationsList,
        {
            loading: loadingLocationsList,
            error: errorLocationsList,
            data: LocationsList,
            called: calledLocationsList,
        },
    ] = useLazyQuery(GET_LOCATIONS_LIST);

    const [
        getLocationCharacters,
        {
            loading: loadingLocationCharacters,
            error: errorLocationCharacters,
            data: charactersList,
            called: calledLocationCharacters,
        },
    ] = useLazyQuery(GET_LOCATIONS_CHARACTERS);

    useEffect(() => {
        if (loadingLocationCharacters) dispatch(loadingAction(true));
        if (!loadingLocationCharacters) dispatch(loadingAction(false));

        if (errorLocationsList || errorLocationCharacters) {
            let error;
            if (errorLocationsList) error = errorLocationsList;
            if (errorLocationCharacters) error = errorLocationCharacters;
            dispatch(
                errorAction({
                    error: true,
                    message: error,
                })
            );
        }
        if (!errorLocationsList || !errorLocationCharacters)
            dispatch(
                errorAction({
                    error: false,
                    message: '',
                })
            );
    }, [
        loadingLocationsList,
        loadingLocationCharacters,
        errorLocationsList,
        errorLocationCharacters,
        dispatch,
    ]);

    useEffect(() => {
        if (locationsCountData) {
            let count = locationsCountData?.locations?.info?.count;
            dispatch(getLocationCount(count));
        }
    }, [dispatch, locationsCountData]);

    useEffect(() => {
        if (locationsCount !== 0) {
            getLocationsList({
                variables: {
                    ids: numberToArr(locationsCount),
                },
                errorPolicy: 'all',
            });
            if (LocationsList) {
                let locations = LocationsList?.locationsByIds;
                dispatch(getListOfLocations(locations));
            }
        }
    }, [dispatch, getLocationsList, LocationsList, locationsCount]);

    useEffect(() => {
        if (choosenLocation.id !== '' && choosenLocation.name !== '') {
            getLocationCharacters({
                variables: {
                    id: choosenLocation.id,
                },
                errorPolicy: 'all',
            });
            if (charactersList) {
                let residents = charactersList?.location?.residents;
                dispatch(getCharactersAction(residents));
            }
        }
    }, [dispatch, getLocationCharacters, charactersList, choosenLocation]);

    return (
        <Box width="70%">
            <Grid container spacing={2} marginBottom={3}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <TextField
                        value={choosenLocation.id}
                        fullWidth
                        disabled={listOfLocations.length === 0}
                        sx={{ m: 1 }}
                        onChange={(e) => {
                            let selected = listOfLocations.find(
                                (el) => el.id === e.target.value
                            );
                            if (selected)
                                dispatch(getChoosenLocation(selected));
                        }}
                        select
                        label="Pick Location"
                    >
                        <Typography gutterBottom></Typography>
                        {listOfLocations?.map(({ name, id }) => (
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
                        {choosenLocation.name !== '' &&
                        choosenLocation.id !== '' ? (
                            <Typography variant="h4" color="primary">
                                <span
                                    style={{
                                        color: '#010101',
                                    }}
                                >
                                    Location {choosenLocation?.id}:
                                </span>{' '}
                                {choosenLocation?.name}
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
                                    Please pick location to show the residents
                                </Text>
                            </Box>
                        )}
                    </Box>
                </Grid>
                {choosenLocation.name !== '' &&
                    choosenLocation.id !== '' &&
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
                                    On {choosenLocation?.name} location there
                                    are no residents...
                                </Text>
                            </Box>
                        </Grid>
                    )}
            </Grid>
        </Box>
    );
}
