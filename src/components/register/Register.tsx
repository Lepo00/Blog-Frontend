import './Register.scss';
import { Theme } from "react-switch-theme";
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Checkbox, Button, AutoComplete, Switch, Tooltip } from 'antd';
import { UserOutlined, LockOutlined, RedditOutlined, PhoneOutlined, QuestionCircleOutlined } from '@ant-design/icons';

const Register = () => {
  const [options, setOptions] = useState<{ value: string }[]>([]);
  const [theme, toggleTheme] = useContext(Theme);

  function onFinish(values: any) {
    console.log('okkkk', values);
  }
  const onSearch = (searchText: string) => {
    setOptions(
      !searchText || searchText.indexOf("@") !== -1 ? [] :
        [{ value: searchText + "@gmail.com" }, { value: searchText + "@hotmail.com" }, { value: searchText + "@libero.it" }],
    );
  };
  return (
    <div className="Register">
      <Form name="register" onFinish={onFinish} scrollToFirstError size="large" className="register-form">
        <img src={theme==="darkTheme"? "./assets/logo-light.png":"./assets/logo-dark.png"} className="logor" alt=""/>
        <h1>Registrazione</h1>
        <Form.Item name="fullName" hasFeedback
          rules={[{ required: true, message: 'Please input your nickname!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Nome completo" />
        </Form.Item>
        <Form.Item name="email" hasFeedback className="mail"
          rules={[{ type: 'email', message: 'The input is not valid E-mail!' },
          { required: true, message: 'Please input your E-mail!' },]}
        >
          <AutoComplete options={options} onSearch={onSearch} placeholder="Email" />
        </Form.Item>
        <Form.Item name="nickname" hasFeedback
          rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
        >
          <Input placeholder="Nickname" prefix={<RedditOutlined />} suffix={
            <Tooltip title="Il nome con cui ti vedranno gli altri utenti">
              <QuestionCircleOutlined />
            </Tooltip>
          } />
        </Form.Item>
        <Form.Item name="phone" hasFeedback
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
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
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
          ]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Confirm Password" />
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