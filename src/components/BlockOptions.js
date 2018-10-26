import React from "react";
import styled from "styled-components";
import { ChromePicker } from "react-color";
import CodeBlock from "./CodeBlock";

const InputDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 95%;
  margin: auto;
`;
const ColorPicker = styled.div`
  margin: 10px;
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
          <ColorPicker key={option.name}>
            <p>{option.name}: </p>
            <ChromePicker
              color={option.value}
              id={option.name}
              onChange={(color, event) =>
                props.optionChange(color, event, option.name)
              }
            />
          </ColorPicker>
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
