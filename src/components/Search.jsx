const Search = ({searchTerm, setSearchTerm}) => {

    const clearSearch = () => {
        setSearchTerm("");
    };

    return (
        <div className="flex h-full">
            <input 
                className="outline focus:outline-white rounded p-2"
                type="text"
                maxLength={50}
                placeholder="Search Smartphones..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={clearSearch} className="cursor-pointer ml-5">
                Clear
            </button>
        </div>
    );
};

export default Search;