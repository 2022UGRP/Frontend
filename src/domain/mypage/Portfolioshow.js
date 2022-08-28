import { Portfolioshowform } from "components/myPage";
import React, { useState } from "react";

const Portfolioshow = () => {
  const [J_profile, setJ_profile] = useState({
    name: "기린이",
    age: 19,
    education: "POSTECH 재학",
    major: "컴퓨터공학과",
    selfintro: "여기는 어떤 글인가요 자신에 대한 소개인가요~",
  });
  const [J_selfs, setJ_selfs] = useState([
    {
      enrollyear: "19",
      pass: "구글",
      contents:
        "파파팝보보복글이길어지면글이아러재ㅑ덜매ㅔㅑ더래먀ㅓ래ㅑ;먿ㅈ럄더;",
    },
    {
      enrollyear: "16",
      pass: "대학원",
      contents: "대학원ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ",
    },
    {
      enrollyear: "21",
      pass: "LG",
      contents: "후",
    },
  ]);

  const getJ_profile = async() => {
    await axios
      .post("api/profile/portfolio")
      .then((response) => {
        setJ_profile(response);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  return <Portfolioshowform J_profile={J_profile} J_selfs={J_selfs} />;
};

export default Portfolioshow;