import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Logo from '../../assets/logo.png';
import { pageChangeAction, searchNameAction } from '../../redux/Actions';
import { LogoImg } from './styles';

export default function Header() {
    const dispatch = useDispatch();
    let history = useHistory();

    const onClickCharacter = () => {
        dispatch(pageChangeAction(1));
        dispatch(searchNameAction(''));
        history.push(`/`);
    };
    return (
        <Box
            height="150px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginBottom={5}
            marginTop={5}
        >
            <IconButton size="medium" onClick={onClickCharacter}>
                <LogoImg src={Logo} alt="logo" />
            </IconButton>
        </Box>
    );
}
