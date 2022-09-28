import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pageChangeAction } from '../../redux/Actions';
import { MainStateType } from '../../redux';
import { StackContainer, PaginationStyle } from './styles';

export default function Pagination() {
    const dispatch = useDispatch();

    const pageInfo = useSelector<
        MainStateType,
        MainStateType['characters']['pageInfo']
    >(({ characters }) => characters.pageInfo);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(pageChangeAction(value));
    };

    return (
        <StackContainer spacing={6}>
            <PaginationStyle
                count={pageInfo.pages || 0}
                variant="outlined"
                page={pageInfo.page || 0}
                onChange={handleChange}
                color="primary"
            />
        </StackContainer>
    );
}
