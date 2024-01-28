import React from 'react'

const BookListComponents = ({data:{id,book,author,slug, description}}) => {
  return (
    <div className="w-full h-[420px] active:scale-[.99] hover:shadow-lg group">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="lg:h-48 md:h-36 w-full aspect-square object-cover object-bottom group-hover:scale-105 duration-300 overflow-hidden"
        />
        <div className="p-5">
          <h1 className='text-lg font-serif font-bold mb-4'>Book Name: {book}</h1>
          <p>Author Name: {author}</p>
          <p className=' text-ellipsis overflow-hidden'>Description: {description}</p>
        </div>
      </div>
    </div>
  );
}

export default BookListComponents