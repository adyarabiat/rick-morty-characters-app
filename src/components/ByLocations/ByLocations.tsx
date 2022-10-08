import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLazyQuery } from '@apollo/client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Grid';
import { MainStateType } from '../../redux';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { Text, Span } from './styles';
import { numberToArr } from '../../helpers/numbertoArr';
import {
    getLocationsCountQuery,
    getLocationsListQuery,
    getLocationCharactersQuery,
} from '../../graphql/Queries';
import {
    getCharactersAction,
    getLocationCount,
    getListOfLocations,
    getChoosenLocation,
    errorAction,
    loadingAction,
} from '../../redux/Actions/Actions';
import PrograssCircular from '../PrograssCircular/PrograssCircular';

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

    const [
        getLocationsCounts,
        {
            data: locationsCountData,
            error: errorLocationCounts,
            loading: loadingLocationCounts,
        },
    ] = useLazyQuery(getLocationsCountQuery);
    const [
        getLocationsList,
        {
            data: LocationsList,
            loading: loadingLocationsList,
            error: errorLocationsList,
        },
    ] = useLazyQuery(getLocationsListQuery);
    const [
        getLocationCharacters,
        {
            data: charactersList,
            loading: loadingLocationCharacters,
            error: errorLocationCharacters,
        },
    ] = useLazyQuery(getLocationCharactersQuery);

    useEffect(() => {
        getLocationsCounts({
            variables: {},
            errorPolicy: 'all',
        });
        if (locationsCountData) {
            let count = locationsCountData?.locations?.info?.count;
            dispatch(getLocationCount(count));
        }
    }, [dispatch, locationsCountData, getLocationsCounts]);

    useEffect(() => {
        if (locationsCount && locationsCount !== 0) {
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

    useEffect(() => {
        if (loadingLocationCharacters) dispatch(loadingAction(true));
        if (!loadingLocationCharacters) dispatch(loadingAction(false));
        if (
            errorLocationCounts ||
            errorLocationsList ||
            errorLocationCharacters
        ) {
            let error;
            if (errorLocationCounts) error = errorLocationCounts;
            if (errorLocationsList) error = errorLocationsList;
            if (errorLocationCharacters) error = errorLocationCharacters;
            dispatch(
                errorAction({
                    error: true,
                    message: error,
                })
            );
        }
        if (
            !errorLocationsList &&
            !errorLocationCharacters &&
            !errorLocationCounts
        )
            dispatch(
                errorAction({
                    error: false,
                    message: '',
                })
            );
    }, [
        loadingLocationCharacters,
        errorLocationCounts,
        errorLocationsList,
        errorLocationCharacters,
        dispatch,
    ]);

    return (
        <Box
            width="100%"
            maxWidth="600px"
            marginBottom={3}
            data-testid="by-location"
        >
            <Grid container spacing={2} marginBottom={3}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <TextField
                        value={choosenLocation.id}
                        fullWidth
                        disabled={listOfLocations.length === 0}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment
                                    position="start"
                                    style={{ marginRight: 30 }}
                                >
                                    {loadingLocationCounts ||
                                    loadingLocationsList ||
                                    loadingLocationCharacters ? (
                                        <PrograssCircular />
                                    ) : null}
                                </InputAdornment>
                            ),
                        }}
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
                                <Span>Location {choosenLocation?.id}:</Span>{' '}
                                {choosenLocation?.name}
                            </Typography>
                        ) : (
                            <Box
                                maxWidth={500}
                                margin="auto"
                                display="flex"
                                justifyContent="center"
                                marginTop={3}
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
