import React from 'react'
import useFetch from '../../hook/useFetch'
import { GetBookData } from '../../service/book.service'
import { useParams, useNavigate } from 'react-router-dom'

const DetailBookPage = () => {
  const {id}=useParams()
  const nav=useNavigate();
  const handleBack=() => {
    nav(-1)
  }
  const {data,error,loading}=useFetch(GetBookData,`book/${id}`)
  return (
    <div>
      {loading ? (
        <>Loading...</>
      ) : (
        <>
          {error ? (
            <h1>{error}</h1>
          ) : (
            <div>
              <button onClick={handleBack}>Back</button>
              <div className=" grid grid-cols-12">
                <div className=" col-span-5">
                  <h1 className="text-lg font-serif font-bold mb-4">
                    {data.book}
                  </h1>
                  <img
                    src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="aspect-square object-cover object-bottom"
                  />
                </div>
                <div className=" col-span-7 flex justify-center items-center">
                  <div className="">
                    <p>Author Name: {data.author}</p>
                    <p>Description: {data.description}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default DetailBookPage