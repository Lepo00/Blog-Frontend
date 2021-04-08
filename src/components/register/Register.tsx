import './Register.scss';
import { Input, Button } from 'antd';
import { UserOutlined, KeyOutlined } from '@ant-design/icons';

const Register = () => {
  return (
    <div className="Register">
       <Input placeholder="default size" prefix={<UserOutlined />} />
       <Input.Password placeholder="input password" prefix={<KeyOutlined />}/>
       <Button type="primary">Primary Button</Button>
    </div>
  )
}
Register.propTypes = {
}

export default Register;