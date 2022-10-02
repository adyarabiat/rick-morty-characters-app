import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Header() {
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav">
                <Toolbar>
                    <Box
                        width="100%"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        textAlign="center"
                    >
                        <Typography color="#fff" variant="h6" noWrap>
                            <span
                                style={{
                                    color: '#12243c',
                                    fontSize: 30,
                                }}
                            >
                                Rick{' '}
                            </span>
                            And{' '}
                            <span
                                style={{
                                    color: '#12243c',
                                    fontSize: 30,
                                }}
                            >
                                Morty
                            </span>{' '}
                            Charcters
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
