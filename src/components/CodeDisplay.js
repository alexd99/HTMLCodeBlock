import React from "react";
import CodeBlock from "./CodeBlock";

const CodeDisplay = ({ options }) => (
  <CodeBlock>
    {`
        .hljs-code-block{
            border-radius: ${options["border-radius"]};
            display: block;
            overflow-x: auto;
            padding: 2rem 1rem;
            background: ${options["background"]};;
            color: ${options["text-color"]};
            margin: 0;
            white-space: pre;
            text-align: left;
        }
        
        .hljs-addition{
            color: ${options["addition"]};
        }
        .hljs-attr{
            color: ${options["attr"]};
        }
        .hljs-attribute{
            color: ${options["attr"]};
        }
        .hljs-built_in{
            color: ${options["built_in"]};
        }
        .hljs-built_in{
            color: ${options["built_in"]};
        }
        .hljs-builtin-name{
            color: ${options["builtin-name"]};
        }
        .hljs-bullet{
            color: ${options["bullet"]};
        }
        .hljs-class{
            color: ${options["class"]};
        }
        .hljs-deletion{
            color: ${options["deletion"]};
        }
        .hljs-doctag{
            color: ${options["doctag"]};
        }
        .hljs-emphasis{
            color: ${options["emphasis"]};
        }
        .hljs-formula{
            color: ${options["formula"]};
        }
        .hljs-function{
            color: ${options["function"]};
        }
        .hljs-keyword{
            color: ${options["keyword"]};
        }
        .hljs-link{
            color: ${options["link"]};
        }
        .hljs-literal{
            color: ${options["literal"]};
        }
        .hljs-meta{
            color: ${options["meta"]};
        }
        .hljs-meta-keyword{
            color: ${options["meta-keyword"]};
        }
        .hljs-meta-string{
            color: ${options["meta-string"]};
        }
        .hljs-name{
            color: ${options["name"]};
        }
        .hljs-number{
            color: ${options["number"]};
        }
        .hljs-params{
            color: ${options["params"]};
        }
        .hljs-quote{
            color: ${options["quote"]};
        }
        .hljs-regexp{
            color: ${options["regexp"]};
        }
        .hljs-section{
            color: ${options["section"]};
        }
        .hljs-selector-attr{
            color: ${options["selector-attr"]};
        }
        .hljs-selector-class{
            color: ${options["selector-class"]};
        }
        .hljs-selector-id{
            color: ${options["selector-id"]};
        }
        .hljs-selector-pseudo{
            color: ${options["selector-pseudo"]};
        }
        .hljs-selector-tag{
            color: ${options["selector-tag"]};
        }
        .hljs-string{
            color: ${options["string"]};
        }
        .hljs-strong{
            color: ${options["strong"]};
        }
        .hljs-subst{
            color: ${options["subst"]};
        }
        .hljs-symbol{
            color: ${options["symbol"]};
        }
        .hljs-tag{
            color: ${options["tag"]};
        }
        .hljs-template-tag{
            color: ${options["template-tag"]};
        }
        .hljs-template-variable{
            color: ${options["template-variable"]};
        }
        .hljs-title{
            color: ${options["title"]};
        }
        .hljs-type{
            color: ${options["type"]};
        }
        .hljs-variable{
            color: ${options["variable"]};
        }
        `}
  </CodeBlock>
);

export default CodeDisplay;
