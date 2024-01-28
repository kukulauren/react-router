import React from "react";
import useFetch from "./hook/useFetch";
import { GetBookData } from "./service/book.service";
import { GetAuthor } from "./service/author.service";
import {Routes, Route} from "react-router-dom"
import { DetailBookPage, HomePage } from "./page";
import { NavComponents } from "./components";
import NotFound from "./Not-Found";

const App = () => {
  const { loading, error, data } = useFetch(GetBookData, "book");
  const {
    loading: authorLoading,
    error: authorError,
    data: authorData,
  } = useFetch(GetAuthor, "author");
  
  return (
    <div className=" container mx-auto">
      <NavComponents/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="" element={<NotFound/>} />
      <Route path="/detail/:id" element={<DetailBookPage/>} />
    </Routes>
    </div>
  );
};

export default App;
