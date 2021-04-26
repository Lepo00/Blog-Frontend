import './ItemCrud.scss';
import { Button, Tooltip, Modal } from 'antd';
import { Link } from 'react-router-dom'
import { Article } from '../../../../models';
import { DeleteOutlined, SearchOutlined, FormOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { deleteArticle } from '../../../../store/actions';
import { useDispatch } from 'react-redux';
const { confirm } = Modal;

const ItemCrud = (props: { article: Article }) => {
  const dispatch = useDispatch();

  function img() {
    const id  = props.article?.image?.id;
    return id ? "http://localhost:8080/blog/image/display/" + id : "../assets/no-image.png";
  }

  function showPromiseConfirm(id: number) {
    confirm({
      title: 'Sicuro di voler eliminare questo articolo?',
      icon: <ExclamationCircleOutlined />,
      content: 'Queesto articolo non potrà essere ripristinato',
      cancelText: 'Annulla',
      onOk() { removeArticle(id) },
      onCancel() { },
    });
  }

  function removeArticle(id: number) {
    dispatch(deleteArticle(id));
  }

  return (
    <div className="ItemCrud">
      <div className="image">
        <img src={img()} alt="" />
      </div>
      <div className="title">
        <h2>{props.article.title}</h2>
      </div>
      <div className="buttons">
        <Link to={"/article/" + props.article.id}>
          <Tooltip title="Dettaglio articolo">
            <Button shape="circle" size="large" icon={<SearchOutlined />} />
          </Tooltip>
        </Link>
        <Link to={"/edit-article/" + props.article.id}>
          <Tooltip title="Modifica Articolo">
            <Button type="primary" shape="circle" size="large" icon={<FormOutlined />} />
          </Tooltip>
        </Link>
        <Tooltip title="Elimina articolo" color="red">
          <Button onClick={() => showPromiseConfirm(props.article.id!)} type="primary" danger shape="circle" size="large" icon={<DeleteOutlined />} />
        </Tooltip>
      </div>

    </div>
  )
}

export default ItemCrud;