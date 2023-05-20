import React from "react";
import circle from "./img/circle.png";
import "./app.css";
import Menu from "./drop-menu";
import Watch from "./watch";
import data from "../src/data/data.json";
import Main from "./main";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    const selectedLang = this.props.selectLanguage;
    const ruRew = Object.values(data.ru);
    const enRew = Object.values(data.en);
    return (
      <>
        <div className="header">
          <img className="header__img" src={circle} alt="#" />
          <Menu/>
          <Watch />
        </div>
        <div>
          <Main reviews={selectedLang === "Ru" ? ruRew : enRew} />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  selectLanguage: state.moveWithLanguages.selectLanguage,
});
export default connect(mapStateToProps)(App);
