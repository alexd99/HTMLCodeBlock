import React from "react";
import styled from "styled-components";
import { ChromePicker } from "react-color";
import CodeBlock from "./CodeBlock";

const FlexDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  @media (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;
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
  padding: 2rem 1rem;
  :focus {
    outline: none;
  }
`;
const CodeInputDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;

  & > * {
    width: 50%;
    overflow: scroll;
  }
  @media (max-width: 1030px) {
    flex-direction: column;
    & > * {
      width: 100%;
      overflow: scroll;
    }
  }
`;
const CodeDiv = styled.div`
  height: 800px;
  position: sticky;
  top: 5px;
  width: 60%;
  @media (max-width: 600px) {
    width: 95%;
    margin: auto;
    position: static;
    & * {
      padding: 0;
    }
  }
`;
const ColorsDiv = styled.div`
  width: 40%;
  @media (max-width: 600px) {
    width: 95%;
    height: auto;
    margin: auto;
    margin-top: 50px;
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
    <FlexDiv>
      <ColorsDiv>
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
      </ColorsDiv>
      <CodeDiv>
        <h2>Code</h2>
        <CodeInputDiv>
          <CodeInput value={props.code} onChange={props.codeChange} />
          <CodeBlock>{props.code}</CodeBlock>
        </CodeInputDiv>
      </CodeDiv>
    </FlexDiv>
  );
};

export default BlockOptions;
