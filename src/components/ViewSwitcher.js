import React from "react";
import styled from "styled-components";
import HighlightGlobalStyles from "./HighlightGlobalStyles";

const Views = styled.div`
  display: flex;
  justify-content: center;
`;

const Link = styled.p`
cursor: pointer;
    padding: 5px;
    margin: 10px;
    border-radius: 100px;
    font-size: 20px;
    width: 100px;
    background: ${props => (props.active ? "#777" : "none")};
    :hover {
    background: #777;
  }: 
`;

const ViewSwitcher = ({ view, changeView, options }) => (
  <React.Fragment>
    <HighlightGlobalStyles options={options} />
    <Views>
      <Link active={view === "output"} onClick={() => changeView("output")}>
        OUTPUT
      </Link>
      <Link active={view === "input"} onClick={() => changeView("input")}>
        INPUT
      </Link>
      <Link active={view === "key"} onClick={() => changeView("key")}>
        KEY
      </Link>
    </Views>
  </React.Fragment>
);

export default ViewSwitcher;
