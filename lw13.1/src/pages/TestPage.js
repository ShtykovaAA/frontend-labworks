import Timer from "../components/Timer";
import MainTestForm from "../components/test/MainTestForm";
import dayjs from "dayjs";
import classes from "../components/Pages.module.css";

function TestPage() {
  return (
    <div>
      <div className={classes.timer}>
        <Timer countdownTimestampMs={dayjs().add(1, "m").valueOf()} />
      </div>
      <div className={classes.main}>
        <h2 className={classes.header}>Тестирование</h2>
        <div className={classes.body}>
          <MainTestForm />
          {/* <MainTestForm />
          <MainTestForm />
          <MainTestForm /> */}
        </div>
      </div>
    </div>
  );
}

export default TestPage;
