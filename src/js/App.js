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

const welcomeMsg = '# Borwser Based Markdown Editor \n**auto-save using localStorage**';

const useStateWithLocalStorage = localStorageKey => {
  const [value, setValue] = React.useState(
    localStorage.getItem(localStorageKey) || welcomeMsg
  );
  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [localStorageKey, value]);
  return [value, setValue];
};

function App() {
  const [value, setValue] = useStateWithLocalStorage('BroserNote')
  const onChange = value => setValue(value);
  const [selectedTab, setSelectedTab] = React.useState("write");

  return (
    <div className="editor">
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div className="container">
      <ReactMde
          value={value}
          onChange={onChange}
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
