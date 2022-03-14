import { Menu } from 'antd';
import 'antd/dist/antd.css';
import { MailOutlined, AppstoreOutlined, } from '@ant-design/icons';
import {Link} from "react-router-dom";
import {useState} from "react";


export function MenuForm() {
  const { SubMenu } = Menu;
  function handleClick(e) {
    console.log('click', e);
  }
  const [testIsOpen, setTestOpen] = useState(false);
  function openTest() {
    setTestOpen(true);
  }
  return (
  <Menu onClick={handleClick} style={{ width: 256 }} mode="vertical">
    <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Лабораторные работы">
      <Menu.ItemGroup title="Обязательные">
        <Menu.Item key="1"><Link to="/test" onClick={openTest}>
          Тестирование по реакту
        </Link></Menu.Item>
        <Menu.Item key="2"><Link to="/time" onClick={openTest}>
          Резюме
        </Link></Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup title="1-4">
        <Menu.Item key="3">Лаб1</Menu.Item>
        <Menu.Item key="4">Лаб2</Menu.Item>
        <Menu.Item key="13">Лаб3</Menu.Item>
        <Menu.Item key="14">Лаб4</Menu.Item>
      </Menu.ItemGroup>
    </SubMenu>
    <SubMenu key="sub2" icon={<MailOutlined />} title="Связаться">
      <Menu.Item key="5"><a href="https://github.com/ShtykovaAA">github</a></Menu.Item>
      <Menu.Item key="6"><a href="https://www.linkedin.com/in/%D0%B0%D0%BD%D0%BD%D0%B0-%D1%88%D1%82%D1%8B%D0%BA%D0%BE%D0%B2%D0%B0-61982522a/">linkedin</a></Menu.Item>
      <SubMenu key="sub3" title="Личное">
        <Menu.Item key="7"><a href="https://t.me/AnnSht">tg</a></Menu.Item>
        <Menu.Item key="8"><a href="https://www.instagram.com/tykovka._/">inst</a></Menu.Item>
      </SubMenu>
    </SubMenu>
  </Menu>
  )
}
