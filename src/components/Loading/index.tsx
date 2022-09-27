import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="50vh"
            width="100%"
        >
            <CircularProgress />
        </Box>
    );
}
