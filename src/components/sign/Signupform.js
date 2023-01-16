import React, { useState } from "react";
import { Grid, Box, Button, FormGroup, Checkbox, FormControl, InputLabel, OutlinedInput, Link } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import logo from 'img/logo.png';

const theme = createTheme({
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#A4A4A4',
          '&.Mui-checked': {
            color: '#D34658'
          }
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: '#757575',
          backgroundColor: '#FFFFFF',
          '&.Mui-focused': {
            color: '#D34658'
          }
        }
      }
    }
  },
  palette: {
    secondary: { main: '#757575' },
    warning: { main: '#D34658' }
  },
});

const Signupform = (props) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [showPasswordCheck, setShowPasswordCheck] = useState(false);
  const handleClickShowPasswordCheck = () => {
    setShowPasswordCheck(!showPasswordCheck);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent='center'>
        <Grid xs={12} sm={9} md={6} lg={4.8} xl={3.5} className='signup_div'>
          <img src={logo} alt='logo' />
          <h1>회원가입</h1>

          <FormControl sx={{ width: '75%', marginRight: '0%', marginBottom: '16px' }}>
            <InputLabel shrink>이메일</InputLabel>
            <OutlinedInput className='signup_input'
              sx={{ height: '48px' }}
              color='warning'
              label='이메일'
              type='email'
              name='email'
              placeholder='이메일을 입력해 주세요'
              value={props.signup.email}
              onChange={props.handleChangeSignup}
            />
          </FormControl>
          <FormControl sx={{ width: '75%', marginRight: '0%', marginBottom: '16px' }}>
            <InputLabel shrink>비밀번호</InputLabel>
            <OutlinedInput className='signup_input'
              sx={{ height: '48px' }}
              color='warning'
              label='비밀번호'
              type={showPassword ? 'text' : 'password'}
              name='password'
              placeholder='비밀번호를 입력해 주세요'
              value={props.signup.password}
              onChange={props.handleChangeSignup}
            />
          </FormControl>
          <FormControl sx={{ width: '75%', marginRight: '0%', marginBottom: '16px' }}>
            <InputLabel shrink>비밀번호 확인</InputLabel>
            <OutlinedInput className='signup_input'
              sx={{ height: '48px' }}
              color='warning'
              label='비밀번호 확인'
              type={showPasswordCheck ? 'text' : 'password'}
              name='passwordCheck'
              placeholder='비밀번호를 한번 더 입력해 주세요'
              value={props.signup.passwordCheck}
              onChange={props.handleChangeSignup}
            />
          </FormControl>
          <FormControl sx={{ width: '75%', marginRight: '0%', marginBottom: '16px' }}>
            <InputLabel shrink>이름</InputLabel>
            <OutlinedInput className='signup_input'
              sx={{ height: '48px' }}
              color='warning'
              label='이름'
              type='text'
              name='name'
              placeholder='이름을 입력해 주세요'
              value={props.signup.name}
              onChange={props.handleChangeSignup}
            />
          </FormControl>
          <FormControl sx={{ width: '75%', marginRight: '0%', marginBottom: '16px' }}>
            <InputLabel shrink>전화번호</InputLabel>
            <OutlinedInput className='signup_input'
              sx={{ height: '48px' }}
              color='warning'
              label='전화번호'
              type='tel'
              name='phoneNumber'
              placeholder='전화번호를 입력해 주세요'
              value={props.signup.phoneNumber}
              onChange={props.handleChangeSignup}
            />
          </FormControl>
          <FormControl sx={{ width: '75%', marginRight: '0%', marginBottom: '16px' }}>
            <InputLabel shrink>학교</InputLabel>
            <OutlinedInput className='signup_input'
              sx={{ height: '48px' }}
              color='warning'
              label='학교'
              type='text'
              name='school'
              placeholder='학교(최종학력)를 입력해 주세요'
              value={props.signup.school}
              onChange={props.handleChangeSignup}
            />
          </FormControl>
          <FormControl sx={{ width: '75%', marginRight: '0%', marginBottom: '16px' }}>
            <InputLabel shrink>전공</InputLabel>
            <OutlinedInput className='signup_input'
              sx={{ height: '48px' }}
              color='warning'
              label='전공'
              type='text'
              name='major'
              placeholder='전공을 입력해 주세요'
              value={props.signup.major}
              onChange={props.handleChangeSignup}
            />
          </FormControl>
          <FormControl sx={{ width: '75%', marginRight: '0%', marginBottom: '16px' }}>
            <InputLabel shrink>나이</InputLabel>
            <OutlinedInput className='signup_input'
              sx={{ height: '48px' }}
              color='warning'
              label='나이'
              type='number'
              name='age'
              placeholder='나이를 입력해 주세요'
              value={props.signup.age}
              onChange={props.handleChangeSignup}
            />
          </FormControl>
          <div style={{ width: '75%', textAlign: 'left', marginLeft: '15%', fontSize: '15px' }}>
            <div>
              <Checkbox checked={props.checked.all} onClick={props.handleClickCheckAll} />
              모두 동의합니다
            </div>
            <div>
              <Checkbox checked={props.checked.agree1} name="agree1" onClick={props.handleClickChecked} sx={{ ml: 1 }} />
              <Link href='/term' target='_blank'>이용약관</Link>에 동의합니다
            </div>
            <div>
              <Checkbox checked={props.checked.agree2} name="agree2" onClick={props.handleClickChecked} sx={{ ml: 1 }} />
              <Link href='/privacy' target='_blank'>개인정보 처리방침</Link>에 동의합니다
            </div>
          </div>
          <Button color='warning' variant="outlined" disabled={props.state} onClick={props.handleClickSignUp}>회원가입</Button>
        </Grid>
      </Grid>
      {/* <Grid className="login_container" container direction="column" justifyContent="center" alignItems="center" width="30vw" height="70vh">
        <Grid item>
            <h2>회원가입</h2>
        </Grid>
        <Grid item>
            <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="standard-adornment-Email">Email</InputLabel>
                <Input
                    id="standard-adornment-Email"
                    value={props.signup.email}
                    name='email'
                    onChange={props.handleChangeSignup}
                />
            </FormControl>
        </Grid>
        <Grid item>
            <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                    id="standard-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    value={props.signup.password}
                    name='password'
                    onChange={props.handleChangeSignup}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword}>
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        </Grid>
        <Grid item>
            <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="standard-adornment-password Check">Password Check</InputLabel>
                <Input
                    id="standard-adornment-password Check"
                    type={showPasswordCheck ? 'text' : 'password'}
                    value={props.signup.passwordCheck}
                    name='passwordCheck'
                    onChange={props.handleChangeSignup}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton aria-label="toggle password Check visibility" onClick={handleClickShowPasswordCheck}>
                                {showPasswordCheck ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        </Grid>
        <Grid item>
            <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="standard-adornment-Name">Name</InputLabel>
                <Input
                    id="standard-adornment-Name"
                    value={props.signup.name}
                    name='name'
                    onChange={props.handleChangeSignup}
                />
            </FormControl>
        </Grid>
        <Grid item>
            <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="standard-adornment-Phone number">Phone number</InputLabel>
                <Input
                    id="standard-adornment-Phone number"
                    value={props.signup.phoneNumber}
                    name='phoneNumber'
                    onChange={props.handleChangeSignup}
                />
            </FormControl>
        </Grid>
        <Grid item>
            <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="standard-adornment-School">School</InputLabel>
                <Input
                    id="standard-adornment-School"
                    value={props.signup.school}
                    name='school'
                    onChange={props.handleChangeSignup}
                />
            </FormControl>
        </Grid>
        <Grid item>
            <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="standard-adornment-Major">Major</InputLabel>
                <Input
                    id="standard-adornment-Major"
                    value={props.signup.major}
                    name='major'
                    onChange={props.handleChangeSignup}
                />
            </FormControl>
        </Grid>
        <Grid item>
            <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="standard-adornment-Age">Age</InputLabel>
                <Input
                    id="standard-adornment-Age"
                    value={props.signup.age}
                    name='age'
                    onChange={props.handleChangeSignup}
                />
            </FormControl>
        </Grid>
        <br></br>
        <Grid item>
            <FormGroup>
                <FormControlLabel control={<Checkbox checked={props.checked.all} />} label="전체 선택" onClick={props.handleClickCheckAll} />
                <FormControlLabel control={<Checkbox checked={props.checked.agree1} />} label="약관 동의" name="agree1" onClick={props.handleClickChecked} />
                <FormControlLabel control={<Checkbox checked={props.checked.agree2} />} label="개인정보처리방침" name="agree2" onClick={props.handleClickChecked} />
            </FormGroup>
        </Grid>
        <Grid item> 
            <Button variant="outlined" disabled={props.state} onClick={props.handleClickSignUp}>
                Sign up
            </Button>
        </Grid>
    </Grid> */}
    </ThemeProvider>
  )
};

export default Signupform;