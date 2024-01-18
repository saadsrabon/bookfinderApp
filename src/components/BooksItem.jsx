
import Book from './Book'
import Data from '../../books.json'
import BookHeader from './BookHeader'
import { useState } from 'react';
const BooksItem = () => {
 const [search, setSearch] = useState("");
    const [sortType, setSortType] = useState('name_asc');

 const filteredAndSortedBooks = Data
    .filter(book => book.bookName.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortType === 'name_asc') {
        return a.bookName.localeCompare(b.bookName);
      } else if (sortType === 'name_desc') {
        return b.bookName.localeCompare(a.bookName);
      } else if (sortType === 'year_asc') {
        return a.publishYear - b.publishYear;
      } else if (sortType === 'year_desc') {
        return b.publishYear - a.publishYear;
      }
      return 0;
    });

  return (
    <>
      <BookHeader search={search} setSearch={setSearch} setSortType={setSortType}/>
    <div
    className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  >
 {
   filteredAndSortedBooks.map((book) => (  <Book key={book?.id} bookData={book}/>) )
 }
  
 
   
  </div></>
  
  )
}

export default BooksItem