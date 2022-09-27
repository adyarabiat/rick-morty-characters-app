import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Button } from '@mui/material';

export const Text = styled(Typography)(() => ({
    width: '100%',
    textAlign: 'center',
    marginTop: 25,
}));
export const BackBtn = styled(Button)(({ theme }) => ({
    marginTop: 3,
    background: theme.palette.primary.main,
    fontWeight: 'bold',
    '&:hover': {
        backgroundColor: theme.palette.primary.light,
    },
}));
