import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const Text = styled(Typography)(({ theme }) => ({
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
    color: theme.palette.grey['500'],
}));
export const Span = styled('span')(({ theme }) => ({
    color: theme.palette.common.black,
}));
