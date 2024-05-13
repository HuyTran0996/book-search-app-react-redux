import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "./SearchForm.scss";

const SearchForm = () => {
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };

  const moveToBookListPage = (e) => {
    e.preventDefault();

    let newStr = input.trim().toLocaleLowerCase().replace(/\s+/gi, "+");
    if (newStr.length !== 0) {
      navigate(`/book?title=${newStr}&page=1`);
    }
    setInput("");
  };

  return (
    // <div className="search-form">
    // <div className="container">
    // <div className="search-form-container">
    <form className="search-form" onSubmit={moveToBookListPage}>
      <div className="search-form-elem flex flex-sb bg-white">
        <input
          type="text"
          className="form-control"
          placeholder="The Lost World..."
          value={input}
          onChange={handleChangeInput}
        />
        <button
          type="submit"
          className="flex flex-c"
          onClick={moveToBookListPage}
        >
          <FaSearch className="text-purple" size={32} />
        </button>
      </div>
    </form>
    // </div>
    // </div>
    // </div>
  );
};

export default SearchForm;
