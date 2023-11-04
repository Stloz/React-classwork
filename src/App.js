import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";

function App() {
  const list = [
    { id: 1, text: "Перший елемент", link: "/first" },
    { id: 2, text: "Другий елемент", link: "/second" },
    { id: 3, text: "Третій елемент", link: "/last" },
  ];

  const handleLinkClick = () => {
    window.confirm("Вийти?");
  };

  return (
    <div className="App">
      <header className="App-header">
        <Link text="My Link" link="www.link.com" onClick={handleLinkClick} />

        {list.map((item) => (
          <Fragment key={item.id}>
            <Link {...item} />
          </Fragment>
        ))}

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function Link({ text, link, onClick }) {
  const handleClick = () => {
    onClick();
    window.location.assign(link);
  };

  return (
    <span className="App-link" onClick={handleClick}>
      {text}
    </span>
  );
}

export default App;
