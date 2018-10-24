import React from "react";
import hljs from "highlight.js";

class CodeBlock extends React.Component {
  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  handleRef = node => {
    this.node = node;
  };

  highlightCode() {
    if (this.node) {
      hljs.highlightBlock(this.node);
    }
  }

  render() {
    const { children, ...props } = this.props;

    return (
      <code className="hljs-code-block" {...props} ref={this.handleRef}>
        {children}
      </code>
    );
  }
}

export default CodeBlock;
