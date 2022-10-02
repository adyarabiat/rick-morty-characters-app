import Box from '@mui/material/Box';
import { Text } from './styles';
import { MainStateType } from '../../redux';
import { useSelector } from 'react-redux';

export default function Error() {
    const errorMessage = useSelector<
        MainStateType,
        MainStateType['characters']['errorState']
    >(({ characters }) => characters.errorState);

    return (
        <Box marginTop={10}>
            <Text variant="h5">{errorMessage.message.message}!</Text>
        </Box>
    );
}
