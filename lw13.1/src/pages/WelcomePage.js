import { Link } from "react-router-dom";
import classes from "../components/Pages.module.css";
import { useState } from "react";

function WelcomePage() {
  const [testIsOpen, setTestOpen] = useState(false);

  function openTest() {
    setTestOpen(true);
  }

  return (
    <div className={classes.main}>
      <Link to="/test" onClick={openTest}>
        Тестирование по реакту
      </Link>
    </div>
  );
}
export default WelcomePage;
