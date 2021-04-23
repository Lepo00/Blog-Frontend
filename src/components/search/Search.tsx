import './Search.scss';

const Search = (props:any) => {
  return (
    <div className="Search">
      <h1>Ricerca: {props.match.params.search}</h1>
    </div>
  )
}

export default Search;