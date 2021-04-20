import './CreateArticle.scss';
import { Form, Input, Button, Checkbox, Select, Upload, Row, Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { createArticle } from '../../store/actions';
import { Article } from '../../models';
import { categories } from '../../models/Categories';
const { TextArea } = Input;
const { Option } = Select;

const CreateArticle = () => {
  const dispatch = useDispatch();

  const create = (values: any) => {
    const article: Article = {
      "title": values.title,
      "text": values.text,
      "categories": values.categories,
      "tags": [],
    };
    values.tags?.map((tag: string) => (
      article.tags?.push({ code: tag })
    ))

    let formData = new FormData();
    if (values.image)
      formData.append("image", values.image.file);
    formData.append('article', new Blob([JSON.stringify(article)], { type: "application/json" }));

    dispatch(createArticle(formData));
  };

  return (
    <div className="CreatePost">
      <div className="form-create">
        <h1>Crea un nuovo articolo</h1>
        <Form
          encType="multipart/form-data"
          name="create-post"
          onFinish={create}
          initialValues={{ "anonymous": false, "blockComments": false, "image": null }}
          size="large"
        >
          <Form.Item name="title" hasFeedback
            rules={[{ required: true, message: 'il titolo è obbligatorio' }, {
              min: 6, message: "il titolo deve avere almeno 6 caratteri"
            }]}
          >
            <Input placeholder="Titolo" />
          </Form.Item>
          <Form.Item name="image" valuePropName="ciao">
            <Upload maxCount={1} accept="image/png, image/jpeg" listType="picture" beforeUpload={() => false}>
              <Button icon={<UploadOutlined />}>Seleziona l'immagine del post</Button>
            </Upload>
          </Form.Item>
          <Row>
            <Col span={12}>
              <Form.Item name="categories" hasFeedback
                rules={[{ required: true, message: 'Inserisci almeno una categoria' }]}>
                <Select
                  mode="multiple"
                  maxLength={2}
                  allowClear
                  placeholder="Seleziona le categorie"
                  optionLabelProp="label"
                >
                  {categories.map((category, i) => (
                    <Option value={category.value} label={category.name} key={i}>
                      <div className="demo-option-label-item">{category.name}</div>
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="tags" hasFeedback>
                <Select maxTagCount={6} allowClear mode="tags" placeholder="Tags" />
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

export default CreateArticle;