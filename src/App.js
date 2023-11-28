import {useEffect, useContext} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './Context/books';

function App() {
    const {fetchBooks} = useContext(BooksContext);


    useEffect(() => {
        fetchBooks(); }, []);


    //DON'T DO THIS: do not directly call fetchBooks() here because it will cause an infinite loop of requests

    return (
    <div className="app">
        <h1>Reading List</h1>
        <BookList />
        <BookCreate />
        </div>);
}

export default App;



