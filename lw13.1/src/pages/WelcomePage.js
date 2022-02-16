import { Link } from "react-router-dom";
import classes from "../components/Pages.module.css";

function WelcomePage() {
  return (
    <div className={classes.main}>
      <div className={classes.navigator}>
        <h2 className={classes.linktitle}>Содержание</h2>
        <Link to="/test">Тестирование</Link>
      </div>
    </div>
  );
}
export default WelcomePage;
