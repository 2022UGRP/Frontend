import React from 'react'
import { Box, Button } from '@mui/material';
import giraffe from "img/griaffe.png";
import { useNavigate } from 'react-router-dom';
import Aftertopfixed from 'components/fixed/Aftertopfixed';
import Bottomfixed from 'components/fixed/Bottomfixed';
import { useCookies } from 'react-cookie';

const Mypagemainform = (props) => {
    const navigate = useNavigate();
    const [cookies, , removeCookies] = useCookies(['loginkey', 'name', 'age', 'school', 'major', 'portfoliokey']);
    return (
        <div>
            <Aftertopfixed />
            <div style={{ width: '100%' }}>
                <Box
                    component="span"
                    sx={{
                        display: 'block',
                        p: 1,
                        m: 1,
                        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                        color: (theme) =>
                            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                        border: '1px solid',
                        borderColor: (theme) =>
                            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                        borderRadius: 2,
                        fontSize: '0.875rem',
                        fontWeight: '700',
                    }}
                >
                    <div className="box">
                        <img src={giraffe} className="mainimg components" alt="lowlogo" />
                        <h2 className="components">{cookies.name}</h2>
                        <div className="components">나이: {cookies.age}세, 최종학력: {cookies.school} / {cookies.major}</div>
                        { cookies.portfoliokey
                        ?<Button variant="outlined" className="components" onClick={() => { navigate('/mypage/detail') }}>포트폴리오 상세보기</Button>
                        :<Button variant="outlined" className="components" onClick={() => { props.handleClickPortfolioMake() }}>포트폴리오 생성</Button>
                        }
                    </div>
                </Box>
            </div>

            <div className="underBox">
                <Box
                    className='boxComponent'
                    component="span"
                    sx={{
                        p: 1,
                        m: 1,
                        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                        color: (theme) =>
                            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                        border: '1px solid',
                        borderColor: (theme) =>
                            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                        borderRadius: 2,
                        fontSize: '0.875rem',
                        fontWeight: '700',
                    }}
                >
                    <h3 className="components">구매이력</h3>
                    <div className="components">1. 2022-07-21 구매</div>
                    <div className="components">2. 2022-07-21 구매</div>
                </Box>
                <Box
                    className='boxComponent'
                    component="span"
                    sx={{
                        p: 1,
                        m: 1,
                        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                        color: (theme) =>
                            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                        border: '1px solid',
                        borderColor: (theme) =>
                            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                        borderRadius: 2,
                        fontSize: '0.875rem',
                        fontWeight: '700',
                    }}
                >
                    <h3 className="components">판매이력</h3>
                    <div className="components">1. 2022-07-21 판매</div>
                    <div className="components">2. 2022-07-21 판매</div>
                </Box>
            </div>
            {/* <Bottomfixed /> */}
        </div>
    )
}

export default Mypagemainform;