import { Text } from './styles';
import { Box } from '@mui/material';

export default function NoCharacterFound() {
    return (
        <Box
            maxWidth={500}
            margin="auto"
            display="flex"
            justifyContent="center"
            marginTop={3}
            marginBottom={5}
        >
            <Text variant="h5">No character found</Text>
        </Box>
    );
}
