import React from "react";
import useFetch from "../hook/useFetch";
import { GetBookData } from "../service/book.service";
import { BookListComponents } from "../components";
import { Link } from "react-router-dom";

const HomePage = () => {
  const {data,loading,error} = useFetch(GetBookData, "book");
  return (
    <div className=" ">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="grid grid-cols-12 gap-2"  >
          {data.map((el) => {
            return (
              <Link className="lg:col-span-3 md:col-span-4 col-span-full" key={el.id} to={`/detail/${el.id}`}>
                <BookListComponents data={el} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default HomePage;
