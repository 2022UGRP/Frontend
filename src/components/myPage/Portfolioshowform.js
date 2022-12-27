import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import giraffe from "img/griaffe.png";
import Aftertopfixed from "components/fixed/Aftertopfixed";
import Bottomfixed from "components/fixed/Bottomfixed";

const Portfolioshowform = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <Aftertopfixed />
      <button onClick={() => {props.getJ_profile()}}>버튼</button>
      <div className="J2-box">
        <div id="J2-body">
          {/* <img className="J2-img" src="images/giraffe_NFT.png" /> */}
          <img src={giraffe} className="mainimg components" alt="lowlogo" />
          <div className="J2-portfolio-contents">
            <span className="J2-portfolio-profile">
              <h1>{props.J_profile.name}</h1>
              <span className="J2-portfolio-info">
                <p>
                  {props.J_profile.age}세 / {props.J_profile.education} /{" "}
                  {props.J_profile.major}
                </p>
              </span>
            </span>
            <span className="J2-portfolio-intro">
              {props.J_profile.selfintro}
            </span>
          </div>
          <div className="J2-portfolio-self-list">
            {props.J_selfs.map((J_self, idx) => {
              return (
                <div className="J2-each-self-card">
                  <div className="J2-first-line">
                    <span className="J2-card-date">
                      {J_self.enrollyear}년 등록
                    </span>
                    <span className="J2-card-pass">{J_self.pass}합격</span>
                  </div>
                  <span className="J2-card-pre">{J_self.contents}</span>
                </div>
              );
            })}
          </div>
          <div className="J2_back">
            <button
              onClick={() => {
                navigate("/mypage/selfintroshow");
              }}
            >
              뒤로가기
            </button>
          </div>
        </div>
      </div>
      {/* <Bottomfixed /> */}
    </div>
  );
};

export default Portfolioshowform;