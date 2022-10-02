import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
    Box,
    Grid,
    Typography,
    CardContent,
    CardHeader,
    Avatar,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Badge, BackBtn, CardContainer } from './styles';
import { MainStateType } from '../../redux';
import { common } from '@mui/material/colors';
import theme from '../../theme';

export default function CharacterCard() {
    const history = useHistory();

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
    } = character;

    let charData = [
        {
            id: 1,
            label: 'Gender',
            value: gender,
        },
        {
            id: 2,
            label: 'Species',
            value: species,
        },
        {
            id: 5,
            label: 'Origin',
            value: origin?.name,
        },
        {
            id: 4,
            label: 'Location',
            value: location?.name,
        },
        {
            id: 6,
            label: 'Type',
            value: type,
        },
    ];

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
                            Current Status {status}
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
                                            <Box>
                                                <Typography
                                                    color="primary"
                                                    variant="body2"
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
                </CardContainer>
            </Box>
        </>
    );
}
