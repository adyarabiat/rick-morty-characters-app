import { styled } from '@mui/material/styles';
import { Button, Card, CardActions, CardHeader } from '@mui/material';

type BackgroundColorProp = {
    backgroundColor: string;
};
export const CardContainer = styled(Card)(({ theme }) => ({
    maxWidth: 500,
    background: theme.palette.secondary.main,
    color: theme.palette.common.white,
    marginBottom: 20,
    borderRadius: 50,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
}));
export const CardHeaderCustom = styled(CardHeader)(({ theme }) => ({
    borderBottom: `1px solid ${theme.palette.common.white}`,
    color: theme.palette.common.white,
}));
export const CardActionsContainer = styled(CardActions)(({ theme }) => ({
    cursor: 'pointer',
    padding: 20,
}));

export const Badge = styled('div')<BackgroundColorProp>(
    ({ backgroundColor, theme }) => {
        let bg;
        if (backgroundColor === 'Dead') {
            bg = theme.palette.error.dark;
        } else if (backgroundColor === 'Alive') {
            bg = theme.palette.primary.main;
        } else {
            bg = theme.palette.grey[700];
        }
        return {
            background: bg,
            color: theme.palette.common.white,
            height: 35,
            display: 'flex',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 17,
            fontWeight: 'bold',
        };
    }
);
export const BackBtn = styled(Button)(({ theme }) => ({
    marginTop: 3,
    background: theme.palette.primary.main,
    fontWeight: 'bold',

    '&:hover': {
        backgroundColor: theme.palette.primary.light,
    },
}));
