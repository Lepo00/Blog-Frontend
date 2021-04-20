import { Button } from 'antd';
import './Profile.scss';

const Profile = () => {
  return (
    <div className="Profile">
      <p className="title">Benvenuto </p>
      <p className="nome">Luca</p>
      <img src="https://i.stack.imgur.com/34AD2.jpg" alt="logo" className="logo"/>
        <table>
          <tr>
            <td className="sx">Nome</td>
            <td className="dx">Luca</td>
          </tr>
          <tr>
            <td className="sx">Cognome</td>
            <td className="dx">Leporati</td>
          </tr>
          <tr>
            <td className="sx">Sesso</td>
            <td className="dx">Maschio</td>
          </tr>
          <tr>
            <td className="sx">Email</td>
            <td className="dx">luca@mail.com</td>
          </tr>
          <tr>
            <td className="sx">Telefono</td>
            <td className="dx">3701334021</td>
          </tr>
        </table>
        <Button size="large" type="primary" shape="round">Modifica</Button>
    </div>
  )
}

export default Profile;