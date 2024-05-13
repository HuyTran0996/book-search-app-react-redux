import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useThunk } from "../../hook/use-thunk";
import { fetchBooks } from "../../store";

import "./SearchForm.scss";

const SearchForm = () => {
  const [input, setInput] = useState("");
  const [doFetchBooks] = useThunk(fetchBooks);
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newStr = input.trim().toLocaleLowerCase().replace(/\s+/gi, "+");
    if (newStr.length !== 0) {
      doFetchBooks({ input, page: 1 });
      navigate(`/book&title=${newStr}&page=1`);
    }
    setInput("");
  };

  return (
    // <div className="search-form">
    // <div className="container">
    // <div className="search-form-container">
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form-elem flex flex-sb bg-white">
        <input
          type="text"
          className="form-control"
          placeholder="The Lost World..."
          value={input}
          onChange={handleChangeInput}
        />
        <button type="submit" className="flex flex-c" onClick={handleSubmit}>
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
