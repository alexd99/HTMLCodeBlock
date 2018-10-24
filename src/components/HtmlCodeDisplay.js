import React from "react";
import CodeBlock from "./CodeBlock";
import hljs from "highlight.js";

const HtmlCodeDisplay = function HtmlCodeDisplay({ code = "" }) {
  return (
    <React.Fragment>
      <h2>HTML CODE</h2>
      <CodeBlock style={{ maxHeight: "500px" }}>{`
<code class="hljs-code-block">${hljs.highlightAuto(code).value}
</code>
      `}</CodeBlock>
    </React.Fragment>
  );
};

export default HtmlCodeDisplay;
