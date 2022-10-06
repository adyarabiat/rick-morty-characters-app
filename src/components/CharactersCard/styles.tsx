import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

export const CardContainer = styled(Card)(({ theme }) => ({
    width: 300,
    height: 400,
    background: theme.palette.secondary.main,
    color: theme.palette.common.white,
    border: `3px solid ${theme.palette.primary.main}`,
})) as typeof Card;

type BackgroundColorProp = {
    backgroundColor: string;
};
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
        if (backgroundColor === 'dead') bg = theme.palette.error.dark;
        if (backgroundColor === 'dead') bg = theme.palette.error.dark;
        return {
            background: bg,
            color: theme.palette.common.white,
            height: 20,
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            padding: 15,
            fontSize: 17,
            position: 'absolute',
            top: 10,
            right: 20,
            borderRadius: 30,
            fontWeight: 'bold',
        };
    }
);
