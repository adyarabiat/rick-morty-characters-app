import { styled } from '@mui/material/styles';
import { default as PaginationSection } from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const StackContainer = styled(Stack)(() => ({
    margin: 20,
    padding: 20,
    display: 'flex',
    justifyContent: 'center',

    alignItems: 'center',
    ul: {
        '& .MuiPaginationItem-root': {
            // color: '#fff',
            fontSize: 17,
        },
    },
}));
export const PaginationStyle = styled(PaginationSection)(() => ({
    // color: '#fff',
}));
