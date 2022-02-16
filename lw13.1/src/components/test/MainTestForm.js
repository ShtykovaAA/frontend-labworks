import classes from "./MainTestForm.module.css";

function MainTestForm() {
  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="component">Что такое компонент?</label>
        <input type="text" required id="component" />
      </div>
      <div className={classes.control}>
        <label htmlFor="docs">Скиньте ссылку на документацию react</label>
        <input type="url" required id="docs" />
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
          <option value="wood">деревья</option>
        </select>
      </div>
      <div>
        <label htmlFor="hooks">useEffect нужен для того, чтобы</label>
        <div>
          <input type="checkbox" id="hooks" name="hooks" value="yes" />
          yes
        </div>
      </div>

      <div className={classes.actions}>
        <button>Отправить</button>
      </div>
    </form>
  );
}
export default MainTestForm;
