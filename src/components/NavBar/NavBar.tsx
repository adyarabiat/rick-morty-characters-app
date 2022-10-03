import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeGetBy } from '../../redux/Actions';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { MainStateType } from '../../redux';
import {
    changeStatus,
    changeGender,
    changeSpecies,
    searchNameAction,
    pageChangeAction,
    changeInitialRender,
    getCharactersAction,
    getChoosenEpisode,
    getListOfEpisodes,
    getChoosenLocation,
    getListOfLocations,
} from '../../redux/Actions';

export default function NavBar() {
    const dispatch = useDispatch();

    const { getBy } = useSelector<MainStateType, MainStateType['characters']>(
        ({ characters }) => characters
    );

    const clearFilterHanlder = () => {
        dispatch(changeStatus(''));
        dispatch(changeGender(''));
        dispatch(changeSpecies(''));
        dispatch(searchNameAction(''));
        dispatch(pageChangeAction(1));
        dispatch(getCharactersAction([]));
        dispatch(getChoosenEpisode({ name: '', id: '' }));
        dispatch(getListOfEpisodes([]));
        dispatch(getChoosenLocation({ name: '', id: '' }));
        dispatch(getListOfLocations([]));
        dispatch(changeInitialRender(false));
    };

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        dispatch(changeGetBy(newValue));
        clearFilterHanlder();
    };

    return (
        <Box sx={{ width: '100%', marginBottom: 5 }}>
            <Tabs value={getBy} onChange={handleChange} centered>
                <Tab value="characters" label="Characters" />
                <Tab value="episodes" label="Episodes" />
                <Tab value="location" label="Location" />
            </Tabs>
        </Box>
    );
}
