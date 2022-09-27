import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pageChangeAction } from '../../redux/Actions';
import { PaginationInfoType } from '../../redux';
import { StackContainer, PaginationStyle } from './styles';

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
