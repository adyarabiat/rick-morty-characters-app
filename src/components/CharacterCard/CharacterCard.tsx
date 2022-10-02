import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
    Box,
    Grid,
    Typography,
    CardContent,
    CardMedia,
    CardHeader,
    Collapse,
    Avatar,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TransgenderIcon from '@mui/icons-material/Transgender';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CategoryIcon from '@mui/icons-material/Category';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
    ExpandMore,
    Badge,
    BackBtn,
    CardContainer,
    CardActionsContainer,
} from './styles';
import { MainStateType } from '../../redux';
import { common } from '@mui/material/colors';
import theme from '../../theme';

export default function CharacterCard() {
    const history = useHistory();
    const [expanded, setExpanded] = useState(false);
    const character = useSelector<
        MainStateType,
        MainStateType['characters']['character']
    >(({ characters }) => characters.character);
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
            id: 5,
            label: 'Origin',
            value: origin?.name,
            icon: <PersonPinCircleIcon style={{ marginRight: 5 }} />,
        },
        {
            id: 4,
            label: 'Location',
            value: location?.name,
            icon: <LocationOnIcon style={{ marginRight: 5 }} />,
        },
        {
            id: 6,
            label: 'Type',
            value: type,
            icon: <CategoryIcon style={{ marginRight: 5 }} />,
        },
    ];
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                width="100%"
                marginTop={10}
            >
                <Box
                    margin="auto"
                    display="flex"
                    justifyContent="center"
                    marginTop={3}
                    marginBottom={3}
                >
                    <BackBtn
                        startIcon={<ArrowBackIcon />}
                        variant="contained"
                        onClick={() => history.goBack()}
                    >
                        Back
                    </BackBtn>
                </Box>
                <CardContainer>
                    <Badge backgroundColor={status}>
                        <Typography style={{ fontWeight: 'bold' }}>
                            {status}
                        </Typography>
                    </Badge>
                    <CardHeader
                        style={{
                            color: common.white,
                            borderBottom: '1px solid #010',
                        }}
                        avatar={
                            <Avatar
                                src={image}
                                sx={{
                                    bgcolor: theme.palette.primary.main,
                                    width: 150,
                                    height: 150,
                                }}
                                aria-label="profile"
                            >
                                {name?.split('')[0]?.toUpperCase()}
                            </Avatar>
                        }
                        title={
                            <Typography
                                variant="h4"
                                style={{
                                    color: common.white,
                                }}
                            >
                                {name}
                            </Typography>
                        }
                        subheader={
                            <Typography>
                                {created?.split('T')[0] || '-'}
                            </Typography>
                        }
                    />

                    <CardContent>
                        <Grid container spacing={2} overflow="hidden">
                            {charData?.map((el) => {
                                return (
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        md={6}
                                        lg={6}
                                        key={el.id}
                                    >
                                        <Box display="flex">
                                            {el.icon}
                                            <Box>
                                                <Typography
                                                    variant="body2"
                                                    // color="gray"
                                                >
                                                    {el.label}
                                                </Typography>
                                                <Typography
                                                    gutterBottom
                                                    variant="h6"
                                                    component="div"
                                                    style={{
                                                        color: common.white,
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
                    {/* <CardActionsContainer
                        disableSpacing
                        onClick={handleExpandClick}
                    >
                        <Typography
                            paragraph
                            variant="h6"
                            margin={1}
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
                                fontSize="large"
                                style={{
                                    color: common.white,
                                }}
                            />
                        </ExpandMore>
                    </CardActionsContainer>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            {episode?.map((ep, i) => {
                                return (
                                    <Typography
                                        marginLeft={2}
                                        paragraph
                                        key={ep?.name}
                                    >
                                        {i + 1}- {ep?.name}
                                    </Typography>
                                );
                            })}
                        </CardContent>
                    </Collapse> */}
                </CardContainer>
            </Box>
        </>
    );
}
