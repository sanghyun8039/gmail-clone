import React from "react";
import styled, { css } from "styled-components";
function Section(props) {
  return (
    <Wrapper selected={props.selected} color={props.color}>
      <props.Icon />
      <h4>{props.title}</h4>
    </Wrapper>
  );
}
export default Section;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom-width: 2px;
  padding: 15px;
  min-width: 200px;
  cursor: pointer;
  color: gray;
  border-width: 0 !important;
  border-bottom: 3px solid ${(props) => props.color};
  color: ${(props) => props.selected && props.color};
  &:hover {
    background-color: whitesmoke;
    border-width: 3px !important;
  }
  h4 {
    font-size: 14px;
    margin-left: 15px;
  }
  ${(props) =>
    props.selected &&
    css`
      background-color: whitesmoke;
      border-width: 3px !important;
    `};
`;
