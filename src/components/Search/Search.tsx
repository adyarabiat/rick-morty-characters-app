import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
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

const SearchContainer = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    marginBottom: 40,
    width: '50%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: '50%',
    },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),

    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    margin: 'auto',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('md')]: {
            width: '107ch',
        },
    },
}));

export default function Search() {
    const dispatch = useDispatch();
    const searchName = useSelector<
        MainStateType,
        MainStateType['characters']['searchName']
    >(({ characters: { searchName } }) => searchName);

    const [keySearch, setKeySearch] = useState(false);
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
    }, [loading, dispatch]);

    useEffect(() => {
        dispatch(errorAction(error));
    }, [error, dispatch]);

    return (
        <Box width="100%" display="flex" justifyContent="center">
            <SearchContainer>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search For Characters…"
                    inputProps={{ 'aria-label': 'search' }}
                    value={searchName}
                    onChange={(e) => {
                        dispatch(searchNameAction(e.target.value));
                        setKeySearch(true);
                    }}
                />
            </SearchContainer>
        </Box>
    );
}
