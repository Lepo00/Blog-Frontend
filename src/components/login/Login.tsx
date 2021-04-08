import './Login.scss';
//@ts-ignore
import { Theme } from "react-switch-theme";
import { Form, Input, Button, Checkbox, Switch } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';

const Login = () => {
  const onFinish = (values: { username: string, password: string, remember: boolean }) => {
    console.log('Success:', values);
  };
  // eslint-disable-next-line
  const [theme, toogleTheme] = useContext(Theme);
  // eslint-disable-next-line
  const [logo, setLogo] = useState('./assets/logo-dark.png');

  function toggleTheme() {
    toogleTheme();
    if(logo==='./assets/logo-light.png')
      setLogo('./assets/logo-dark.png');
    else
      setLogo('./assets/logo-light.png');
  }
  return (
    <div className="Login">
      <img src={logo} alt="" className="logo" />
      <h1>Login</h1>
      <Form
        size="large"
        name="login"
        initialValues={{ remember: false }}
        onFinish={onFinish}
      >
        <Form.Item name="username" hasFeedback
          rules={[{ required: true, message: 'Username obbligatorio!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item name="password" hasFeedback
          rules={[{ required: true, message: 'Password obbligatoria!' }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked" className="remember">
          <Checkbox>Ricordami</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="submit" >Login</Button>
        </Form.Item>
      </Form>
      <Switch
        checkedChildren={<span className="material-icons">dark_mode</span>}
        unCheckedChildren={<span className="material-icons">light_mode</span>}
        defaultChecked
        onChange={toggleTheme}
        className="switch"
      />
      <p className="register">Non sei ancora registrato? <Link to="register">Registrati ora!</Link></p>
    </div>
  )
}

export default Login;