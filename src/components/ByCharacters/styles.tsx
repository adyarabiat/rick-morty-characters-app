import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';

export const TextBox = styled(TextField)(({ theme }) => ({
    width: '100%',
}));

export const Text = styled(Typography)(({ theme }) => ({
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
    color: theme.palette.grey['500'],
}));

export const ResetBtn = styled(Button)(({ theme }) => ({
    color: theme.palette.common.white,
}));
