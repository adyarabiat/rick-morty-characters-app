import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Logo from '../../assets/logo.png';
import { pageChangeAction, searchNameAction } from '../../redux/Actions';

const LogoImg = styled('img')(() => ({
    width: 200,
}));

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
            height="200px"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <IconButton size="large" onClick={onClickCharacter}>
                <LogoImg src={Logo} alt="logo" />
            </IconButton>
        </Box>
    );
}
