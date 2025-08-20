import React, { useReducer, useState } from "react";

    const books = [
        { id: 1, name: "Book 1" },
        { id: 2, name: "Book 2" },
        { id: 3, name: "Book 3" }
    ];

    function booksReducer(state, action) {
        if(action.type === 'ADD'){
            const newBooks = [ ...state.books, action.payload ];
            return {
                ...state,
                books: newBooks,
                msg: 'Books added succesfully.',
                show: true
            };
        }
        return state;
    }

function Reducer() {
    const [ bookState, bookDispatch ] = useReducer(booksReducer, {
        books: books,
        msg: "",
        show: false
    });

    const [bookName, setBookName] = useState('');
    const [bookId, setBookId] = useState(4);

    const handleBookName = (e) => {
        setBookName(e.target.value);
    }

    const handleBookAdd = (e) => {
        e.preventDefault();
        const newBook = {
            id: bookId,
            name: bookName
        };
        bookDispatch({ type: "ADD", payload: newBook});
        setBookId( bookId+1 );
        setBookName('');
    }

    return (
        <>
            <h1>Book Lists</h1>
            <p>This component show book lists using the Reducer functionality.</p>
            {bookState.show && <p>{bookState.msg}</p>}
            <form onSubmit={handleBookAdd}>
                <input type="text" placeholder="Enter book name." onChange={handleBookName} value={bookName} />
                <button type="submit">Add</button>
            </form>
            <ul>
                {bookState.books.map( (book) =>
                        <li key={book.id}>
                            {book.name}
                        </li>
                )}
            </ul>
        </>
    )
}

export default Reducer;