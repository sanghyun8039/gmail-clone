import React from "react";
import styled, { css } from "styled-components";
function SidebarOption(props) {
  return (
    <Wrapper isVisible={props.Selected}>
      <props.Icon />
      <h3>{props.Title}</h3>
      <p>{props.Number}</p>
    </Wrapper>
  );
}

export default SidebarOption;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 10px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  cursor: pointer;
  color: #818181;

  p {
    display: ${(props) => (props.isVisible ? "inline" : "none")};
    font-weight: 300;
  }
  h3 {
    flex: 1;
    margin-left: 10px;
    font-size: 14px;
    font-weight: 400;
  }
  &:hover {
    background-color: #fcecec;
    color: #c04b37;
    font-weight: 800 !important;
    h3 {
      background-color: #fcecec;
      color: #c04b37;
      font-weight: 800 !important;
    }
    p {
      display: inline;
      background-color: #fcecec;
      color: #c04b37;
      font-weight: 800 !important;
    }
  }

  ${(props) =>
    props.isVisible &&
    css`
      background-color: #fcecec;
      color: #c04b37;
      font-weight: 800 !important;
      h3 {
        background-color: #fcecec;
        color: #c04b37;
        font-weight: 800 !important;
      }
      p {
        display: inline;
        background-color: #fcecec;
        color: #c04b37;
        font-weight: 800 !important;
      }
    `}
`;
