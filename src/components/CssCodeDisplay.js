import React from "react";
import styled from "styled-components";
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

class CssCodeDisplay extends React.Component {
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

  cssCode = `
    .hljs-code-block{
        border-radius: ${["border-radius"]};
        display: block;
        overflow-x: auto;
        padding: 2rem 1rem;
        background: ${this.props.options["background"]};
        color: ${this.props.options["text-color"]};
        margin: 0;
        white-space: pre;
        text-align: left;
    }
    
    .hljs-addition{
        color: ${this.props.options["addition"]};
    }
    .hljs-attr{
        color: ${this.props.options["attr"]};
    }
    .hljs-attribute{
        color: ${this.props.options["attr"]};
    }
    .hljs-built_in{
        color: ${this.props.options["built_in"]};
    }
    .hljs-built_in{
        color: ${this.props.options["built_in"]};
    }
    .hljs-builtin-name{
        color: ${this.props.options["builtin-name"]};
    }
    .hljs-bullet{
        color: ${this.props.options["bullet"]};
    }
    .hljs-class{
        color: ${this.props.options["class"]};
    }
    .hljs-deletion{
        color: ${this.props.options["deletion"]};
    }
    .hljs-doctag{
        color: ${this.props.options["doctag"]};
    }
    .hljs-emphasis{
        color: ${this.props.options["emphasis"]};
    }
    .hljs-formula{
        color: ${this.props.options["formula"]};
    }
    .hljs-function{
        color: ${this.props.options["function"]};
    }
    .hljs-keyword{
        color: ${this.props.options["keyword"]};
    }
    .hljs-link{
        color: ${this.props.options["link"]};
    }
    .hljs-literal{
        color: ${this.props.options["literal"]};
    }
    .hljs-meta{
        color: ${this.props.options["meta"]};
    }
    .hljs-meta-keyword{
        color: ${this.props.options["meta-keyword"]};
    }
    .hljs-meta-string{
        color: ${this.props.options["meta-string"]};
    }
    .hljs-name{
        color: ${this.props.options["name"]};
    }
    .hljs-number{
        color: ${this.props.options["number"]};
    }
    .hljs-params{
        color: ${this.props.options["params"]};
    }
    .hljs-quote{
        color: ${this.props.options["quote"]};
    }
    .hljs-regexp{
        color: ${this.props.options["regexp"]};
    }
    .hljs-section{
        color: ${this.props.options["section"]};
    }
    .hljs-selector-attr{
        color: ${this.props.options["selector-attr"]};
    }
    .hljs-selector-class{
        color: ${this.props.options["selector-class"]};
    }
    .hljs-selector-id{
        color: ${this.props.options["selector-id"]};
    }
    .hljs-selector-pseudo{
        color: ${this.props.options["selector-pseudo"]};
    }
    .hljs-selector-tag{
        color: ${this.props.options["selector-tag"]};
    }
    .hljs-string{
        color: ${this.props.options["string"]};
    }
    .hljs-strong{
        color: ${this.props.options["strong"]};
    }
    .hljs-subst{
        color: ${this.props.options["subst"]};
    }
    .hljs-symbol{
        color: ${this.props.options["symbol"]};
    }
    .hljs-tag{
        color: ${this.props.options["tag"]};
    }
    .hljs-template-tag{
        color: ${this.props.options["template-tag"]};
    }
    .hljs-template-variable{
        color: ${this.props.options["template-variable"]};
    }
    .hljs-title{
        color: ${this.props.options["title"]};
    }
    .hljs-type{
        color: ${this.props.options["type"]};
    }
    .hljs-variable{
        color: ${this.props.options["variable"]};
    }
    `;
  render() {
    return (
      <React.Fragment>
        <h2>CSS CODE</h2>
        <CopyButton onClick={this.Copy}>{this.state.copyButtonText}</CopyButton>
        <MainDiv>
          <CodeBlock style={{ maxHeight: "500px" }}>{this.cssCode}</CodeBlock>
          <CopyArea
            ref={textarea => (this.textArea = textarea)}
            value={this.cssCode}
            onChange={() => {}}
          />
        </MainDiv>
      </React.Fragment>
    );
  }
}

export default CssCodeDisplay;
