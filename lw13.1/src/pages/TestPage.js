import Timer from "../components/Timer";
import MainTestForm from "../components/test/MainTestForm";
import classes from "../components/Pages.module.css";

function TestPage() {
  return (
    <div>
      <div >
        <div className={classes.body}>
          <MainTestForm />
        </div>
      </div>
    </div>
  );
}

export default TestPage;
