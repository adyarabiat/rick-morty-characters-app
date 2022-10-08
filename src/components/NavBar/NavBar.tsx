import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    getCharactersAction,
    getChoosenEpisode,
    getChoosenLocation,
    changeGetBy,
} from '../../redux/Actions/Actions';

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
        dispatch(getChoosenLocation({ name: '', id: '' }));
    };

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        dispatch(changeGetBy(newValue));
        clearFilterHanlder();
    };

    return (
        <Box
            sx={{ width: '100%', marginBottom: 5, bgcolor: 'background.paper' }}
            display="flex"
            justifyContent="center"
        >
            <Tabs variant="scrollable" value={getBy} onChange={handleChange}>
                <Tab
                    value="characters"
                    label="Characters"
                    data-testid="nav-characters"
                />
                <Tab
                    value="episodes"
                    label="Episodes"
                    data-testid="nav-episodes"
                />
                <Tab
                    value="location"
                    label="Location"
                    data-testid="nav-location"
                />
            </Tabs>
        </Box>
    );
}
