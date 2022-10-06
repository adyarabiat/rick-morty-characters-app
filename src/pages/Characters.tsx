import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CharactersCard from '../components/CharactersCard';
import Error from '../components/Error/Error';
import { MainStateType } from '../redux';
import Spinner from '../components/Spinner';
import NavBar from '../components/NavBar';
import ByCharacters from '../components/ByCharacters';
import ByEpisodes from '../components/ByEpisodes';
import ByLocations from '../components/ByLocations';
import Pagination from '../components/Pagination';

export default function Characters() {
    const { errorState, getBy, loadingState } = useSelector<
        MainStateType,
        MainStateType['characters']
    >(({ characters }) => characters);

    if (errorState?.error) return <Error />;
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
                {getBy === 'characters' && <ByCharacters />}
                {getBy === 'episodes' && <ByEpisodes />}
                {getBy === 'location' && <ByLocations />}
                <Grid container spacing={2} maxWidth="1100px">
                    <>
                        {loadingState ? (
                            <Spinner height={50} />
                        ) : (
                            <>
                                <CharactersCard />
                                <Pagination />
                            </>
                        )}
                    </>
                </Grid>
            </Box>
        </Box>
    );
}
