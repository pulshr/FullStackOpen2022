const Search = (props) => (
    <div>
        <p>filter shown with</p>
        <input
            value={props.newSearch}
            onChange={props.search}
        />
    </div>
)
export default Search;