import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Text = styled(Typography)(({ theme }) => ({
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
    color: theme.palette.error.main,
}));
