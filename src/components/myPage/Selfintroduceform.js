import Aftertopfixed from "components/fixed/Aftertopfixed";
import Bottomfixed from "components/fixed/Bottomfixed";
import React from "react";
import { useNavigate } from "react-router-dom";

const Selfintroduceform = (props) => {
  const navigate = useNavigate();

  return (
    <div>
      <Aftertopfixed />
      <div className="J1-box">
        <div id="J1-body">
          <div className="self-card-list">
            <div>
              <h1>자기소개서 보기</h1>
            </div>
            {props.J_cards.map(function (card, idx) {
              return (
                <div className="each-self-card">
                  <div className="first-line">
                    <span className="card-date">{card.date}년 등록</span>
                    <span className="card-pass">{card.pass}합격</span>
                  </div>
                  <span className="card-pre">{card.pre}</span>
                </div>
              );
            })}
            <div className="J_back">
              <button
                onClick={() => {
                  navigate("/mypage/portfolioshow");
                }}
              >
                뒤로가기
              </button>
            </div>
          </div>
        </div>
      </div>
      <Bottomfixed />
    </div>
  );
};

export default Selfintroduceform;