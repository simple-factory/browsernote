import React from 'react';
import ReactMde from 'react-mde';
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";

import logo from '../img/logo.png';

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
});


function App() {
  const [value, setValue] = React.useState("**Borwser Based Markdown Editor**");
  const [selectedTab, setSelectedTab] = React.useState("write");

  return (
    <div className="editor">
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
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
        />
      </div>

      <footer>
        <a href="https://www.websitepolicies.com/policies/view/1PIUhUmB">Privacy Policy</a>
      </footer>

    </div>
  );
}

export default App;
