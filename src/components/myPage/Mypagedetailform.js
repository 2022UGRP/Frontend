import React from 'react';
import {Box, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Aftertopfixed from 'components/fixed/Aftertopfixed';
import Bottomfixed from 'components/fixed/Bottomfixed';
import { useCookies } from 'react-cookie';

const Mypagedetailform = (props) => {
    const navigate = useNavigate();
    const [cookies, ] = useCookies(['loginkey', 'name', 'age', 'school', 'major', 'portfoliokey', 'image']);
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
            alignItems: 'center',
        }}
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <div className="box">
                <img src={cookies.image} className="mainimg components" alt="lowlogo"/>
                <h2 className="components">{cookies.name}</h2>
                <div className="components">나이: {cookies.age}세, 최종학력: {cookies.school} / {cookies.major}</div>
            </div>
            <div className="box">
                {/* <p>포트폴리오 구성요소</p>
                {props.elementDatas.map((v,) => {
                    return `${v.Activity}: ${v.Contents}`
                })}
                <p>자기소개서</p>
                {props.selfintroDatas.map((v,) => {
                    const date = new Date(v.Date);
                    const y = date.getFullYear();
                    const m = date.getMonth() + 1;
                    const d = date.getDate();

                    return v.Title + `(${y}.${m}.${d}): ` + v.Contents;
                })} */}
                <div className="self-card-list">
                <div className="list_title">
                    <h2>포트폴리오</h2>
                    <Button variant="outlined" style={{ height: '35px'}} onClick={()=>{navigate('/mypage/portfolio')}}>포트폴리오 구성요소 추가</Button>
                </div>
                    {props.elementDatas.map((v,) => {
                    return (
                        <div className="each-self-card">
                        <div>
                            <span className="card-pass">{v.Activity}</span>
                        </div>
                        <span className="card-pre">{v.Contents}</span>
                        </div>
                    );
                    })}
                </div> 

                <div className="self-card-list">
                    <div className="list_title">
                        <h2>자기소개서</h2>
                        <Button variant="outlined" style={{ height: '35px'}} onClick={()=>{navigate('/mypage/selfintro')}}>자기소개서 등록</Button>
                    </div>
                    {props.selfintroDatas.map((v,) => {
                        const date = new Date(v.Date);
                        const y = date.getFullYear();
                        const m = date.getMonth() + 1;
                        const d = date.getDate();
                    return (
                        <div className="each-self-card">
                        <div>
                            <span className="card-pass">{v.Title}합격</span>
                            <span className="card-date">{y}.{m}.{d} 등록</span>
                        </div>
                        <span className="card-pre">{v.Contents}</span>
                        </div>
                    );
                    })}
                </div>

            </div>
            <Button variant="outlined" style={{
                width: '70%',
                alignSelf: 'center',
                marginTop: 15,
            }} onClick={()=>{navigate('/mypage/NFTmint')}}>NFT 발행</Button>
        </Box>
        </div>
        {/* <Bottomfixed/> */}
    </div>
  )
}

export default Mypagedetailform;