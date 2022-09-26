import Box from '@mui/material/Box';
import spinner from '../../assets/spinner.gif';

export default function Spinner() {
    return (
        <Box display="flex" justifyContent="center" alignItems="center">
            <img
                src={spinner}
                style={{ width: '200px', margin: 'auto', display: 'block' }}
                alt="Loading"
            />
        </Box>
    );
}
