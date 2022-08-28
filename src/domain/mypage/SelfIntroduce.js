import { Selfintroduceform } from "components/myPage";
import React, { useState } from "react";

const SelfIntroduce = () => {
  const [J_cards, setJ_cards] = useState([
    {
      date: 21,
      pass: "삼성",
      pre: `맞벌이로 일하셨던 부모님 덕분에 어렸을 때부터 대부분의 일을
    혼자서 처리하면서 자기 주도적으로 성장할 수 있었습니다. 중학교
    때부터 해당 진로에 관심을 가지기 시작하여 여러 분야로 흥미를
    확장하기 시작했고, 이것이 지금 전공 선택에서의...`,
    },
    {
      date: 22,
      pass: "엘지",
      pre: `다복한 가정에서 태어난 저는, 아버지가 근무하시는 무역 회사에 자주 놀러 갔었습니다. 
      그곳에서 단체 생활에 대한 많은 것들을 배울 수 있었고, 회사라는 공동체 안에서 생기는 여러 
      가지 습성들에 대해 익힐 수 있었습니다...`,
    },
    {
      date: 19,
      pass: "구글",
      pre: `저는 실리콘밸리를 조항하ㅓㄴ애ㅑ렂댜ㅐ렁ㄴㄹ...`,
    },
  ]);

  const getJ_cards = async() => {
    await axios
      .post("api/profile/selfintroduce")
      .then((response) => {
        setJ_cards(response);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };


  return <Selfintroduceform J_cards={J_cards} />;
};

export default SelfIntroduce;