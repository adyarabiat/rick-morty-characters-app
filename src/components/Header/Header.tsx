import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Text, Span } from './styles';

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
                        <Text variant="h6" noWrap>
                            <Span>Rick </Span>
                            And <Span>Morty</Span> Charcters
                        </Text>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
