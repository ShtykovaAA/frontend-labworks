import classes from "./MainTestForm.module.css";
import { useRef } from "react";

function MainTestForm() {
  const question1 = useRef();
  const question2 = useRef();
  const question3 = useRef();
  const question4 = useRef();
  const question5 = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredQuestion1 = question1.current.value;
    const enteredQuestion2 = question1.current.value;
    const enteredQuestion3 = question1.current.value;
    const enteredQuestion4 = question1.current.value;
    const enteredQuestion5 = question1.current.value;

    const answers = {
      enteredQuestion1,
      enteredQuestion2,
      enteredQuestion3,
      enteredQuestion4,
      enteredQuestion5,
    };
    console.log(answers);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="component">Что такое компонент?</label>
        <input type="text" required id="component" ref={question1} />
      </div>
      <div className={classes.control}>
        <label htmlFor="docs">Скиньте ссылку на документацию react</label>
        <input type="url" required id="docs" ref={question2} />
      </div>
      <div className={classes.control}>
        <label htmlFor="description">
          Расскажите, на какие компоненты вы бы разделили главную страницу ВК
        </label>
        <textarea type="text" required id="description" rows="5" />
      </div>
      <div className={classes.control}>
        <label htmlFor="description">
          Функции, с помощью которых можно "подцепитсья" к состоянию и методам
          жизненного цикла React из функциональных компонентов называются
        </label>
        <select>
          <option selected value="props">
            Пропсы
          </option>
          <option value="hook">Хуки</option>
          <option value="wood">Деревья</option>
        </select>
      </div>
      <div className={classes.control_checkbox}>
        <label htmlFor="hooks">useEffect нужен для того, чтобы...</label>
        <div>
          <input type="checkbox" id="hooks" name="useState" value="yes" />
          добавлять состояние react к компонентам-функциям
          <br></br>
          <input type="checkbox" id="hooks" name="useRef" value="yes" />
          для работы с дочерними элементами
          <br></br>
          <input type="checkbox" id="hooks" name="useEffect" value="yes" />
          использовать таймер
        </div>
      </div>

      <div className={classes.actions}>
        <button>Отправить</button>
      </div>
    </form>
  );
}
export default MainTestForm;
