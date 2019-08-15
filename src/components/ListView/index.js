import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #eee;
  overflow: scroll;
  & > ul {
    margin: 0;
    padding: 0;
  }
`;

const MapList = styled.li`
  list-style: none;
  width: 90%;
  height: 5rem;
  border-bottom: 1px solid gray;
  padding: 1rem 2rem;

  & > div {
    margin: 0.4rem 0;
  }
`;

const ListView = props => {
  console.log(props.markers);
  return props.markers ? (
    <Wrapper>
      <ul>
        {props.markers.map(m => {
          return (
            <MapList key={m._id}>
              <div>{m.name}</div>
              <div>{m.foodType}</div>
              <div>{m.recommendedMenu}</div>
              <div>{m.price}</div>
            </MapList>
          );
        })}
      </ul>
    </Wrapper>
  ) : (
    <></>
  );
};

export default ListView;
