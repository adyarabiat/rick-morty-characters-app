import { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import CharactersCard from '../../components/CharactersCard';
import Error from '../../components/Error/Error';
import Pagination from '../../components/Pagination';
import NoCharacterFound from '../../components/NoCharacterFound';
import { MainStateType } from '../../redux';
import Spinner from '../../components/Spinner';
import NavBar from '../../components/NavBar';
import ByCharacters from '../../components/ByCharacters';
import ByEpisodes from '../../components/ByEpisodes';

export default function Characters() {
    const characters = useSelector<MainStateType, MainStateType['characters']>(
        ({ characters }) => characters
    );

    if (characters?.errorState?.error) return <Error />;

    console.log(characters?.loadingState);

    return (
        <Box display="flex" justifyContent="center" alignItems="center">
            <Box
                marginTop={5}
                padding={5}
                width="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
            >
                <NavBar />
                {characters?.getBy === 'characters' && <ByCharacters />}
                {characters?.getBy === 'episodes' && <ByEpisodes />}
                <Grid container spacing={2} maxWidth="1100px">
                    {characters?.getBy === 'characters' &&
                    !characters?.loadingState &&
                    characters?.characters?.length === 0 ? (
                        <NoCharacterFound />
                    ) : (
                        <>
                            {characters?.loadingState ? (
                                <Spinner height={50} />
                            ) : (
                                <>
                                    <CharactersCard />
                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                        {characters?.getBy === 'characters' && (
                                            <Pagination />
                                        )}
                                    </Grid>
                                </>
                            )}
                        </>
                    )}
                </Grid>
            </Box>
        </Box>
    );
}
