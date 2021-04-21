import { Button, Upload } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { myProfile, uploadPhoto } from '../../store/actions';
import { RootState } from '../../store/reducers';
import './Profile.scss';

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(myProfile()) }, [dispatch]);
  const { profile } = useSelector((state: RootState) => state.userReducers);

  function img(): string {
    if (profile.photo)
      return "http://localhost:8080/blog/image/display/" + profile.photo.id
    else
      return "https://i.stack.imgur.com/34AD2.jpg";
  }

  function ciao(info: any) {
    let formData = new FormData();
    formData.append("photo", info.file);
    dispatch(uploadPhoto(formData))
  }

  return (
    <div className="Profile">
      <div className="card">
        <p className="title">Benvenuto </p>
        <p className="nome">{profile.fullName}</p>
        <Upload maxCount={1} accept="image/png, image/jpeg" showUploadList={false} beforeUpload={() => false} onChange={ciao}>
          <img src={img()} alt="logo" className="logo" />
        </Upload>
        <table>
          <tbody>
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
          </tbody>
        </table>
        <Link to="/edit-profile">
          <Button size="large" type="primary" shape="round">Modifica</Button>
        </Link>
      </div>
    </div>
  )
}

export default Profile;