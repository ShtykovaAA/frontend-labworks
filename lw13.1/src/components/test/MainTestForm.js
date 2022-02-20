import classes from "./MainTestForm.module.css";
import { useEffect, useState } from "react";
import Select from "react-select";

function getFormValues() {
  const storedValues = localStorage.getItem("form");
  if (!storedValues) {
    return {
      question1: "",
      question2: "",
      question3: "",
      question4: "",
      question5: "",
      question6: "",
      question7: "",
      question8: "",
    };
  }
  return JSON.parse(storedValues);
}

function MainTestForm() {
  const [formValues, setValues] = useState(getFormValues);
  useEffect(() => {
    localStorage.setItem("form", JSON.stringify(formValues));
  }, [formValues]);

  function submitHandler(event) {
    event.preventDefault();
    alert(JSON.stringify(formValues));
  }

  function handleChange(event) {
    setValues((previousValues) => ({
      ...previousValues,
      [event.target.name]: event.target.value,
    }));
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="question1">1. Что такое компонент?</label>
        <input
          type="text"
          name="question1"
          required
          id="question1"
          onChange={handleChange}
          value={formValues.question1}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="">2. Почему стоит изучать react?</label>
        <select
          name="question2"
          onChange={handleChange}
          value={formValues.question2}
        >
          <option value="fashion">Это модно</option>
          <option value="jsx">Из-за JSX и документации</option>
        </select>
      </div>
      <div className={classes.control}>
        <label htmlFor="question3">
          3. Скиньте ссылку на документацию react
        </label>
        <input
          type="url"
          name="question3"
          required
          id="question3"
          onChange={handleChange}
          value={formValues.question3}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="question4">
          4. Расскажите, на какие компоненты вы бы разделили главную страницу ВК
        </label>
        <textarea
          type="text"
          name="question4"
          required
          id="question4"
          rows="5"
          onChange={handleChange}
          value={formValues.question4}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="question5">
          5. Функции, с помощью которых можно "подцепитсья" к состоянию и
          методам жизненного цикла React из функциональных компонентов
          называются
        </label>
        <select
          name="question5"
          onChange={handleChange}
          value={formValues.question5}
        >
          <option value="props">Пропсы</option>
          <option value="hook">Хуки</option>
          <option value="wood">Деревья</option>
        </select>
      </div>
      <div className={classes.control_checkbox}>
        <label htmlFor="hooks">6. useEffect нужен для того, чтобы...</label>
        <div
          name="question6"
          onChange={handleChange}
          value={formValues.question6}
        >
          <input
            type="checkbox"
            id="useState"
            value="useState"
            name="useState"
          />
          добавлять состояние react к компонентам-функциям
          <br></br>
          <input type="checkbox" id="useRef" value="useRef" name="useRef" />
          для работы с дочерними элементами
          <br></br>
          <input
            type="checkbox"
            id="useEffect"
            value="useEffect"
            name="useEffect"
          />
          использовать таймер
          <br></br>
          <br></br>
        </div>
      </div>
      <div className={classes.control}>
        <label htmlFor="question7">
          7. Объясните, почему фронтэнд разработчики используют TypeScript
        </label>
        <textarea
          type="text"
          name="question7"
          required
          id="question7"
          rows="5"
          onChange={handleChange}
          value={formValues.question7}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="question8">8. Это просто радиокнопка</label>
        <div
          name="question8"
          onChange={handleChange}
          value={formValues.question8}
        >
          <input type="radiobox" value="выбери меня" name="me" />
          <input type="radiobox" id="noMe" value="нет, меня" name="noMe" />
          <input type="radiobox" id="why" value="почему не меня?" name="why" />
        </div>
      </div>
      <div className={classes.actions}>
        <button>Отправить</button>
      </div>
    </form>
  );
}
export default MainTestForm;
