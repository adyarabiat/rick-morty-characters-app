import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const CardContainer = styled(Card)({
    width: 300,
    height: 450,
    background: 'rgb(33, 33, 33)',
    color: '#fff',
    border: '1px solid #fff',
}) as typeof Card;

const Btn = styled(Button)({
    fontWeight: 'bold',
    width: '60%',
    background: red[500],
    '&:hover': {
        backgroundColor: red[100],
        color: '#010101',
    },
}) as typeof Button;

type BackgroundColorProp = {
    backgroundColor: string;
};
const Badge = styled('div')<BackgroundColorProp>(({ backgroundColor }) => ({
    background: backgroundColor,
    color: '#fff',
    height: 20,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 15,
    fontSize: 17,
    position: 'absolute',
    top: 10,
    right: 20,
    borderRadius: 30,
    fontWeight: 'bold',
}));

interface Props {
    characters: {
        id: string;
        status: string;
        image: string;
        name: string;
        species: string;
    }[];
}

const Cards: React.FC<Props> = ({ characters }) => {
    let history = useHistory();
    const onClickCharacter = (id: string) => {
        history.push(`/${id}`);
    };
    return (
        <>
            {characters.map((character) => (
                <Grid item xs={12} sm={6} md={4} lg={4} key={character?.id}>
                    <Box
                        width="100%"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <CardContainer>
                            <div style={{ position: 'relative' }}>
                                {(() => {
                                    if (character?.status === 'Dead') {
                                        return (
                                            <Badge backgroundColor="#ff0000">
                                                {character?.status}
                                            </Badge>
                                        );
                                    } else if (character?.status === 'Alive') {
                                        return (
                                            <Badge backgroundColor="#007500">
                                                {character?.status}
                                            </Badge>
                                        );
                                    } else {
                                        return (
                                            <Badge backgroundColor="#808080">
                                                {character?.status}
                                            </Badge>
                                        );
                                    }
                                })()}
                                <CardMedia
                                    component="img"
                                    height={250}
                                    image={character?.image}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h6"
                                        component="div"
                                    >
                                        {character?.name}
                                    </Typography>

                                    <Typography variant="body2" color="#D3D3D3">
                                        Species
                                    </Typography>
                                    <Typography
                                        gutterBottom
                                        variant="h6"
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
};

export default Cards;
