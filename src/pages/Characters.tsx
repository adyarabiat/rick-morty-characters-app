import { useEffect } from 'react';
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
import CharactersCard from '../components/CharactersCard';
import Search from '../components/Search';
import Error from '../components/Error/Error';
import Pagination from '../components/Pagination';
import useCharacters from '../graphql/hooks/userCharacters';
import NoCharacterFound from '../components/NoCharacterFound';
import { MainStateType } from '../redux';
import CircularIndeterminate from '../components/Loading';

const GridContainer = styled(Grid)(() => ({
    padding: 10,
    maxWidth: '1200px',
}));

export default function Characters() {
    const dispatch = useDispatch();
    const characters = useSelector<MainStateType, MainStateType['characters']>(
        ({ characters }) => characters
    );

    const pageInfo = useSelector<
        MainStateType,
        MainStateType['characters']['pageInfo']
    >(({ characters }) => characters.pageInfo);

    const { loading, error, data } = useCharacters(pageInfo?.page);

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
        if (error) dispatch(errorAction(true));
        if (!error) dispatch(errorAction(false));
    }, [loading, error, dispatch]);

    if (characters?.errorState) return <Error />;
    return (
        <Box display="flex" justifyContent="center" alignItems="center">
            <GridContainer container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Search />
                </Grid>
                {!characters?.loadingState &&
                characters?.characters?.length === 0 ? (
                    <NoCharacterFound />
                ) : (
                    <>
                        {characters?.loadingState ? (
                            <CircularIndeterminate />
                        ) : (
                            <>
                                <CharactersCard />
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
