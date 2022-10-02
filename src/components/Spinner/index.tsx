import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Spinner: React.FC<{ height: number }> = ({ height }) => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height={`${height}vh`}
            width="100%"
        >
            <CircularProgress />
        </Box>
    );
};
export default Spinner;
