import React from 'react';
import ReactMde from 'react-mde';
import ReactDOM from "react-dom";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";

import logo from './logo.png';
import './App.css';

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
});


function App() {
  const [value, setValue] = React.useState("**Borwser Based Markdown Editor**");
  const [selectedTab, setSelectedTab] = React.useState("write");
  const [minEditorHeight] = React.useState(400);
  const [minPreviewHeight] = React.useState(400);

  return (
    <div className="editor">
      <header className="header">
        <img src={logo} className="App-logo" width="400" alt="logo" />
      </header>

      <div className="container">
        <ReactMde
          value={value}
          onChange={setValue}
          selectedTab={selectedTab}
          onTabChange={setSelectedTab}
          generateMarkdownPreview={markdown =>
            Promise.resolve(converter.makeHtml(markdown))
          }
          minEditorHeight={minEditorHeight}
          minPreviewHeight={minPreviewHeight}
        />
      </div>

    </div>
  );
}

export default App;
