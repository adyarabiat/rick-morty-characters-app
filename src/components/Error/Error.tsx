import Grid from '@mui/material/Grid';
import { Text } from './styles';

export default function Error() {
    return (
        <Grid item xs={12} sm={12} md={12} lg={12}>
            <Text variant="h5">
                Something went wrong! Please try again later
            </Text>
        </Grid>
    );
}
