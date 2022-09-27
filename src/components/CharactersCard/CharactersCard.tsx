import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { CardContainer, Btn, Badge } from './styles';
import { MainStateType } from '../../redux';

export default function CharactersCard() {
    let history = useHistory();

    const characters = useSelector<
        MainStateType,
        MainStateType['characters']['characters']
    >(({ characters }) => characters.characters);

    const onClickCharacter = (id: string) => {
        history.push(`/character/${id}`);
    };
    return (
        <>
            {characters?.map((character) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={character?.id}>
                    <Box
                        width="100%"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <CardContainer>
                            <div style={{ position: 'relative' }}>
                                <Badge backgroundColor={character?.status}>
                                    {character?.status}
                                </Badge>
                                <CardMedia
                                    component="img"
                                    height={250}
                                    image={character?.image}
                                    alt="profile-image"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h6"
                                        component="div"
                                    >
                                        {character?.name}
                                    </Typography>
                                    <Typography variant="body2" color="gray">
                                        Species
                                    </Typography>
                                    <Typography
                                        gutterBottom
                                        variant="subtitle2"
                                        component="div"
                                    >
                                        {character?.species}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Box
                                        display="flex"
                                        justifyContent="center"
                                        width="100%"
                                    >
                                        <Btn
                                            variant="contained"
                                            size="small"
                                            onClick={() =>
                                                onClickCharacter(character?.id)
                                            }
                                        >
                                            View Details
                                        </Btn>
                                    </Box>
                                </CardActions>
                            </div>
                        </CardContainer>
                    </Box>
                </Grid>
            ))}
        </>
    );
}
