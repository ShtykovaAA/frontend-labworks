import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Лабораторные работы</div>
    </header>
  );
}
export default Header;
