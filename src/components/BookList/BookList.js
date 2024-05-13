import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

import "./BookList.scss";
import { useThunk } from "../../hook/use-thunk";
import { fetchBooks } from "../../store";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import Book from "../BookList/Book";

const BookList = () => {
  const [doFetchBooks, isLoading, loadingError] = useThunk(fetchBooks);
  const { data } = useSelector((state) => {
    return state.books;
  });
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const page = searchParams.get("page");

  useEffect(() => {
    doFetchBooks({ input: title, page });
  }, [searchParams]);

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  const booksWithCovers = data.docs?.map((singleBook) => {
    return {
      ...singleBook,
      // removing /works/ to get only id
      id: singleBook.key.replace("/works/", ""),
      cover_img: singleBook.cover_i
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_i}-L.jpg`
        : coverImg,
    };
  });

  if (isLoading) {
    return <Loading />;
  } else if (loadingError) {
    return (
      <section className="booklist">
        <div className="container">
          <div className="section-title">
            <h2>Error Fetching Data</h2>
          </div>
        </div>
      </section>
    );
  } else {
    console.log("ádasdsa", booksWithCovers);
    return (
      <section className="booklist">
        <div className="container">
          <div className="section-title">
            <h2>Result Of: {title}</h2>
          </div>
          <div className="booklist-content grid ">
            {booksWithCovers.map((item, index) => {
              return <Book key={index} book={item} />;
            })}
          </div>
        </div>
      </section>
    );
  }
};

export default BookList;
