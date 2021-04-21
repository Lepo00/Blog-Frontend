import './Category.scss';

const Category = (props:any) => {
  return (
    <div className="Category">
      <h1>Category {props.match.params.category}</h1>
    </div>
  )
}

export default Category;