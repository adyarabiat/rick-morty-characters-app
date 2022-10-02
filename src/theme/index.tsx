import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            light: 'rgb(130, 203, 166)',
            dark: 'rgb(32, 50, 41)',
            main: 'rgb(39, 175, 107)',
        },
        secondary: {
            main: '#12243c',
            light: '#094089',
        },
    },
    typography: {
        fontFamily: [
            'Helvetica Neue',
            'Nunito',
            'Roboto',
            'Arial',
            'sans-serif',
        ].join(','),
    },
});

export default theme;
