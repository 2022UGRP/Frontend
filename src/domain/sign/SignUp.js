import React, { useState, useEffect } from "react";
import { Signupform } from '../../components/sign';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';

const SignUp = () => {
    const [cookies, setCookie,] = useCookies(['loginkey']);
    const navigate = useNavigate();
    const [signup, setSignup] = useState({
        email: '',
        name: '',
        phoneNumber: '',
        password: '',
        passwordCheck: '',
        school: '',
        major: '',
        age: '',
    });
    const [checked, setChecked] = useState({ all: false, agree1: false, agree2: false });
    const [state, setState] = useState(true);
    useEffect(() => {
        if (signup.password === signup.passwordCheck
            && checked.agree1
            && checked.agree2
            && signup.email
            && signup.name
            && signup.school
            && signup.major
            && signup.password
            && signup.phoneNumber
            && signup.age) {
            setState(false);
        } else {
            setState(true);
        }
    }, [signup, checked]);

    const handleClickCheckAll = () => {
        let check = { ...checked };
        if (check.all) {
            setChecked({ all: false, agree1: false, agree2: false });
        } else {
            setChecked({ all: true, agree1: true, agree2: true });
        }
    };

    const handleClickChecked = (event) => {
        let check = { ...checked };
        check[event.target.name] = !checked[event.target.name];
        setChecked(check);
    };
    const handleChangeSignup = (event) => {
        let changeSignup = { ...signup };
        changeSignup[event.target.name] = event.target.value;
        setSignup(changeSignup);
    };
    const handleClickSignUp = async () => {
        const formData = new FormData();
        formData.append('email', signup.email);
        formData.append('name', signup.name);
        formData.append('phoneNumber', signup.phoneNumber);
        formData.append('password', signup.password);
        formData.append('school', signup.school);
        formData.append('major', signup.major);
        formData.append('age', Number(signup.age));

        const config = {
            headers: {
                "content-type": "multipart/form-data"
            }
        }

        await axios.post("/api/users/signup", formData, config)
            .then(async (res) => {
                console.log(res);
                setCookie("loginkey", res.data.Id, { path: '/' });
                setCookie("name", res.data.Name, { path: '/' });
                setCookie("age", res.data.Age, { path: '/' });
                setCookie("school", res.data.School, { path: '/' });
                setCookie("major", res.data.Major, { path: '/' });
                navigate('/main');

                await axios({
                    method: 'post',
                    url: `/api/portfolio/${res.data.Id}`,
                })
                    .then(async (response) => {
                        console.log(response);
                        await axios.put(`/api/nft/default/${response.data.Id}`)
                            .then(res => {
                                setCookie('image', res.data.image);
                                setCookie("portfoliokey", response.data.Id, { path: '/' });
                            })
                    })
                    .catch((Error)=>{
                        console.log(Error);
                    })
            }).catch((Error) => {
                console.log(Error);
            })
    };
    return (
        <Signupform
            signup={signup}
            checked={checked}
            state={state}
            handleChangeSignup={handleChangeSignup}
            handleClickSignUp={handleClickSignUp}
            handleClickCheckAll={handleClickCheckAll}
            handleClickChecked={handleClickChecked}
        />
    )
};

export default SignUp;