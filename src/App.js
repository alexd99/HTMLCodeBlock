import React from "react";
import styled from "styled-components";
import CodeBlock from "./components/CodeBlock";
import CssCodeDisplay from "./components/CssCodeDisplay";
import HtmlCodeDisplay from "./components/HtmlCodeDisplay";
import BlockOptions from "./components/BlockOptions";
import Key from "./components/Key";
import ViewSwitcher from "./components/ViewSwitcher";
import debounce from "@tuxsudo/debounce";
import themes from "./components/themes";

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
      ...themes.default.options
    },
    themeName: "default"
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
      themeName: "custom",
      options: {
        ...prevstate.options,
        [option]: value
      }
    }));
  };

  themeChange = event => {
    const themeName = event.target.value;
    this.setState({
      themeName: themeName,
      options: {
        ...themes[themeName].options
      }
    });
  };

  codeChange = event => {
    const value = event.target.value;

    this.setState({
      code: value
    });
  };

  render() {
    const { view, code, options, themeName } = this.state;
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
              themeChange={this.themeChange}
              themeName={themeName}
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
