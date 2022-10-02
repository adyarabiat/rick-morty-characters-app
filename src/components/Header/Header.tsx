import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Logo from '../../assets/logo.png';
import { LogoImg } from './styles';
import { pageChangeAction, searchNameAction } from '../../redux/Actions';

export default function Header() {
    const dispatch = useDispatch();
    let history = useHistory();
    const onClickCharacter = () => {
        dispatch(pageChangeAction(1));
        dispatch(searchNameAction(''));
        history.push(`/`);
    };
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav">
                <Toolbar>
                    <Box
                        width="100%"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <IconButton size="small" onClick={onClickCharacter}>
                            <LogoImg src={Logo} alt="logo" />
                        </IconButton>
                        <Typography color="#fff" variant="h6" noWrap>
                            <span
                                style={{
                                    color: '#12243c',
                                    fontSize: 30,
                                }}
                            >
                                Rick{' '}
                            </span>
                            And{' '}
                            <span
                                style={{
                                    color: '#12243c',
                                    fontSize: 30,
                                }}
                            >
                                Morty
                            </span>{' '}
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
