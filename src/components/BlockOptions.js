import React from "react";
import styled from "styled-components";
import CodeBlock from "./CodeBlock";

const InputDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 95%
  margin: auto;
`;
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;

  & > * {
    margin: 5px;
  }
`;
const CodeInput = styled.textarea`
  height: 500px;
`;
const CodeInputDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
  & > * {
    width: 600px;
    overflow: scroll;
  }
`;

const BlockOptions = props => {
  let allOptions = [];
  for (let options in props.options) {
    const key = options;
    const value = props.options[key];
    allOptions.push({
      name: key,
      value: value
    });
  }

  return (
    <React.Fragment>
      <h2>Colors</h2>
      <InputDiv>
        {allOptions.map(option => (
          <InputWrapper key={option.name}>
            <label htmlFor={option.name}>{option.name}: </label>
            <input
              id={option.name}
              type="color"
              value={option.value}
              onChange={event => props.optionChange(event, option.name)}
            />
          </InputWrapper>
        ))}
      </InputDiv>
      <h2>Code</h2>
      <CodeInputDiv>
        <CodeInput value={props.code} onChange={props.codeChange} />{" "}
        <CodeBlock>{props.code}</CodeBlock>
      </CodeInputDiv>
    </React.Fragment>
  );
};

export default BlockOptions;
