import { Radio } from 'antd';
import { Input } from 'antd';
import { Button } from 'antd';
import {useEffect, useState} from "react";
import classes from "./Resume.module.css";
import { useNavigate } from "react-router-dom";
import ResumeCreator from "./ResumeCreator";

const Template = {
  "name": "",
  "position": "",
  "description": "",
  "contact":"",
  "education": "",
  "skills": "",
  "style": "timeline",
  "theme": "white"
}

function Lab10Main() {
  const [curTemplate, setTemplate] = useState(Template)

  let navigate = useNavigate();
  const routeChange = () =>{
    let path = `/resume`;
    navigate(path, { state: {...curTemplate} })
  }

  function handleChange(event) {
    setTemplate((previousValue) => ({
      ...previousValue,
      [event.target.name]: event.target.value
    }))
  }
  const { TextArea } = Input;
  return (
    <div className={classes.resume}>
      <h3>Введите ФИО</h3>
      <Input placeholder="ФИО" name="name" onChange={handleChange} value={curTemplate.name}/>
      <h3>Желаемая должность</h3>
      <Input placeholder="должность" name="position" onChange={handleChange} value={curTemplate.position}/>
      <h3>Связаться</h3>
      <Input name="contact" onChange={handleChange} value={curTemplate.contact}/>
      <h3>Образование</h3>
      <Input name="education" onChange={handleChange} value={curTemplate.education}/>
      <h3>Ваш опыт работы</h3>
      <TextArea rows={4} name="description" onChange={handleChange} value={curTemplate.description}/>
      <h3>Навыки</h3>
      <Input name="skills" onChange={handleChange} value={curTemplate.skills}/>
      <h3>Выберите цвет фона</h3>
      <div className={classes.radio}>
        <Radio.Group name="theme" onChange={handleChange} defaultValue="white">
          <Radio.Button value="white">Светлая</Radio.Button>
          <Radio.Button value="#223146">Тёмная</Radio.Button>
        </Radio.Group>
      </div>
      <h3>Выберите тип резюме</h3>
      <div className={classes.radio}>
        <Radio.Group name="style" onChange={handleChange} defaultValue="timeLine">
          <Radio.Button value="timeline">Временная линия</Radio.Button>
          <Radio.Button value="text">Сплошной текст</Radio.Button>
        </Radio.Group>
      </div>
      <div className={classes.btn}>
        <Button  onClick={routeChange} type="primary">Создать</Button>
      </div>
    </div>
  )
}
export default Lab10Main;