
import Book from './Book'
import Data from '../../books.json'
import BookHeader from './BookHeader'
const BooksItem = () => {


  return (
    <>
      <BookHeader/>
    <div
    className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  >
 {
    Data.map((book) => (  <Book key={book?.id} bookData={book}/>) )
 }
  
 
   
  </div></>
  
  )
}

export default BooksItem