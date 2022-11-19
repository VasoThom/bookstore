import { createContext, useState } from "react";
import data from "../data";

export const BookContext = createContext();

export default function BookProvider({ children }) {
  const [books, setBooks] = useState(data);
  return (
    <div>
      <BookContext.Provider value={{ books }}>{children}</BookContext.Provider>
    </div>
  );
}
