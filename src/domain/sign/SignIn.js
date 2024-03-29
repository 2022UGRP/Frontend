import React, { useState } from 'react';
import { Signinform } from '../../components/sign';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useSnackbar } from 'notistack';

const SignIn = () => {
    const { enqueueSnackbar } = useSnackbar();

    const [cookies, setCookie,] = useCookies(['loginkey']);
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        email: '',
        password: ''
    });
    const handleChangeLogin = (event) => {
        let changeLogin = { ...login };
        changeLogin[event.target.name] = event.target.value;
        setLogin(changeLogin);
    };
    const handleClickLogin = async () => {
        const formData = new FormData();
        formData.append('email', login.email);
        formData.append('password', login.password);
        const config = {
            headers: {
                "content-type": "multipart.form-data"
            }
        }
        await axios.post("/api/users/login", formData, config).then((res) => {
            if (res.data.login === false) {
                enqueueSnackbar(`아이디/비밀번호를 다시 확인해주세요`, { variant: 'error' });
            }
            else if (res.data.login === true) {
                enqueueSnackbar('NFT-I에 로그인하신 것을 환영합니다', { variant: 'info' });
                setCookie("loginkey", res.data.Id, { path: '/' });
                setCookie("name", res.data.Name, { path: '/' });
                setCookie('age', res.data.Age, { path: '/' });
                setCookie('school', res.data.School, { path: '/' });
                setCookie('major', res.data.Major, { path: '/' });
                setCookie('image', res.data.Image, { path: '/' });
                setCookie("portfoliokey", res.data.Portfolio_id, { path: '/' });
                navigate('/main')
            }
        }).catch((Error) => {
            console.log(Error);
        })
    };

    return (
        <Signinform
            login={login}
            handleChangeLogin={handleChangeLogin}
            handleClickLogin={handleClickLogin}
        />
    )
};

export default SignIn;