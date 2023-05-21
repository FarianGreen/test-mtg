import { setLanguageAction } from "./actions";
import { connect } from "react-redux";

const Menu = ({ languages, changeLanguage }) => {
  return (
    <div class="dropdown">
      <button className="btn btn-primary dropdown-toggle">
        Select Language
      </button>
      <div class="dropdown-menu">
        {languages.map((item) => (
          <button
            key={item.id}
            className="dropdown-item"
            onClick={() => {
              changeLanguage(item.lang);
            }}
          >
            {item.lang}
          </button>
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  languages: state.moveWithLanguages.languages
});
const mapDispatchToProps = {
  changeLanguage: setLanguageAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
