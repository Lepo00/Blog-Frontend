import './EditArticle.scss';
import { Form, Input, Button, Select, Row, Col, Skeleton } from 'antd';
import { categories } from '../../models/Categories';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { detailArticle, updateArticle } from '../../store/actions';
import { RootState } from '../../store/reducers';
import { useHistory } from 'react-router-dom';
const { TextArea } = Input;
const { Option } = Select;

const ArticleEdit = (props: any) => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(detailArticle(props.match.params.id)) }, [dispatch, props]);
  const { detail } = useSelector((state: RootState) => state.articleReducers);
  const history = useHistory();

  function img() {
    const id = detail?.image?.id;
    return id ? "http://localhost:8080/blog/image/display/" + id : "../assets/no-image.png";
  }

  async function update(values: any) {
    detail.tags = [];
    values.tags.map((tag: string) => (detail.tags?.push({ code: tag })));
    values.tags = detail.tags;
    await dispatch(updateArticle({ ...detail, ...values }));
    history.push('/home');
  }

  return (
    <div className="EditArticle">
      <div className="editForm">
        <h1>Modifica articolo {detail.id}</h1>
        <img src={img()} alt="" />
        {detail.title ? <Form
          name="create-post"
          onFinish={update}
          size="large"
          initialValues={{ ...detail, tags: detail.tags?.map(tag => tag.code) }}
        >
          <Form.Item name="title" hasFeedback
            rules={[{ required: true, message: 'il titolo è obbligatorio' }, {
              min: 6, message: "il titolo deve avere almeno 6 caratteri"
            }]}
          >
            <Input placeholder="Titolo" />
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
          <Form.Item>
            <Button htmlType="submit">
              Modifica articolo
            </Button>
          </Form.Item>
        </Form> : <Skeleton active />}
      </div>
    </div>
  )
}

export default ArticleEdit;