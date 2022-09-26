import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import {
    errorAction,
    getCharactersAction,
    getPageInfoAction,
    loadingAction,
} from '../redux/Actions';
import CharcterCard from '../components/Cards';
import Search from '../components/Search';
import Spinner from '../components/Spinner';
import Error from '../components/Error/Error';
import Pagination from '../components/Pagination';
import useCharacters from '../graphql/hooks/userCharacters';
import NoCharacterFound from '../components/NoCharacterFound';
import { MainStateType, PaginationInfoType } from '../redux';

const GridContainer = styled(Grid)(() => ({
    padding: 10,
    maxWidth: '1100px',
}));

export default function Characters() {
    const dispatch = useDispatch();
    const characters = useSelector<MainStateType, MainStateType['characters']>(
        ({ characters }) => characters
    );
    const paginationInfo = useSelector<
        PaginationInfoType,
        PaginationInfoType['paginationInfo']
    >(({ paginationInfo }) => paginationInfo);

    const { loading, error, data } = useCharacters(paginationInfo?.page);

    useEffect(() => {
        if (data) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            let results = data?.characters?.results;
            let info = data?.characters?.info;
            dispatch(getCharactersAction(results));
            dispatch(getPageInfoAction(info));
        }
    }, [data, dispatch]);

    useEffect(() => {
        dispatch(loadingAction(loading));
    }, [loading, dispatch]);

    useEffect(() => {
        dispatch(errorAction(error));
    }, [error, dispatch]);

    if (characters?.errorState) return <Error />;
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            padding="0 20px"
        >
            <GridContainer
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Search />
                </Grid>
                {characters?.loadingState ? (
                    <Box
                        width="100%"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        padding="0 20px"
                    >
                        <Spinner />
                    </Box>
                ) : (
                    <>
                        {!characters?.loadingState &&
                        characters?.characters?.length === 0 ? (
                            <NoCharacterFound />
                        ) : (
                            <>
                                <CharcterCard
                                    characters={characters?.characters}
                                />
                                <Grid item xs={12} sm={12} md={12} lg={12}>
                                    <Pagination />
                                </Grid>
                            </>
                        )}
                    </>
                )}
            </GridContainer>
        </Box>
    );
}
