import './Login.scss';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { Link, Redirect } from 'react-router-dom';
import { Theme } from "react-switch-theme";
import { Form, Input, Button, Checkbox, Switch } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { login } from '../../store/actions/userActions';

const Login = () => {
  const dispatch = useDispatch();
  const [theme, toggleTheme] = useContext(Theme);
  const {logged} = useSelector((state: RootState) => state.userReducers);

  function Login(values: { username: string, password: string, remember: boolean }) {
    dispatch(login(values));
  };
  return (
    <div className="Login">
      {logged ? <Redirect to="/home"/> : null}
      <img src={theme === "darkTheme" ? "./assets/logo-light.png" : "./assets/logo-dark.png"} className="logo" alt="" />
      <h1>Login</h1>
      <Form
        size="large"
        name="login"
        initialValues={{ remember: false }}
        onFinish={Login}
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