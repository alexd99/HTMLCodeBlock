import React from "react";
import styled from "styled-components";
import hljs from "highlight.js";
import CodeBlock from "./CodeBlock";

const MainDiv = styled.div`
  position: relative;
`;
const CopyArea = styled.textarea`
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: -1;
`;
const CopyButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 15px;
  margin-bottom: 4px;
  :focus {
    outline: none;
  }
`;

class HtmlCodeDisplay extends React.Component {
  state = {
    copyButtonText: "COPY"
  };

  Copy = () => {
    this.textArea.select();
    document.execCommand("copy");
    this.setState({
      copyButtonText: "COPIED"
    });
    setTimeout(() => {
      this.setState({
        copyButtonText: "COPY"
      });
    }, 5000);
  };

  htmlCode = `
  <code class="hljs-code-block">${hljs.highlightAuto(this.props.code).value}
  </code>
        `;
  render() {
    return (
      <React.Fragment>
        <h2>HTML CODE</h2>
        <CopyButton onClick={this.Copy}>{this.state.copyButtonText}</CopyButton>
        <MainDiv>
          <CodeBlock style={{ maxHeight: "500px" }}>{this.htmlCode}</CodeBlock>
          <CopyArea
            ref={textarea => (this.textArea = textarea)}
            value={this.htmlCode}
            onChange={() => {}}
          />
        </MainDiv>
      </React.Fragment>
    );
  }
}

export default HtmlCodeDisplay;
