import './Login.scss';
import { Theme } from "react-switch-theme";a
import { Form, Input, Button, Checkbox, Switch } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useContext} from 'react';

const Login = () => {
  const [theme, toggleTheme] = useContext(Theme);

  function onFinish(values: { username: string, password: string, remember: boolean }) {
    console.log('Success:', values);
  };
  return (
    <div className="Login">
      <img src={theme==="darkTheme"? "./assets/logo-light.png":"./assets/logo-dark.png"} className="logo" alt=""/>
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