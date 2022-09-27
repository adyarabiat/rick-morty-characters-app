import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { Button, Card, CardActions } from '@mui/material';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}
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
export const CardActionsContainer = styled(CardActions)(({ theme }) => ({
    cursor: 'pointer',
    padding: 20,
}));

export const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
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
