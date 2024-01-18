
import Book from './Book'
import Data from '../../books.json'
import BookHeader from './BookHeader'
import { useState } from 'react';
const BooksItem = () => {
 const [search, setSearch] = useState("");

  return (
    <>
      <BookHeader search={search} setSearch={setSearch}/>
    <div
    className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  >
 {
    Data.filter(book=>book.bookName.toLowerCase().includes(search.toLowerCase())).map((book) => (  <Book key={book?.id} bookData={book}/>) )
 }
  
 
   
  </div></>
  
  )
}

export default BooksItem