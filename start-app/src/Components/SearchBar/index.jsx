import searchIcon from "./seatchItem.svg"
const SearchBar = () => {
    return (
        <form className="form">
            <input className="search" placeholder="Поиск" type="search"/>
                <button className="btnSearch" type="submit">
                    <img className="icon" src={searchIcon} alt=""/>
                </button>
        </form>
    );
}

export default SearchBar;