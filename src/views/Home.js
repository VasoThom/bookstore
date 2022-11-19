/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useContext } from "react";
import { BookContext } from "../context/BookContext";
export default function Home() {
  const { books } = useContext(BookContext);
  return (
    <div>
      <div>
        {books.map((book, i) => {
          return (
            <div key={i}>
              <img src={book.image} />
              <h1>{book.author}</h1>
              <h1>{book.description}</h1>

              <button>Kaufen</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
