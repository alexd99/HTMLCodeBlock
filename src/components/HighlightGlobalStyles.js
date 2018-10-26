import { createGlobalStyle } from "styled-components";

const HighlightGlobalStyles = createGlobalStyle`
.hljs-code-block{
    border-radius: ${props => props.options["border-radius"]};
    display: block;
    overflow-x: auto;
    padding: 2rem 1rem;
    background: ${props => props.options["background"]};;
    color: ${props => props.options["text-color"]};
    margin: 0;
    white-space: pre;
    text-align: left;
    @media (max-width: 600px) {
        padding: 0;
    }
}

.hljs-addition{
    color: ${props => props.options["addition"]};
}
.hljs-attr{
    color: ${props => props.options["attr"]};
}
.hljs-attribute{
    color: ${props => props.options["attr"]};
}
.hljs-built_in{
    color: ${props => props.options["built_in"]};
}
.hljs-built_in{
    color: ${props => props.options["built_in"]};
}
.hljs-builtin-name{
    color: ${props => props.options["builtin-name"]};
}
.hljs-bullet{
    color: ${props => props.options["bullet"]};
}
.hljs-class{
    color: ${props => props.options["class"]};
}
.hljs-deletion{
    color: ${props => props.options["deletion"]};
}
.hljs-doctag{
    color: ${props => props.options["doctag"]};
}
.hljs-emphasis{
    color: ${props => props.options["emphasis"]};
}
.hljs-formula{
    color: ${props => props.options["formula"]};
}
.hljs-function{
    color: ${props => props.options["function"]};
}
.hljs-keyword{
    color: ${props => props.options["keyword"]};
}
.hljs-link{
    color: ${props => props.options["link"]};
}
.hljs-literal{
    color: ${props => props.options["literal"]};
}
.hljs-meta{
    color: ${props => props.options["meta"]};
}
.hljs-meta-keyword{
    color: ${props => props.options["meta-keyword"]};
}
.hljs-meta-string{
    color: ${props => props.options["meta-string"]};
}
.hljs-name{
    color: ${props => props.options["name"]};
}
.hljs-number{
    color: ${props => props.options["number"]};
}
.hljs-params{
    color: ${props => props.options["params"]};
}
.hljs-quote{
    color: ${props => props.options["quote"]};
}
.hljs-regexp{
    color: ${props => props.options["regexp"]};
}
.hljs-section{
    color: ${props => props.options["section"]};
}
.hljs-selector-attr{
    color: ${props => props.options["selector-attr"]};
}
.hljs-selector-class{
    color: ${props => props.options["selector-class"]};
}
.hljs-selector-id{
    color: ${props => props.options["selector-id"]};
}
.hljs-selector-pseudo{
    color: ${props => props.options["selector-pseudo"]};
}
.hljs-selector-tag{
    color: ${props => props.options["selector-tag"]};
}
.hljs-string{
    color: ${props => props.options["string"]};
}
.hljs-strong{
    color: ${props => props.options["strong"]};
}
.hljs-subst{
    color: ${props => props.options["subst"]};
}
.hljs-symbol{
    color: ${props => props.options["symbol"]};
}
.hljs-tag{
    color: ${props => props.options["tag"]};
}
.hljs-template-tag{
    color: ${props => props.options["template-tag"]};
}
.hljs-template-variable{
    color: ${props => props.options["template-variable"]};
}
.hljs-title{
    color: ${props => props.options["title"]};
}
.hljs-type{
    color: ${props => props.options["type"]};
}
.hljs-variable{
    color: ${props => props.options["variable"]};
}
`;

export default HighlightGlobalStyles;
