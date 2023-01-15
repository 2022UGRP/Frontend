import React from 'react'
import { Grid, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { height } from '@mui/system';

const theme = createTheme({
    palette: {
      secondary: { main: '#A4A4A4'},
      warning: { main: '#D34658'}
    },
});

const Mypagemainform = (props) => {
    const navigate = useNavigate();
    const [cookies, , removeCookies] = useCookies(['loginkey', 'name', 'age', 'school', 'major', 'portfoliokey', 'image']);

    const date2str = (d) => {
        const date = new Date(d);
        const yy = date.getFullYear();
        const mm = date.getMonth() + 1;
        const dd = date.getDate();

        return yy + '-' + mm + '-' + dd;
    };

    return (
        <ThemeProvider theme={theme}>
            <section className='mypagemain1'>
                <Grid container justifyContent='center' alignItems='center' spacing={2}>
                    <Grid item xs={12} md={4} lg={3} textAlign='center'>
                        <div style={{textAlign: 'left'}}>
                            <img src={cookies.image} className="mainimg components" alt="lowlogo" />
                        </div>
                    </Grid>
                    <Grid item className="profile" xs={12} sm={10} md={6} lg={5}> 
                        <h2 style={{fontSize: '30px'}}>{cookies.name} 님</h2>
                        <div>나이: {cookies.age}세 </div>
                        <div>최종학력: {cookies.school} / {cookies.major} 전공</div>
                        <div>최근 NFT 발행: 날짜 넣기</div>
                        <br></br>
                        <Button color='warning' variant="outlined" style={{marginTop: '15px', height: '32px', width: '180px', fontWeight: '500', fontSize: '14px'}} onClick={() => { navigate('/mypage/detail') }}>포트폴리오 상세보기</Button>
                        {/* <Button color='warning' variant="contained" style={{marginTop: '15px', height: '32px', width: '180px', fontWeight: '500', fontSize: '14px'}} onClick={() => { navigate('/mypage/detail') }}>포트폴리오 상세보기</Button> */}
                    </Grid>
                </Grid>
            </section>
            <section className='mypagemain2'>
                <Grid container justifyContent='center' spacing={2}>
                     <Grid item justifyContent='center' xs={12} md={5} lg={4}>
                        <div className='mypagemain2_container'>
                            <h2 style={{fontSize: '24px'}}>판매 이력</h2>
                            {props.RequestsDatas.map((item, index) => (
                                <div>{index+1}. {date2str(item.CreatedAt)} 판매
                                { (item.State===1)
                                ? <Button color='warning' variant="contained" style={{height: '32px', width: '100px', fontWeight: '500', fontSize: '14px'}} onClick={() => props.handleApprove(item.RequestAddress, item.NFTtokenId, item.User_id)}>판매 승인</Button>
                                : <Button disabled color='warning' variant="contained" style={{height: '32px', width: '100px', fontWeight: '500', fontSize: '14px'}} onClick={() => { }}>판매 완료</Button>}
                                </div>
                            ))}
                        </div>
                    </Grid>
                    <Grid item justifyContent='center' xs={12} md={5} lg={4}>
                        <div className='mypagemain2_container'>
                            <h2 style={{fontSize: '24px'}}>구매 이력</h2>
                            {props.PurchasesDatas.map((item, index) => (
                                <div>{index+1}. {date2str(item.CreatedAt)} 구매
                                { (item.State===1)
                                ? <Button disabled color='warning' variant="contained" style={{height: '32px', width: '120px', fontWeight: '500', fontSize: '14px'}} onClick={() => { }}>승인 대기중</Button>
                                : <Button color='warning' variant="contained" style={{height: '32px', width: '120px', fontWeight: '500', fontSize: '14px'}} onClick={()=>navigate(`/mypage/NFTview/${item.Portfolio_id}`)}>열람</Button>}
                                </div>
                            ))}
                        </div>
                    </Grid>
                </Grid>
            </section>
        </ThemeProvider>
        // <div>
        //     <div style={{ width: '100%' }}>
        //         <Box
        //             component="span"
        //             sx={{
        //                 display: 'block',
        //                 p: 1,
        //                 m: 1,
        //                 bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        //                 color: (theme) =>
        //                     theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
        //                 border: '1px solid',
        //                 borderColor: (theme) =>
        //                     theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        //                 borderRadius: 2,
        //                 fontSize: '0.875rem',
        //                 fontWeight: '700',
        //             }}
        //         >
        //             <div className="box">
        //                 <img src={cookies.image} className="mainimg components" alt="lowlogo" />
        //                 <h2 className="components">{cookies.name}</h2>
        //                 <div className="components">나이: {cookies.age}세, 최종학력: {cookies.school} / {cookies.major}</div>
        //                 <Button variant="outlined" className="components" style={{marginTop: '15px'}} onClick={() => { navigate('/mypage/detail') }}>포트폴리오 상세보기</Button>
        //             </div>
        //         </Box>
        //     </div>

        //     <div className="underBox">
        //         <Box
        //             component="span"
        //             sx={{
        //                 p: 1,
        //                 m: 1,
        //                 bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        //                 color: (theme) =>
        //                     theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
        //                 border: '1px solid',
        //                 borderColor: (theme) =>
        //                     theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        //                 borderRadius: 2,
        //                 fontSize: '0.875rem',
        //                 fontWeight: '700',
        //             }}
        //             style={{width: '50%', padding: '20px'}}
        //         >
        //             <h3 className="components">구매이력</h3>
        //             <div className="components">1. 2022-07-21 구매</div>
        //             <div className="components">2. 2022-07-21 구매</div>
        //         </Box>
        //         <Box
        //             component="span"
        //             sx={{
        //                 p: 1,
        //                 m: 1,
        //                 bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        //                 color: (theme) =>
        //                     theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
        //                 border: '1px solid',
        //                 borderColor: (theme) =>
        //                     theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        //                 borderRadius: 2,
        //                 fontSize: '0.875rem',
        //                 fontWeight: '700',
        //             }}
        //             style={{width: '50%', padding: '20px'}}
        //         >
        //             <h3 className="components">판매이력</h3>
        //             <div className="components">1. 2022-07-21 판매</div>
        //             <div className="components">2. 2022-07-21 판매</div>
        //         </Box>
        //     </div>
        // </div>
    )
}

export default Mypagemainform;