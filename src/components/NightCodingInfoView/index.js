import React from "react";
import styled from "styled-components";

const List = styled.li`
  list-style: none;
  margin-bottom: 0.5rem;
`;

const NightCofingInfoView = _ => {
  const list = [
    "1. 환기를 위해 남/여 화장실 문 열고 불 끄기",
    "2. 모든 창문 닫고 잠그기",
    "3. 테라스 문 잠그기",
    "4. 모든 에어컨 또는 히터, 공기청정기 끄기",
    "5. 모든 형광등 끄기",
    "6. 밤코 카드 챙기기",
    "7. 나와서 문 잠긴 후에 경비 버튼 누르고 밤코 카드 대기",
    "8. '경비가 완료되었습니다' 소리 확인하기",
    "9. #밤코 채널에 메세지 남기기",
    "10. 다음날 밤코 카드 챙겨오기"
  ];

  return (
    <div>
      {list.map(v => (
        <List>{v}</List>
      ))}
    </div>
  );
};

export default NightCofingInfoView;
