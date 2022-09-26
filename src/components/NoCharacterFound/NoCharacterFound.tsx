import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Text = styled(Typography)(() => ({
    width: '100%',
    textAlign: 'center',
    marginTop: 25,
}));
export default function NoCharacterFound() {
    return (
        <Grid item xs={12} sm={12} md={12} lg={12}>
            <Text variant="h5">No Characters Found...</Text>
        </Grid>
    );
}
