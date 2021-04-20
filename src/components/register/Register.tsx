import './Register.scss';
import { Theme } from "react-switch-theme";
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Checkbox, Button, AutoComplete, Switch, Tooltip } from 'antd';
import { UserOutlined, LockOutlined, RedditOutlined, PhoneOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { register } from '../../store/actions';

const Register = () => {
  const dispatch = useDispatch();
  const [options, setOptions] = useState<{ value: string }[]>([]);
  const [theme, toggleTheme] = useContext(Theme);

  function createUser(values: any) {
    console.log(values);
    dispatch(register(values))
  }
  const onSearch = (searchText: string) => {
    setOptions(
      !searchText || searchText.indexOf("@") !== -1 ? [] :
        [{ value: searchText + "@gmail.com" }, { value: searchText + "@hotmail.com" }, { value: searchText + "@libero.it" }],
    );
  };
  return (
    <div className="Register">
      <Form name="register" onFinish={createUser} scrollToFirstError size="large" className="register-form">
        <img src={theme === "darkTheme" ? "./assets/logo-light.png" : "./assets/logo-dark.png"} className="logor" alt="" />
        <h1>Registrazione</h1>
        <Form.Item name="fullName" hasFeedback
          rules={[{ required: true, message: 'Nome completo obbligatorio!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Nome completo" />
        </Form.Item>
        <Form.Item name="email" hasFeedback className="mail"
          rules={[
            { type: 'email', message: 'Formato Email non valido!' },
            { required: true, message: 'Email obbligatoria!' },
          ]}
        >
          <AutoComplete options={options} onSearch={onSearch} placeholder="Email" />
        </Form.Item>
        <Form.Item name="username" hasFeedback
          rules={[{ required: true, message: 'Username obbligatorio!', whitespace: true }]}
        >
          <Input placeholder="Username" prefix={<RedditOutlined />} suffix={
            <Tooltip title="Il nome con cui ti vedranno gli altri utenti">
              <QuestionCircleOutlined />
            </Tooltip>
          } />
        </Form.Item>
        <Form.Item name="phone" hasFeedback>
          <Input placeholder="Phone Number" prefix={<PhoneOutlined />} />
        </Form.Item>
        <Form.Item name="password" hasFeedback
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>
        <Form.Item name="confirm" hasFeedback
          dependencies={['password']}
          rules={[{ required: true, message: 'Conferma la tua password!' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Le password non coincidono!'));
            },
          }),
          ]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Conferma Password" />
        </Form.Item>
        <Form.Item name="agreement" valuePropName="checked" className="agreement"
          rules={[{ validator: (_, value) => value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')) },
          ]}
        >
          <Checkbox>
            <p>Ho letto le <Link to="/condizioni">condizioni di utilizzo</Link></p>
          </Checkbox>
        </Form.Item>
        <Switch
          checkedChildren={<span className="material-icons">dark_mode</span>}
          unCheckedChildren={<span className="material-icons">light_mode</span>}
          defaultChecked
          onChange={toggleTheme}
          className="switchr"
        />
        <Form.Item className="submit">
          <Button type="primary" htmlType="submit" >Register</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Register;