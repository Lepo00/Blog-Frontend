import './EditProfile.scss';
import { Form, Input, Button, Tooltip } from 'antd';
import { UserOutlined, LockOutlined, RedditOutlined, PhoneOutlined, QuestionCircleOutlined, MailOutlined, HomeOutlined } from '@ant-design/icons';
import { RootState } from '../../store/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { myProfile, updateProfile } from '../../store/actions';
import { User } from '../../models';
const { TextArea } = Input;

const EditProfile = () => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(myProfile()) }, [dispatch]);
  let { profile } = useSelector((state: RootState) => state.userReducers);

  function createUser(values: any) {
    const merged = { ...profile, ...values };
    console.log(merged as User);
    dispatch(updateProfile(merged));
  }

  return (
    <div className="EditProfile">
      <Form name="register"
        onFinish={createUser}
        scrollToFirstError
        size="large"
        className="editForm"
        initialValues={profile}>
        <h1>Modifica il tuo profilo</h1>
        <Form.Item name="fullName" hasFeedback
          rules={[{ required: true, message: 'Nome completo obbligatorio!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Nome Completo" />
        </Form.Item>
        <Form.Item name="email" hasFeedback
          rules={[
            { required: true, message: 'Email obbligatoria!' },
            { type: 'email', message: 'Formato email non valido!', },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="Email" />
        </Form.Item>
        <Form.Item name="username" hasFeedback
          rules={[{ required: true, message: 'Username obbligatorio!', whitespace: true }]}
        >
          <Input disabled placeholder="Username" prefix={<RedditOutlined />} suffix={
            <Tooltip title="Il nome con cui ti vedranno gli altri utenti">
              <QuestionCircleOutlined />
            </Tooltip>
          } />
        </Form.Item>
        <Form.Item name="phone" hasFeedback>
          <Input placeholder="Phone Number" prefix={<PhoneOutlined />} />
        </Form.Item>
        <Form.Item name="address" hasFeedback>
          <Input placeholder="Indirizzo" prefix={<HomeOutlined />} />
        </Form.Item>
        <Form.Item name="password" hasFeedback
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>
        <Form.Item name="description" hasFeedback
          rules={[{ min: 200, message: "" }]}>
          <TextArea showCount allowClear minLength={100} placeholder="Descrizione" autoSize />
        </Form.Item>
        <Form.Item className="submit">
          <Button type="primary" htmlType="submit" shape="round" block={true}>Modifica Profilo</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default EditProfile;