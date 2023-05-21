import React from "react";
import circle from "./img/circle.png";
import "./app.css";
import Menu from "./drop-menu";
import Watch from "./watch";
import Main from "./main";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="header">
          <img className="header__img" src={circle} alt="#" />
          <Menu />
          <Watch />
        </div>
        <div>
          <Main />
        </div>
      </>
    );
  }
}

export default App;
