import React from "react";

function Search({ search, setSearch, getProducts }) {
  function onHandle(e) {
    setSearch(e.target.value);
  }

  function onClickHandle() {
    getProducts(search);
  }

  return (
    <div className="flex justify-center items-center m-10 gap-2">
      <div className="border border-gray-500 rounded-sm">
        <input type="text" name="username" value={search} onChange={onHandle} />
      </div>

      <button onClick={onClickHandle}>search</button>
    </div>
  );
}

export default Search;
