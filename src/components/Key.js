import React from "react";
import styled from "styled-components";

const KeyTable = styled.table`
  margin: auto;
  text-align: left;
  border-collapse: collapse;
  margin-bottom: 10px;
  & > tbody tr,
  td {
    border: 1px solid #adadad;
    padding: 10px;
  }
`;

const Key = () => (
  <React.Fragment>
    <h2>KEY</h2>
    <KeyTable>
      <tbody>
        <tr>
          <td colSpan="2">
            <strong>General-purpose</strong>
          </td>
        </tr>
        <tr>
          <td>keyword</td>
          <td>keyword in a regular Algol-style language</td>
        </tr>
        <tr>
          <td>built_in</td>
          <td>built-in or library object (constant, class, function)</td>
        </tr>
        <tr>
          <td>type</td>
          <td>
            user-defined type in a language with first-class syntactically
            significant types, like Haskell
          </td>
        </tr>
        <tr>
          <td>literal</td>
          <td>
            special identifier for a built-in value (“true”, “false”, “null”)
          </td>
        </tr>
        <tr>
          <td>number</td>
          <td>number, including units and modifiers, if any.</td>
        </tr>
        <tr>
          <td>regexp</td>
          <td>literal regular expression</td>
        </tr>
        <tr>
          <td>string</td>
          <td>literal string, character</td>
        </tr>
        <tr>
          <td>subst</td>
          <td>parsed section inside a literal string</td>
        </tr>
        <tr>
          <td>symbol</td>
          <td>symbolic constant, interned string, goto label</td>
        </tr>
        <tr>
          <td>class</td>
          <td>
            class or class-level declaration (interfaces, traits, modules, etc)
          </td>
        </tr>
        <tr>
          <td>function</td>
          <td>function or method declaration</td>
        </tr>
        <tr>
          <td>title</td>
          <td>name of a class or a function at the place of declaration</td>
        </tr>
        <tr>
          <td>params</td>
          <td>
            block of function arguments (parameters) at the place of declaration
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <strong>Meta</strong>
          </td>
        </tr>
        <tr>
          <td>comment</td>
          <td>comment</td>
        </tr>
        <tr>
          <td>doctag</td>
          <td>documentation markup within comments</td>
        </tr>
        <tr>
          <td>meta</td>
          <td>
            flags, modifiers, annotations, processing instructions, preprocessor
            directive, etc
          </td>
        </tr>
        <tr>
          <td>meta-keyword</td>
          <td>keyword or built-in within meta construct</td>
        </tr>
        <tr>
          <td>meta-string</td>
          <td>string within meta construct</td>
        </tr>
        <tr>
          <td colSpan="2">
            <strong>Tags, attributes, configs</strong>
          </td>
        </tr>
        <tr>
          <td>section</td>
          <td>heading of a section in a config file, heading in text markup</td>
        </tr>
        <tr>
          <td>tag</td>
          <td>XML/HTML tag</td>
        </tr>
        <tr>
          <td>name</td>
          <td>name of an XML tag, the first word in an s-expression</td>
        </tr>
        <tr>
          <td>builtin-name</td>
          <td>s-expression name from the language standard library</td>
        </tr>
        <tr>
          <td>attr</td>
          <td>
            name of an attribute with no language defined semantics (keys in
            JSON, setting names in .ini), also sub-attribute within another
            highlighted object, like XML tag
          </td>
        </tr>
        <tr>
          <td>attribute</td>
          <td>
            name of an attribute followed by a structured value part, like CSS
            properties
          </td>
        </tr>
        <tr>
          <td>variable</td>
          <td>
            variable in a config or a template file, environment var expansion
            in a script
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <strong>Markup</strong>
          </td>
        </tr>
        <tr>
          <td>bullet</td>
          <td>list item bullet in text markup</td>
        </tr>
        <tr>
          <td>code</td>
          <td>code block in text markup</td>
        </tr>
        <tr>
          <td>emphasis</td>
          <td>emphasis in text markup</td>
        </tr>
        <tr>
          <td>strong</td>
          <td>strong emphasis in text markup</td>
        </tr>
        <tr>
          <td>formula</td>
          <td>mathematical formula in text markup</td>
        </tr>
        <tr>
          <td>link</td>
          <td>hyperlink in text markup</td>
        </tr>
        <tr>
          <td>quote</td>
          <td>quotation in text markup</td>
        </tr>
        <tr>
          <td colSpan="2">
            <strong>CSS</strong>
          </td>
        </tr>
        <tr>
          <td>selector-tag</td>
          <td>tag selector in CSS</td>
        </tr>
        <tr>
          <td>selector-id</td>
          <td>#id selector in CSS</td>
        </tr>
        <tr>
          <td>selector-class</td>
          <td>.class selector in CSS</td>
        </tr>
        <tr>
          <td>selector-attr</td>
          <td>[attr] selector in CSS</td>
        </tr>
        <tr>
          <td>selector-pseudo</td>
          <td>:pseudo selector in CSS</td>
        </tr>
        <tr>
          <td colSpan="2">
            <strong>Templates</strong>
          </td>
        </tr>
        <tr>
          <td>template-tag</td>
          <td>tag of a template language</td>
        </tr>
        <tr>
          <td>template-variable</td>
          <td>variable in a template language</td>
        </tr>
        <tr>
          <td colSpan="2">
            <strong>diff</strong>
          </td>
        </tr>
        <tr>
          <td>addition</td>
          <td>added or changed line in a diff</td>
        </tr>
        <tr>
          <td>deletion</td>
          <td>deleted line in a diff</td>
        </tr>
      </tbody>
    </KeyTable>
  </React.Fragment>
);

export default Key;
