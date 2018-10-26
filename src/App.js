import React from "react";
import styled from "styled-components";
import CodeBlock from "./components/CodeBlock";
import CssCodeDisplay from "./components/CssCodeDisplay";
import HtmlCodeDisplay from "./components/HtmlCodeDisplay";
import BlockOptions from "./components/BlockOptions";
import Key from "./components/Key";
import ViewSwitcher from "./components/ViewSwitcher";
import debounce from "@tuxsudo/debounce";

const ParentDiv = styled.div`
  width: 50%;
  margin: auto;
  @media (max-width: 1100px) {
    width: 90%;
  }
`;

class App extends React.Component {
  state = {
    view: "output",
    code: `    
    <!DOCTYPE html>
    <title>Title</title>
    
    <style>body {width: 500px;}</style>
    
    <script type="application/javascript">
      function $init() {return true;}
    </script>
    
    <body>
      <p checked class="title" id='title'>Title</p>
      <!-- here goes the rest of the page -->
    </body>`,
    options: {
      addition: "rgba(255,184,28,1)",
      attr: "rgba(255,184,28,1)",
      attribute: "rgba(255,184,28,1)",
      background: "rgba(58,61,64,1)",
      built_in: "rgba(255,184,28,1)",
      "builtin-name": "rgba(255,184,28,1)",
      bullet: "rgba(125,227,244,1)",
      class: "rgba(255,184,28,1)",
      code: "rgba(190,210,30,1)",
      comment: "rgba(189,192,192,1)",
      deletion: "rgba(189,192,192,1)",
      doctag: "rgba(189,192,192,1)",
      emphasis: "rgba(169,173,173,1)",
      formula: "rgba(169,173,173,1)",
      function: "rgba(255,184,28,1)",
      keyword: "rgba(255,184,28,1)",
      link: "rgba(125,227,244,1)",
      literal: "rgba(125,227,244,1)",
      meta: "rgba(189,192,192,1)",
      "meta-keyword": "rgba(189,192,192,1)",
      "meta-string": "rgba(189,192,192,1)",
      name: "rgba(255,184,28,1)",
      number: "rgba(125,227,244,1)",
      params: "rgba(135,138,140,1)",
      quote: "rgba(125,227,244,1)",
      regexp: "rgba(125,227,244,1)",
      section: "rgba(255,184,28,1)",
      "selector-attr": "rgba(255,184,28,1)",
      "selector-class": "rgba(190,210,30,1)",
      "selector-id": "rgba(255,184,28,1)",
      "selector-pseudo": "rgba(255,184,28,1)",
      "selector-tag": "rgba(255,184,28,1)",
      string: "rgba(125,227,244,1)",
      strong: "rgba(169,173,173,1)",
      subst: "rgba(255,184,28,1)",
      symbol: "rgba(255,184,28,1)",
      tag: "rgba(255,184,28,1)",
      "template-tag": "rgba(255,184,28,1)",
      "template-variable": "rgba(255,184,28,1)",
      "text-color": "rgba(208,211,211,1)",
      title: "rgba(255,184,28,1)",
      type: "rgba(255,184,28,1)",
      variable: "rgba(255,184,28,1)"
    }
  };

  changeView = view => {
    this.setState({
      view: view
    });
  };

  optionChange = (color, event, option) => {
    console.log(color);

    const { r, g, b, a } = color.rgb;

    const value = `rgba(${r},${g},${b},${a})`;

    this.setState(prevstate => ({
      options: {
        ...prevstate.options,
        [option]: value
      }
    }));
  };

  codeChange = event => {
    const value = event.target.value;

    this.setState({
      code: value
    });
  };

  render() {
    const { view, code, options } = this.state;
    switch (this.state.view) {
      case "output":
        return (
          <ParentDiv>
            <h1>Custom Code Block</h1>
            <ViewSwitcher
              view={view}
              changeView={this.changeView}
              options={options}
            />

            <CodeBlock>{code}</CodeBlock>
            <CssCodeDisplay options={options} />
            <HtmlCodeDisplay code={code} />
          </ParentDiv>
        );
      case "input":
        return (
          <React.Fragment>
            <h1>Custom Code Block</h1>
            <ViewSwitcher
              view={view}
              changeView={this.changeView}
              options={options}
            />
            <BlockOptions
              options={options}
              optionChange={debounce(
                (color, event, optionChange) =>
                  this.optionChange(color, event, optionChange),
                75
              )}
              code={code}
              codeChange={this.codeChange}
            />
          </React.Fragment>
        );
      case "key":
        return (
          <React.Fragment>
            <h1>Custom Code Block</h1>
            <ViewSwitcher
              view={view}
              changeView={this.changeView}
              options={options}
            />
            <Key />
          </React.Fragment>
        );
      default:
        return <h1>Custom Code Block</h1>;
    }
  }
}

export default App;
