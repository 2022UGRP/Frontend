import React, {useState} from 'react';
import { OutlinedInput, CircularProgress, Link, IconButton, Input, InputLabel, InputAdornment, FormControl, Button, Grid} from '@mui/material';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import logo from 'img/logo.png';

const theme = createTheme({
    palette: {
      secondary: { main: '#A4A4A4'},
      warning: { main: '#D34658'}
    },
  });

const Signinform = (props) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ThemeProvider theme={theme}>
    <Grid container justifyContent='center'>
        {!props.checking ?
        <Grid xs={12} sm={9} md={6} lg={4.8} xl={3.5} className='login_div'>
        <img src={logo} alt='logo'/>
        <h1>로그인</h1>

        <input 
            type='email' 
            name='email'
            placeholder='이메일을 입력해 주세요' 
            value={props.login.email}
            onChange={props.handleChangeLogin}
        />
        <input 
            type={showPassword ? 'text' : 'password'} 
            name='password' 
            placeholder='비밀번호를 입력해 주세요' 
            value={props.login.password}
            onChange={props.handleChangeLogin}
        />

        <Button color='warning' className='login_button' variant="outlined" disabled={props.login.email && props.login.password ?false:true} onClick={props.handleClickLogin}>로그인</Button>
        <p>아직 회원이 아니신가요? <Link onClick={()=>{navigate('/signup')}}>회원가입</Link></p>
        </Grid>:
        <Grid xs={12} sm={9} md={6} lg={4.8} xl={3.5} className='login_div'>
        <img src={logo} alt='logo'/>
        <p>로그인</p>
        <CircularProgress color='warning'/><br/><br/>
        <span>잠시만 기다려주세요</span>
        </Grid>}
    </Grid>
    {/* <div style={{justifyContent: 'center', alignItems: 'center'}}>
        <div style={{width: "300px"}}>
        <Grid className="login_container" container direction="column" justifyContent="center" alignItems="center" height="60vh">
            <Grid item>
                <h2>로그인</h2>
                <br></br>
            </Grid>
            <Grid item>
                <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
                <Input
                    id="standard-adornment-Id"
                    value={props.login.email}
                    name='email'
                    onChange={props.handleChangeLogin}
                />
                </FormControl>
            </Grid>
            <Grid item>
                <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                    id="standard-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    value={props.login.password}
                    name='password'
                    onChange={props.handleChangeLogin}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                />
                </FormControl>
            </Grid> 
            <Grid item><br></br><br></br><br></br><br></br></Grid>
            <Grid item>
                <Button variant="outlined" disabled={props.login.email && props.login.password ?false:true} onClick={props.handleClickLogin}>Login</Button>
                <Button variant="outlined" onClick={()=>{navigate('/signup')}}>
                Sign Up
                </Button> 
            </Grid>
        </Grid>
        </div>
    </div> */}
    </ThemeProvider>
  )
};

export default Signinform;