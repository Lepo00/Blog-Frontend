import './About.scss';
import { Button, message } from 'antd';
import { RiseOutlined } from '@ant-design/icons';

function About(props: any) {

    function wip() {
        message.info({
            content: 'Questa pagina è in fase di costruzione, torna più tardi',
            icon: <RiseOutlined style={{ "fontSize": "30px" }} />,
            style: { fontSize: '25px', },
        });
    }

    return (
        <div className="About">
            <h1>Chi sono</h1>
            <Button size="large" onClick={wip}>Cliccami</Button>
        </div>
    )
}

export default About;