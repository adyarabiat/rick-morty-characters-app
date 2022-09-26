import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import {
    Box,
    Grid,
    Typography,
    Card,
    CardContent,
    CardMedia,
    CardHeader,
    CardActions,
    Collapse,
    Avatar,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TransgenderIcon from '@mui/icons-material/Transgender';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CategoryIcon from '@mui/icons-material/Category';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

import Error from '../components/Error/Error';
import Spinner from '../components/Spinner/Spinner';
import useCharacter from '../graphql/hooks/useCharacter';
import { getCharacterAction } from '../redux/Actions';
import { MainStateType } from '../redux';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}
const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
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
    right: 10,
    borderRadius: 30,
    fontWeight: 'bold',
}));
const IButton = styled(IconButton)(() => ({
    color: '#fff',
    background: red[500],
    '&:hover': {
        backgroundColor: red[100],
        color: '#010101',
    },
}));
export default function Character() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [statusColor, setStatusColor] = useState('');
    const [expanded, setExpanded] = useState(false);

    const character = useSelector<
        MainStateType,
        MainStateType['characters']['character']
    >(({ characters }) => characters.character);

    const { data, error, loading } = useCharacter(id);
    const {
        image,
        name,
        gender,
        created,
        species,
        location,
        status,
        type,
        origin,
        episode,
    } = character;

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (data) dispatch(getCharacterAction(data?.character));
    }, [data, dispatch]);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    let charData = [
        {
            id: 1,
            label: 'Gender',
            value: gender,
            icon: <TransgenderIcon style={{ marginRight: 5 }} />,
        },
        {
            id: 2,
            label: 'Species',
            value: species,
            icon: <AccountCircleIcon style={{ marginRight: 5 }} />,
        },
        {
            id: 4,
            label: 'Location',
            value: location?.name,
            icon: <LocationOnIcon style={{ marginRight: 5 }} />,
        },
        {
            id: 5,
            label: 'Origin',
            value: origin?.name,
            icon: <PersonPinCircleIcon style={{ marginRight: 5 }} />,
        },
        {
            id: 6,
            label: 'Type',
            value: type,
            icon: <CategoryIcon style={{ marginRight: 5 }} />,
        },
    ];

    useEffect(() => {
        if (status === 'Dead') {
            setStatusColor('#ff0000');
            return;
        }
        if (status === 'Alive') {
            setStatusColor('#007500');
            return;
        }
        if (status === 'unknown') {
            setStatusColor('#808080');
            return;
        }
        setStatusColor('#fff');
    }, [status]);

    if (loading) return <Spinner />;
    if (error) return <Error />;
    return (
        <>
            <Box
                maxWidth={500}
                margin="auto"
                display="flex"
                justifyContent="center"
            >
                <IButton aria-label="back" onClick={() => history.goBack()}>
                    <KeyboardBackspaceIcon />
                </IButton>
            </Box>

            <Box display="flex" justifyContent="center">
                <Card
                    sx={{
                        maxWidth: 500,
                        background: 'rgb(33, 33, 33)',
                        color: '#fff',
                        marginBottom: 20,
                        border: '1px solid #515151',
                        marginTop: 5,
                        marginLeft: 5,
                        marginRight: 5,
                    }}
                >
                    <CardHeader
                        style={{
                            color: '#fff',
                        }}
                        avatar={
                            <Avatar
                                sx={{ bgcolor: red[500] }}
                                aria-label="recipe"
                            >
                                {name?.split('')[0]?.toUpperCase()}
                            </Avatar>
                        }
                        action={
                            <div style={{ position: 'relative' }}>
                                <Badge backgroundColor={statusColor}>
                                    {character?.status}
                                </Badge>
                            </div>
                        }
                        title={
                            <Typography
                                variant="h5"
                                style={{
                                    color: '#fff',
                                }}
                            >
                                {name}
                            </Typography>
                        }
                        subheader={
                            <Typography
                                style={{
                                    color: '#D3D3D3',
                                }}
                            >
                                {created?.split('T')[0] || '-'}
                            </Typography>
                        }
                    />
                    <CardMedia
                        component="img"
                        height="400"
                        image={image}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Grid container spacing={2}>
                            {charData.map((el) => {
                                let titleColor = '#D3D3D3';
                                let textColor = '#fff';
                                let icon = el.icon;
                                return (
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        md={4}
                                        lg={4}
                                        key={el.id}
                                    >
                                        <Box width="100%" display="flex">
                                            {icon}
                                            <Box>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                    style={{
                                                        color: titleColor,
                                                    }}
                                                >
                                                    {el.label}
                                                </Typography>
                                                <Typography
                                                    gutterBottom
                                                    variant="h6"
                                                    component="div"
                                                    style={{
                                                        color: textColor,
                                                    }}
                                                >
                                                    {el.value || '-'}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </CardContent>
                    <CardActions
                        disableSpacing
                        onClick={handleExpandClick}
                        style={{
                            cursor: 'pointer',
                            border: '1px solid #fff',
                        }}
                    >
                        <Typography
                            paragraph
                            style={{
                                fontSize: '21px',
                                cursor: 'pointer',
                                margin: 3,
                            }}
                            onClick={handleExpandClick}
                        >
                            Epsodes
                        </Typography>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon
                                style={{
                                    color: '#fff',
                                }}
                            />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            {episode?.map((ep, i) => {
                                return (
                                    <Typography paragraph key={ep?.name}>
                                        {i + 1}- {ep?.name}
                                    </Typography>
                                );
                            })}
                        </CardContent>
                    </Collapse>
                </Card>
            </Box>
        </>
    );
}
