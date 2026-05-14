import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookProvider = ({ children }) => {


    const [storedBooks, setStoredBooks] = useState([]);

    const handleMarkAsRead = (currentBook) => {



        const isExistedBook = storedBooks.find((book) => book.bookId === currentBook.bookId)

        if (isExistedBook) {
            alert("the book is already exist");
        }
        else {
            setStoredBooks([...storedBooks, currentBook]);
            alert(`${currentBook.bookName} is added to list`);
        }
        console.log(currentBook, storedBooks, "book");

    };




    const data = {
        storedBooks,
        setStoredBooks,
        handleMarkAsRead,

    };

    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;