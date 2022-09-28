import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import { useLazyQuery } from '@apollo/client';
import {
    getCharactersAction,
    getPageInfoAction,
    loadingAction,
    errorAction,
    searchNameAction,
    pageChangeAction,
} from '../../redux/Actions';
import { GET_CHARACTERS_BY_NAME } from '../../graphql/Queries';
import { MainStateType } from '../../redux';
import { TextBox } from './styles';

export default function Search() {
    const dispatch = useDispatch();
    const [keySearch, setKeySearch] = useState(false);
    const searchName = useSelector<
        MainStateType,
        MainStateType['characters']['searchName']
    >(({ characters: { searchName } }) => searchName);

    const [getCharacters, { loading, error, data }] = useLazyQuery(
        GET_CHARACTERS_BY_NAME,
        {
            variables: {
                name: searchName,
            },
        }
    );
    useEffect(() => {
        if (keySearch) {
            dispatch(pageChangeAction(1));
            let timer: ReturnType<typeof setTimeout> = setTimeout(() => {
                getCharacters();
                if (data) {
                    let results = data?.characters?.results;
                    let info = data?.characters?.info;

                    // type charactersType = {
                    //     id: string;
                    //     status: string;
                    //     image: string;
                    //     name: string;
                    //     species: string;
                    // };
                    dispatch(getCharactersAction(results));
                    dispatch(getPageInfoAction(info));
                }
            }, 500);
            return () => {
                clearTimeout(timer);
            };
        }
        dispatch(pageChangeAction(1));
    }, [searchName, dispatch, keySearch, data, getCharacters]);

    useEffect(() => {
        dispatch(loadingAction(loading));
        if (error) dispatch(errorAction(true));
        if (!error) dispatch(errorAction(false));
    }, [loading, error, dispatch]);

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100%"
        >
            <TextBox
                id="input-with-icon-textfield"
                placeholder="Search for character"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                variant="outlined"
                value={searchName}
                onChange={(e) => {
                    dispatch(searchNameAction(e.target.value));
                    setKeySearch(true);
                }}
            />
        </Box>
    );
}
