import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import { default as PaginationSection } from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { pageChangeAction } from '../../redux/Actions';
import { PaginationInfoType } from '../../redux';

const StackContainer = styled(Stack)(() => ({
    margin: 20,
    padding: 20,
    display: 'flex',
    justifyContent: 'center',

    alignItems: 'center',
    ul: {
        '& .MuiPaginationItem-root': {
            color: '#fff',
            fontSize: 17,
        },
    },
}));
const PaginationStyle = styled(PaginationSection)(() => ({
    color: '#fff',
}));

export default function Pagination() {
    const dispatch = useDispatch();
    const page = useSelector<
        PaginationInfoType,
        PaginationInfoType['paginationInfo']['page']
    >(({ paginationInfo }) => paginationInfo.page);
    const pages = useSelector<
        PaginationInfoType,
        PaginationInfoType['paginationInfo']['pages']
    >(({ paginationInfo }) => paginationInfo.pages);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(pageChangeAction(value));
    };

    return (
        <StackContainer spacing={6}>
            <PaginationStyle
                count={pages || 0}
                variant="outlined"
                page={page || 0}
                onChange={handleChange}
                color="primary"
            />
        </StackContainer>
    );
}
