import React from "react";
import styled from "styled-components";
import ninjaLogo from "./codesquad_button.png";
import titleLogo from "./codesquad.png";

const LogoView = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  & > img {
    margin: 1rem 0;
  }
`;

const NinjaLogo = styled.img`
  width: 200px;
  height: auto;
`;
const TitleLogo = styled.img`
  width: calc(100% - 1rem);
  height: 100px;
`;

const CodeSquadLogoView = _ => {
  return (
    <LogoView>
      <NinjaLogo src={ninjaLogo} alt="코쿼 로고" />
      <TitleLogo src={titleLogo} alt="코쿼 로고" />
    </LogoView>
  );
};

export default CodeSquadLogoView;
