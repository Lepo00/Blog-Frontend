import './CreatePost.scss';
import { useState } from 'react';
import { Form, Input, Button, Checkbox, Select, Upload, Row } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const { TextArea } = Input;
const { Option } = Select;

const CreatePost = () => {
  const [categories] = useState(['Smartphone', 'Tablet', 'Computer', 'Tecnologia']);
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <div className="CreatePost">
      <h1>Crea un nuovo articolo</h1>
      <Form
        name="create-post"
        initialValues={{}}
        onFinish={onFinish}
        size="large"
      >
        <Form.Item name="title"
          rules={[{ required: true, message: 'il titolo è obbligatorio' }]}
        >
          <Input placeholder="Titolo" />
        </Form.Item>
        <Form.Item name="image" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload maxCount={1} accept="image/png, image/jpeg" listType="picture">
            <Button icon={<UploadOutlined />}>Seleziona l'immagine del post</Button>
          </Upload>
        </Form.Item>
        <Form.Item name="categories"  
        rules={[{ required: true, message: 'Inserisci almeno una categoria' }]}>
          <Select
            mode="multiple"
            placeholder="Seleziona le categorie"
            optionLabelProp="label"
          >
            {categories.map((category)=>(
              <Option value={category} label={category}>
              <div className="demo-option-label-item">{category}</div>
            </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name="tags">
          <Select mode="tags" placeholder="Tags" />
        </Form.Item>
        <Form.Item>
          <TextArea placeholder="Testo" autoSize />
        </Form.Item>
        <Row>
          <Form.Item name="blockComments" valuePropName="checked">
            <Checkbox>Disattiva i commenti</Checkbox>
          </Form.Item>
          <Form.Item name="anonymous" valuePropName="checked">
            <Checkbox>Articolo anonimo</Checkbox>
          </Form.Item>
        </Row>
        <Form.Item>
          <Button htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreatePost;