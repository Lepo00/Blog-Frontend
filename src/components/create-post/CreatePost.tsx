import './CreatePost.scss';
import { useState } from 'react';
import { Form, Input, Button, Checkbox, Select, Upload, Row, Col } from 'antd';
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
      <div className="form-create">
        <h1>Crea un nuovo articolo</h1>
        <Form
          name="create-post"
          initialValues={{}}
          onFinish={onFinish}
          size="large"
        >
          <Form.Item name="title" hasFeedback
            rules={[{ required: true, message: 'il titolo è obbligatorio' }, {
              min: 6, message: "il titolo deve avere almeno 6 caratteri"
            }]}
          >
            <Input placeholder="Titolo" />
          </Form.Item>
          <Form.Item name="image" valuePropName="fileList" getValueFromEvent={normFile}>
            <Upload maxCount={1} accept="image/png, image/jpeg" listType="picture">
              <Button icon={<UploadOutlined />}>Seleziona l'immagine del post</Button>
            </Upload>
          </Form.Item>
          <Row>
            <Col span={12}>
              <Form.Item name="categories" hasFeedback
                rules={[{ required: true, message: 'Inserisci almeno una categoria' }]}>
                <Select
                  mode="multiple"
                  placeholder="Seleziona le categorie"
                  optionLabelProp="label"
                >
                  {categories.map((category) => (
                    <Option value={category} label={category}>
                      <div className="demo-option-label-item">{category}</div>
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
            <Form.Item name="tags" hasFeedback>
              <Select mode="tags" placeholder="Tags" />
            </Form.Item>
            </Col>
          </Row>
          <Form.Item name="text" hasFeedback
            rules={[{ required: true, message: 'Inserisci il testo' }, { min: 200, message: "" }]}>
            <TextArea showCount allowClear minLength={200} placeholder="Testo" autoSize />
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
              Crea articolo
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default CreatePost;