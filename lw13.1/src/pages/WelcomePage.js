import classes from "../components/Pages.module.css";
import { MenuForm } from "../components/layout/MenuForm";
import Clock from "../components/Lab10/Clock";

function WelcomePage() {
  return (
    <div className={classes.main}>
      <div className={classes.rightSide}>
        <div>
          Текущая дата
          <br/>
          {new Date().toLocaleDateString()}
        </div>
        <div>
          Текущее время
          <Clock/>
        </div>
        {/*<h2> Здесь какой-то заголовок.</h2>*/}
      </div>
      <div className={classes.menu}>
        <MenuForm/>
      </div>
    </div>
  );
}
export default WelcomePage;
