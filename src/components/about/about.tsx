import './About.scss';
import { Button, message } from 'antd';
import { RiseOutlined } from '@ant-design/icons';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

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
            <h1>WIP!</h1>
            <CKEditor
                    editor={ ClassicEditor }
                    data=""
                    onChange={ ( event:any, editor:any ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                />
        </div>
    )
}

export default About;