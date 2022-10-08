import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const LogoImg = styled('img')(() => ({
    width: 60,
}));
export const Text = styled(Typography)(({ theme }) => ({
    color: theme.palette.common.white,
}));
export const Span = styled('span')(({ theme }) => ({
    color: theme.palette.secondary.main,
    fontSize: 30,
    fontWeight: 'bold',
}));
