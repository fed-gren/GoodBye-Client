import React from "react";
import images from "./images";
import styled from "styled-components";
import CoffeInfoView from "../CoffeeInfoView";
import PayInfoView from "../PayInfoView";
import NightCofingInfoView from "../NightCodingInfoView";
import DiceView from "../DiceView";
import RPSView from "../RPSView";

const PopUpView = styled.div`
  position: absolute;
  width: 90%;
  height: 90%;
  top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    width: 100%;
    height: 100%;
    position: relative;
  }

  & > div {
    position: absolute;
    width: 50%;
    height: 50%;
    margin-left: 2rem;
  }

  & > button {
    position: absolute;
    bottom: 7rem;
    width: 4rem;
    height: 2rem;
    margin-left: 3rem;
    background-color: white;
    border-radius: 0.4rem;

    &:active {
      background-color: gray;
    }
    &:focus {
      outline: none;
    }
  }
`;

const SubInfoView = props => {
  const newAddrText = `새 주소 : 서울특별시 강남구 강남대로62길 23 4층`;
  const AddrText = `지번 주소 : 서울특별시 강남구 역삼동 836-24 4층`;
  const phoneText = `전화번호 : 070-4117-1005`;
  const businessNumText = `사업자 번호 :676-88-00504`;

  if (props.onSubInfo < 0) {
    return <></>;
  } else {
    switch (props.onSubInfo) {
      case 1:
        return (
          <PopUpView>
            <img src={images.scroll} alt="" />
            <div>
              <div>{newAddrText}</div>
              <div>{AddrText}</div>
              <div>{phoneText}</div>
              <div>{businessNumText}</div>
            </div>
            <button onClick={props.closeSubInfoView}>닫기</button>
          </PopUpView>
        );

      case 2:
        return (
          <PopUpView>
            <img src={images.scroll} alt="" />
            <CoffeInfoView />
            <button onClick={props.closeSubInfoView}>닫기</button>
          </PopUpView>
        );

      case 3:
        return (
          <PopUpView>
            <img src={images.scroll} alt="" />
            <PayInfoView />
            <button onClick={props.closeSubInfoView}>닫기</button>
          </PopUpView>
        );

      case 4:
        return (
          <PopUpView>
            <img src={images.scroll} alt="" />
            <NightCofingInfoView />
            <button onClick={props.closeSubInfoView}>닫기</button>
          </PopUpView>
        );

      case 5:
        return (
          <PopUpView>
            <img src={images.scroll} alt="" />
            <DiceView />
            <button onClick={props.closeSubInfoView}>닫기</button>
          </PopUpView>
        );

      case 6:
        return (
          <PopUpView>
            <img src={images.scroll} alt="" />
            <RPSView />
            <button onClick={props.closeSubInfoView}>닫기</button>
          </PopUpView>
        );

      default:
        break;
    }
  }
};

export default SubInfoView;
