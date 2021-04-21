import { Button } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { myProfile } from '../../store/actions';
import { RootState } from '../../store/reducers';
import './Profile.scss';

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(myProfile()) }, [dispatch]);
  const { profile } = useSelector((state: RootState) => state.userReducers);

  return (
    <div className="Profile">
      <p className="title">Benvenuto </p>
      <p className="nome">{profile.fullName}</p>
      <img src="https://i.stack.imgur.com/34AD2.jpg" alt="logo" className="logo" />
      <table>
        <tr>
          <td className="sx">Username</td>
          <td className="dx">{profile.username}</td>
        </tr>
        <tr>
          <td className="sx">Email</td>
          <td className="dx">{profile.email}</td>
        </tr>
        <tr>
          <td className="sx">Telefono</td>
          <td className="dx">{profile.phone}</td>
        </tr>
        <tr>
          <td className="sx">Ruolo</td>
          <td className="dx">{profile.role}</td>
        </tr>
        <tr>
          <td className="sx">Indirizzo</td>
          <td className="dx">{profile.address}</td>
        </tr>
      </table>
      <Button size="large" type="primary" shape="round">Modifica</Button>
    </div>
  )
}

export default Profile;