(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{442:function(n,e,t){},444:function(n,e,t){"use strict";t.r(e);var a=t(0),l=t.n(a),r=t(30),o=t.n(r),c=t(31),i=t(85),u=t(12),s=t(13),p=t(15),m=t(14),d=t(16),h=t(2),g=t(3),b=t(90),f=t(32),E=t.n(f),j=function(n){function e(){var n,t;Object(u.a)(this,e);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(t=Object(p.a)(this,(n=Object(m.a)(e)).call.apply(n,[this].concat(l)))).handleRef=function(n){t.node=n},t}return Object(d.a)(e,n),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.highlightCode()}},{key:"componentDidUpdate",value:function(){this.highlightCode()}},{key:"highlightCode",value:function(){this.node&&E.a.highlightBlock(this.node)}},{key:"render",value:function(){var n=this.props,e=n.children,t=Object(b.a)(n,["children"]);return l.a.createElement("code",Object.assign({className:"hljs-code-block"},t,{ref:this.handleRef}),e)}}]),e}(l.a.Component);function v(){var n=Object(h.a)(["\n  background: none;\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  font-size: 15px;\n  margin-bottom: 4px;\n  :focus {\n    outline: none;\n  }\n"]);return v=function(){return n},n}function x(){var n=Object(h.a)(["\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  z-index: -1;\n"]);return x=function(){return n},n}function y(){var n=Object(h.a)(["\n  position: relative;\n"]);return y=function(){return n},n}var w=g.b.div(y()),k=g.b.textarea(x()),C=g.b.button(v()),O=function(n){function e(){var n,t;Object(u.a)(this,e);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(t=Object(p.a)(this,(n=Object(m.a)(e)).call.apply(n,[this].concat(l)))).state={copyButtonText:"COPY"},t.Copy=function(){t.textArea.select(),document.execCommand("copy"),t.setState({copyButtonText:"COPIED"}),setTimeout(function(){t.setState({copyButtonText:"COPY"})},5e3)},t.cssCode="\n    .hljs-code-block{\n        border-radius: ".concat(["border-radius"],";\n        display: block;\n        overflow-x: auto;\n        padding: 2rem 1rem;\n        background: ").concat(t.props.options.background,";;\n        color: ").concat(t.props.options["text-color"],";\n        margin: 0;\n        white-space: pre;\n        text-align: left;\n    }\n    \n    .hljs-addition{\n        color: ").concat(t.props.options.addition,";\n    }\n    .hljs-attr{\n        color: ").concat(t.props.options.attr,";\n    }\n    .hljs-attribute{\n        color: ").concat(t.props.options.attr,";\n    }\n    .hljs-built_in{\n        color: ").concat(t.props.options.built_in,";\n    }\n    .hljs-built_in{\n        color: ").concat(t.props.options.built_in,";\n    }\n    .hljs-builtin-name{\n        color: ").concat(t.props.options["builtin-name"],";\n    }\n    .hljs-bullet{\n        color: ").concat(t.props.options.bullet,";\n    }\n    .hljs-class{\n        color: ").concat(t.props.options.class,";\n    }\n    .hljs-deletion{\n        color: ").concat(t.props.options.deletion,";\n    }\n    .hljs-doctag{\n        color: ").concat(t.props.options.doctag,";\n    }\n    .hljs-emphasis{\n        color: ").concat(t.props.options.emphasis,";\n    }\n    .hljs-formula{\n        color: ").concat(t.props.options.formula,";\n    }\n    .hljs-function{\n        color: ").concat(t.props.options.function,";\n    }\n    .hljs-keyword{\n        color: ").concat(t.props.options.keyword,";\n    }\n    .hljs-link{\n        color: ").concat(t.props.options.link,";\n    }\n    .hljs-literal{\n        color: ").concat(t.props.options.literal,";\n    }\n    .hljs-meta{\n        color: ").concat(t.props.options.meta,";\n    }\n    .hljs-meta-keyword{\n        color: ").concat(t.props.options["meta-keyword"],";\n    }\n    .hljs-meta-string{\n        color: ").concat(t.props.options["meta-string"],";\n    }\n    .hljs-name{\n        color: ").concat(t.props.options.name,";\n    }\n    .hljs-number{\n        color: ").concat(t.props.options.number,";\n    }\n    .hljs-params{\n        color: ").concat(t.props.options.params,";\n    }\n    .hljs-quote{\n        color: ").concat(t.props.options.quote,";\n    }\n    .hljs-regexp{\n        color: ").concat(t.props.options.regexp,";\n    }\n    .hljs-section{\n        color: ").concat(t.props.options.section,";\n    }\n    .hljs-selector-attr{\n        color: ").concat(t.props.options["selector-attr"],";\n    }\n    .hljs-selector-class{\n        color: ").concat(t.props.options["selector-class"],";\n    }\n    .hljs-selector-id{\n        color: ").concat(t.props.options["selector-id"],";\n    }\n    .hljs-selector-pseudo{\n        color: ").concat(t.props.options["selector-pseudo"],";\n    }\n    .hljs-selector-tag{\n        color: ").concat(t.props.options["selector-tag"],";\n    }\n    .hljs-string{\n        color: ").concat(t.props.options.string,";\n    }\n    .hljs-strong{\n        color: ").concat(t.props.options.strong,";\n    }\n    .hljs-subst{\n        color: ").concat(t.props.options.subst,";\n    }\n    .hljs-symbol{\n        color: ").concat(t.props.options.symbol,";\n    }\n    .hljs-tag{\n        color: ").concat(t.props.options.tag,";\n    }\n    .hljs-template-tag{\n        color: ").concat(t.props.options["template-tag"],";\n    }\n    .hljs-template-variable{\n        color: ").concat(t.props.options["template-variable"],";\n    }\n    .hljs-title{\n        color: ").concat(t.props.options.title,";\n    }\n    .hljs-type{\n        color: ").concat(t.props.options.type,";\n    }\n    .hljs-variable{\n        color: ").concat(t.props.options.variable,";\n    }\n    "),t}return Object(d.a)(e,n),Object(s.a)(e,[{key:"render",value:function(){var n=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"CSS CODE"),l.a.createElement(C,{onClick:this.Copy},this.state.copyButtonText),l.a.createElement(w,null,l.a.createElement(j,{style:{maxHeight:"500px"}},this.cssCode),l.a.createElement(k,{ref:function(e){return n.textArea=e},value:this.cssCode,onChange:function(){}})))}}]),e}(l.a.Component);function S(){var n=Object(h.a)(["\n  background: none;\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  font-size: 15px;\n  margin-bottom: 4px;\n  :focus {\n    outline: none;\n  }\n"]);return S=function(){return n},n}function T(){var n=Object(h.a)(["\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  z-index: -1;\n"]);return T=function(){return n},n}function B(){var n=Object(h.a)(["\n  position: relative;\n"]);return B=function(){return n},n}var A=g.b.div(B()),P=g.b.textarea(T()),_=g.b.button(S()),M=function(n){function e(){var n,t;Object(u.a)(this,e);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(t=Object(p.a)(this,(n=Object(m.a)(e)).call.apply(n,[this].concat(l)))).state={copyButtonText:"COPY"},t.Copy=function(){t.textArea.select(),document.execCommand("copy"),t.setState({copyButtonText:"COPIED"}),setTimeout(function(){t.setState({copyButtonText:"COPY"})},5e3)},t.htmlCode='\n  <code class="hljs-code-block">'.concat(E.a.highlightAuto(t.props.code).value,"\n  </code>\n        "),t}return Object(d.a)(e,n),Object(s.a)(e,[{key:"render",value:function(){var n=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"HTML CODE"),l.a.createElement(_,{onClick:this.Copy},this.state.copyButtonText),l.a.createElement(A,null,l.a.createElement(j,{style:{maxHeight:"500px"}},this.htmlCode),l.a.createElement(P,{ref:function(e){return n.textArea=e},value:this.htmlCode,onChange:function(){}})))}}]),e}(l.a.Component),V=t(87);function q(){var n=Object(h.a)(["\n  width: 40%;\n  @media (max-width: 600px) {\n    width: 95%;\n    height: auto;\n    margin: auto;\n    margin-top: 50px;\n  }\n"]);return q=function(){return n},n}function D(){var n=Object(h.a)(["\n  height: 800px;\n  position: sticky;\n  top: 5px;\n  width: 60%;\n  @media (max-width: 600px) {\n    width: 95%;\n    margin: auto;\n    position: static;\n    & * {\n      padding: 0;\n    }\n  }\n"]);return D=function(){return n},n}function Y(){var n=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 25px;\n\n  & > * {\n    width: 50%;\n    overflow: scroll;\n  }\n  @media (max-width: 1030px) {\n    flex-direction: column;\n    & > * {\n      width: 100%;\n      overflow: scroll;\n    }\n  }\n"]);return Y=function(){return n},n}function F(){var n=Object(h.a)(["\n  height: 500px;\n  padding: 2rem 1rem;\n  :focus {\n    outline: none;\n  }\n"]);return F=function(){return n},n}function z(){var n=Object(h.a)(["\n  margin: 10px;\n"]);return z=function(){return n},n}function H(){var n=Object(h.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: 95%;\n  margin: auto;\n"]);return H=function(){return n},n}function L(){var n=Object(h.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  position: relative;\n  @media (max-width: 600px) {\n    flex-direction: column-reverse;\n  }\n"]);return L=function(){return n},n}var I=g.b.div(L()),U=g.b.div(H()),J=g.b.div(z()),N=g.b.textarea(F()),X=g.b.div(Y()),K=g.b.div(D()),R=g.b.div(q()),W=function(n){var e=[];for(var t in n.options){var a=t,r=n.options[a];e.push({name:a,value:r})}return l.a.createElement(I,null,l.a.createElement(R,null,l.a.createElement("h2",null,"Colors"),l.a.createElement(U,null,e.map(function(e){return l.a.createElement(J,{key:e.name},l.a.createElement("p",null,e.name,": "),l.a.createElement(V.ChromePicker,{color:e.value,id:e.name,onChange:function(t,a){return n.optionChange(t,a,e.name)}}))}))),l.a.createElement(K,null,l.a.createElement("h2",null,"Code"),l.a.createElement(X,null,l.a.createElement(N,{value:n.code,onChange:n.codeChange}),l.a.createElement(j,null,n.code))))};function $(){var n=Object(h.a)(["\n  margin: auto;\n  text-align: left;\n  border-collapse: collapse;\n  margin-bottom: 10px;\n  & > tbody tr,\n  td {\n    border: 1px solid #adadad;\n    padding: 10px;\n  }\n"]);return $=function(){return n},n}var G=g.b.table($()),Q=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"KEY"),l.a.createElement(G,null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"2"},l.a.createElement("strong",null,"General-purpose"))),l.a.createElement("tr",null,l.a.createElement("td",null,"keyword"),l.a.createElement("td",null,"keyword in a regular Algol-style language")),l.a.createElement("tr",null,l.a.createElement("td",null,"built_in"),l.a.createElement("td",null,"built-in or library object (constant, class, function)")),l.a.createElement("tr",null,l.a.createElement("td",null,"type"),l.a.createElement("td",null,"user-defined type in a language with first-class syntactically significant types, like Haskell")),l.a.createElement("tr",null,l.a.createElement("td",null,"literal"),l.a.createElement("td",null,"special identifier for a built-in value (\u201ctrue\u201d, \u201cfalse\u201d, \u201cnull\u201d)")),l.a.createElement("tr",null,l.a.createElement("td",null,"number"),l.a.createElement("td",null,"number, including units and modifiers, if any.")),l.a.createElement("tr",null,l.a.createElement("td",null,"regexp"),l.a.createElement("td",null,"literal regular expression")),l.a.createElement("tr",null,l.a.createElement("td",null,"string"),l.a.createElement("td",null,"literal string, character")),l.a.createElement("tr",null,l.a.createElement("td",null,"subst"),l.a.createElement("td",null,"parsed section inside a literal string")),l.a.createElement("tr",null,l.a.createElement("td",null,"symbol"),l.a.createElement("td",null,"symbolic constant, interned string, goto label")),l.a.createElement("tr",null,l.a.createElement("td",null,"class"),l.a.createElement("td",null,"class or class-level declaration (interfaces, traits, modules, etc)")),l.a.createElement("tr",null,l.a.createElement("td",null,"function"),l.a.createElement("td",null,"function or method declaration")),l.a.createElement("tr",null,l.a.createElement("td",null,"title"),l.a.createElement("td",null,"name of a class or a function at the place of declaration")),l.a.createElement("tr",null,l.a.createElement("td",null,"params"),l.a.createElement("td",null,"block of function arguments (parameters) at the place of declaration")),l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"2"},l.a.createElement("strong",null,"Meta"))),l.a.createElement("tr",null,l.a.createElement("td",null,"comment"),l.a.createElement("td",null,"comment")),l.a.createElement("tr",null,l.a.createElement("td",null,"doctag"),l.a.createElement("td",null,"documentation markup within comments")),l.a.createElement("tr",null,l.a.createElement("td",null,"meta"),l.a.createElement("td",null,"flags, modifiers, annotations, processing instructions, preprocessor directive, etc")),l.a.createElement("tr",null,l.a.createElement("td",null,"meta-keyword"),l.a.createElement("td",null,"keyword or built-in within meta construct")),l.a.createElement("tr",null,l.a.createElement("td",null,"meta-string"),l.a.createElement("td",null,"string within meta construct")),l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"2"},l.a.createElement("strong",null,"Tags, attributes, configs"))),l.a.createElement("tr",null,l.a.createElement("td",null,"section"),l.a.createElement("td",null,"heading of a section in a config file, heading in text markup")),l.a.createElement("tr",null,l.a.createElement("td",null,"tag"),l.a.createElement("td",null,"XML/HTML tag")),l.a.createElement("tr",null,l.a.createElement("td",null,"name"),l.a.createElement("td",null,"name of an XML tag, the first word in an s-expression")),l.a.createElement("tr",null,l.a.createElement("td",null,"builtin-name"),l.a.createElement("td",null,"s-expression name from the language standard library")),l.a.createElement("tr",null,l.a.createElement("td",null,"attr"),l.a.createElement("td",null,"name of an attribute with no language defined semantics (keys in JSON, setting names in .ini), also sub-attribute within another highlighted object, like XML tag")),l.a.createElement("tr",null,l.a.createElement("td",null,"attribute"),l.a.createElement("td",null,"name of an attribute followed by a structured value part, like CSS properties")),l.a.createElement("tr",null,l.a.createElement("td",null,"variable"),l.a.createElement("td",null,"variable in a config or a template file, environment var expansion in a script")),l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"2"},l.a.createElement("strong",null,"Markup"))),l.a.createElement("tr",null,l.a.createElement("td",null,"bullet"),l.a.createElement("td",null,"list item bullet in text markup")),l.a.createElement("tr",null,l.a.createElement("td",null,"code"),l.a.createElement("td",null,"code block in text markup")),l.a.createElement("tr",null,l.a.createElement("td",null,"emphasis"),l.a.createElement("td",null,"emphasis in text markup")),l.a.createElement("tr",null,l.a.createElement("td",null,"strong"),l.a.createElement("td",null,"strong emphasis in text markup")),l.a.createElement("tr",null,l.a.createElement("td",null,"formula"),l.a.createElement("td",null,"mathematical formula in text markup")),l.a.createElement("tr",null,l.a.createElement("td",null,"link"),l.a.createElement("td",null,"hyperlink in text markup")),l.a.createElement("tr",null,l.a.createElement("td",null,"quote"),l.a.createElement("td",null,"quotation in text markup")),l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"2"},l.a.createElement("strong",null,"CSS"))),l.a.createElement("tr",null,l.a.createElement("td",null,"selector-tag"),l.a.createElement("td",null,"tag selector in CSS")),l.a.createElement("tr",null,l.a.createElement("td",null,"selector-id"),l.a.createElement("td",null,"#id selector in CSS")),l.a.createElement("tr",null,l.a.createElement("td",null,"selector-class"),l.a.createElement("td",null,".class selector in CSS")),l.a.createElement("tr",null,l.a.createElement("td",null,"selector-attr"),l.a.createElement("td",null,"[attr] selector in CSS")),l.a.createElement("tr",null,l.a.createElement("td",null,"selector-pseudo"),l.a.createElement("td",null,":pseudo selector in CSS")),l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"2"},l.a.createElement("strong",null,"Templates"))),l.a.createElement("tr",null,l.a.createElement("td",null,"template-tag"),l.a.createElement("td",null,"tag of a template language")),l.a.createElement("tr",null,l.a.createElement("td",null,"template-variable"),l.a.createElement("td",null,"variable in a template language")),l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"2"},l.a.createElement("strong",null,"diff"))),l.a.createElement("tr",null,l.a.createElement("td",null,"addition"),l.a.createElement("td",null,"added or changed line in a diff")),l.a.createElement("tr",null,l.a.createElement("td",null,"deletion"),l.a.createElement("td",null,"deleted line in a diff")))))};function Z(){var n=Object(h.a)(["\n.hljs-code-block{\n    border-radius: ",";\n    display: block;\n    overflow-x: auto;\n    padding: 2rem 1rem;\n    background: ",";;\n    color: ",";\n    margin: 0;\n    white-space: pre;\n    text-align: left;\n    @media (max-width: 600px) {\n        padding: 0;\n    }\n}\n\n.hljs-addition{\n    color: ",";\n}\n.hljs-attr{\n    color: ",";\n}\n.hljs-attribute{\n    color: ",";\n}\n.hljs-built_in{\n    color: ",";\n}\n.hljs-built_in{\n    color: ",";\n}\n.hljs-builtin-name{\n    color: ",";\n}\n.hljs-bullet{\n    color: ",";\n}\n.hljs-class{\n    color: ",";\n}\n.hljs-deletion{\n    color: ",";\n}\n.hljs-doctag{\n    color: ",";\n}\n.hljs-emphasis{\n    color: ",";\n}\n.hljs-formula{\n    color: ",";\n}\n.hljs-function{\n    color: ",";\n}\n.hljs-keyword{\n    color: ",";\n}\n.hljs-link{\n    color: ",";\n}\n.hljs-literal{\n    color: ",";\n}\n.hljs-meta{\n    color: ",";\n}\n.hljs-meta-keyword{\n    color: ",";\n}\n.hljs-meta-string{\n    color: ",";\n}\n.hljs-name{\n    color: ",";\n}\n.hljs-number{\n    color: ",";\n}\n.hljs-params{\n    color: ",";\n}\n.hljs-quote{\n    color: ",";\n}\n.hljs-regexp{\n    color: ",";\n}\n.hljs-section{\n    color: ",";\n}\n.hljs-selector-attr{\n    color: ",";\n}\n.hljs-selector-class{\n    color: ",";\n}\n.hljs-selector-id{\n    color: ",";\n}\n.hljs-selector-pseudo{\n    color: ",";\n}\n.hljs-selector-tag{\n    color: ",";\n}\n.hljs-string{\n    color: ",";\n}\n.hljs-strong{\n    color: ",";\n}\n.hljs-subst{\n    color: ",";\n}\n.hljs-symbol{\n    color: ",";\n}\n.hljs-tag{\n    color: ",";\n}\n.hljs-template-tag{\n    color: ",";\n}\n.hljs-template-variable{\n    color: ",";\n}\n.hljs-title{\n    color: ",";\n}\n.hljs-type{\n    color: ",";\n}\n.hljs-variable{\n    color: ",";\n}\n"]);return Z=function(){return n},n}var nn=Object(g.a)(Z(),function(n){return n.options["border-radius"]},function(n){return n.options.background},function(n){return n.options["text-color"]},function(n){return n.options.addition},function(n){return n.options.attr},function(n){return n.options.attr},function(n){return n.options.built_in},function(n){return n.options.built_in},function(n){return n.options["builtin-name"]},function(n){return n.options.bullet},function(n){return n.options.class},function(n){return n.options.deletion},function(n){return n.options.doctag},function(n){return n.options.emphasis},function(n){return n.options.formula},function(n){return n.options.function},function(n){return n.options.keyword},function(n){return n.options.link},function(n){return n.options.literal},function(n){return n.options.meta},function(n){return n.options["meta-keyword"]},function(n){return n.options["meta-string"]},function(n){return n.options.name},function(n){return n.options.number},function(n){return n.options.params},function(n){return n.options.quote},function(n){return n.options.regexp},function(n){return n.options.section},function(n){return n.options["selector-attr"]},function(n){return n.options["selector-class"]},function(n){return n.options["selector-id"]},function(n){return n.options["selector-pseudo"]},function(n){return n.options["selector-tag"]},function(n){return n.options.string},function(n){return n.options.strong},function(n){return n.options.subst},function(n){return n.options.symbol},function(n){return n.options.tag},function(n){return n.options["template-tag"]},function(n){return n.options["template-variable"]},function(n){return n.options.title},function(n){return n.options.type},function(n){return n.options.variable});function en(){var n=Object(h.a)(["\ncursor: pointer;\n    padding: 5px;\n    margin: 10px;\n    border-radius: 100px;\n    font-size: 20px;\n    width: 100px;\n    background: ",";\n    :hover {\n    background: #777;\n  }: \n"]);return en=function(){return n},n}function tn(){var n=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n"]);return tn=function(){return n},n}var an=g.b.div(tn()),ln=g.b.p(en(),function(n){return n.active?"#777":"none"}),rn=function(n){var e=n.view,t=n.changeView,a=n.options;return l.a.createElement(l.a.Fragment,null,l.a.createElement(nn,{options:a}),l.a.createElement(an,null,l.a.createElement(ln,{active:"output"===e,onClick:function(){return t("output")}},"OUTPUT"),l.a.createElement(ln,{active:"input"===e,onClick:function(){return t("input")}},"INPUT"),l.a.createElement(ln,{active:"key"===e,onClick:function(){return t("key")}},"KEY")))},on=t(88),cn=t.n(on);function un(){var n=Object(h.a)(["\n  width: 50%;\n  margin: auto;\n  @media (max-width: 1100px) {\n    width: 90%;\n  }\n"]);return un=function(){return n},n}var sn=g.b.div(un()),pn=function(n){function e(){var n,t;Object(u.a)(this,e);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(t=Object(p.a)(this,(n=Object(m.a)(e)).call.apply(n,[this].concat(l)))).state={view:"output",code:'    \n    <!DOCTYPE html>\n    <title>Title</title>\n    \n    <style>body {width: 500px;}</style>\n    \n    <script type="application/javascript">\n      function $init() {return true;}\n    <\/script>\n    \n    <body>\n      <p checked class="title" id=\'title\'>Title</p>\n      \x3c!-- here goes the rest of the page --\x3e\n    </body>',options:{addition:"rgba(255,184,28,1)",attr:"rgba(255,184,28,1)",attribute:"rgba(255,184,28,1)",background:"rgba(58,61,64,1)",built_in:"rgba(255,184,28,1)","builtin-name":"rgba(255,184,28,1)",bullet:"rgba(125,227,244,1)",class:"rgba(255,184,28,1)",code:"rgba(190,210,30,1)",comment:"rgba(189,192,192,1)",deletion:"rgba(189,192,192,1)",doctag:"rgba(189,192,192,1)",emphasis:"rgba(169,173,173,1)",formula:"rgba(169,173,173,1)",function:"rgba(255,184,28,1)",keyword:"rgba(255,184,28,1)",link:"rgba(125,227,244,1)",literal:"rgba(125,227,244,1)",meta:"rgba(189,192,192,1)","meta-keyword":"rgba(189,192,192,1)","meta-string":"rgba(189,192,192,1)",name:"rgba(255,184,28,1)",number:"rgba(125,227,244,1)",params:"rgba(135,138,140,1)",quote:"rgba(125,227,244,1)",regexp:"rgba(125,227,244,1)",section:"rgba(255,184,28,1)","selector-attr":"rgba(255,184,28,1)","selector-class":"rgba(190,210,30,1)","selector-id":"rgba(255,184,28,1)","selector-pseudo":"rgba(255,184,28,1)","selector-tag":"rgba(255,184,28,1)",string:"rgba(125,227,244,1)",strong:"rgba(169,173,173,1)",subst:"rgba(255,184,28,1)",symbol:"rgba(255,184,28,1)",tag:"rgba(255,184,28,1)","template-tag":"rgba(255,184,28,1)","template-variable":"rgba(255,184,28,1)","text-color":"rgba(208,211,211,1)c",title:"rgba(255,184,28,1)",type:"rgba(255,184,28,1)",variable:"rgba(255,184,28,1)"}},t.changeView=function(n){t.setState({view:n})},t.optionChange=function(n,e,a){console.log(n);var l=n.rgb,r=l.r,o=l.g,u=l.b,s=l.a,p="rgba(".concat(r,",").concat(o,",").concat(u,",").concat(s,")");t.setState(function(n){return{options:Object(i.a)({},n.options,Object(c.a)({},a,p))}})},t.codeChange=function(n){var e=n.target.value;t.setState({code:e})},t}return Object(d.a)(e,n),Object(s.a)(e,[{key:"render",value:function(){var n=this,e=this.state,t=e.view,a=e.code,r=e.options;switch(this.state.view){case"output":return l.a.createElement(sn,null,l.a.createElement("h1",null,"Custom Code Block"),l.a.createElement(rn,{view:t,changeView:this.changeView,options:r}),l.a.createElement(j,null,a),l.a.createElement(O,{options:r}),l.a.createElement(M,{code:a}));case"input":return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Custom Code Block"),l.a.createElement(rn,{view:t,changeView:this.changeView,options:r}),l.a.createElement(W,{options:r,optionChange:cn()(function(e,t,a){return n.optionChange(e,t,a)},75),code:a,codeChange:this.codeChange}));case"key":return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Custom Code Block"),l.a.createElement(rn,{view:t,changeView:this.changeView,options:r}),l.a.createElement(Q,null));default:return l.a.createElement("h1",null,"Custom Code Block")}}}]),e}(l.a.Component);t(442),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(pn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})},91:function(n,e,t){n.exports=t(444)}},[[91,2,1]]]);
//# sourceMappingURL=main.d18356c3.chunk.js.map