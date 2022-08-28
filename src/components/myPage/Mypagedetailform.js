import React from 'react';
import {Box, Button} from '@mui/material';
import giraffe from "img/griaffe.png";
import { useNavigate } from 'react-router-dom';
import Aftertopfixed from 'components/fixed/Aftertopfixed';
import Bottomfixed from 'components/fixed/Bottomfixed';

const Mypagedetailform = () => {
    const navigate = useNavigate();
    return (
    <div className = "background">
        <Aftertopfixed/>
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
                <img src={giraffe} className="mainimg components" alt="lowlogo"/>
                <h2 className="components">기린이</h2>
                <div className="components">나이: 21세, 최종학력: 포항공과대학교/ 생명과학부</div>
            </div>
            <Box
                className = 'boxComponent'
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
                <h3 className="components">포트폴리오 구성 요소 관리</h3>
                <Button variant="outlined" className="components" onClick={()=>{navigate('/mypage/portfolio')}}>추가</Button>
                <Button variant="outlined" className="components" onClick={()=>{navigate('/mypage/portfolio')}}>수정</Button>
            </Box>
        </Box>
        </div>

        <div className = "underBox">
            <Button variant="outlined" className="buttons" onClick={()=>{navigate('/mypage/selfintro')}}>자기소개서 등록</Button>
            <Button variant="outlined" className="buttons" onClick={()=>{navigate('/mypage/selfintro')}}>자기소개서 보기</Button>
            <Button variant="outlined" className="buttons" onClick={()=>{navigate('/mypage/selfintro')}}>NFT 발행</Button>
        </div>
        <Bottomfixed/>
    </div>
  )
}

export default Mypagedetailform;