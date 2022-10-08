import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pageChangeAction } from '../../redux/Actions/Actions';
import { Grid } from '@mui/material';
import { MainStateType } from '../../redux';
import { default as PaginationSection } from '@mui/material/Pagination';
import { StackContainer } from './styles';

export default function Pagination() {
    const dispatch = useDispatch();

    const { pageInfo, characters, getBy } = useSelector<
        MainStateType,
        MainStateType['characters']
    >(({ characters }) => characters);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(pageChangeAction(value));
    };

    return (
        <Grid item xs={12} sm={12} md={12} lg={12}>
            {getBy === 'characters' && characters.length !== 0 && (
                <StackContainer spacing={6}>
                    <PaginationSection
                        count={pageInfo.pages || 0}
                        variant="outlined"
                        page={pageInfo.page || 0}
                        onChange={handleChange}
                        color="primary"
                    />
                </StackContainer>
            )}
        </Grid>
    );
}
