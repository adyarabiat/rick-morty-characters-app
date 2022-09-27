import Grid from '@mui/material/Grid';
import { useHistory } from 'react-router-dom';
import { Text, BackBtn } from './styles';
import { Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function NoCharacterFound() {
    const history = useHistory();
    return (
        <>
            <Box
                maxWidth={500}
                margin="auto"
                display="flex"
                justifyContent="center"
                marginTop={3}
                marginBottom={3}
            >
                <BackBtn
                    startIcon={<ArrowBackIcon />}
                    variant="contained"
                    onClick={() => history.goBack()}
                >
                    Back
                </BackBtn>
            </Box>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Text variant="h5">No character found...</Text>
            </Grid>
        </>
    );
}
