import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();

const BookProvider = ({ children }) => {


    const [storedBooks, setStoredBooks] = useState([]);
    const [wishList, setWishList] = useState([]);

    const handleMarkAsRead = (currentBook) => {



        const isExistedBook = storedBooks.find((book) => book.bookId === currentBook.bookId)

        if (isExistedBook) {
            toast.error("the book is already read list");
        }
        else {
            setStoredBooks([...storedBooks, currentBook]);
            toast.success(`${currentBook.bookName} is added to read list`);
        }
        console.log(currentBook, storedBooks, "book");

    };



    const handleWishList = (currentBook) => {

        const isExistedReadList=storedBooks.find((book)=>book.bookId===currentBook.bookId);

        if(isExistedReadList){
            toast.error("the book is already in read list");
            return;
        }




        const isExistedBook = wishList.find((book) => book.bookId === currentBook.bookId);

        if (isExistedBook) {
            toast.error("the book is already Wish exist");
        }
        else {
            setWishList([...wishList, currentBook]);
            toast.success(`${currentBook.bookName} is added to Wish list`);
        }
        console.log(currentBook, storedBooks, "book");

    };



    const data = {
        storedBooks,
        setStoredBooks,
        handleMarkAsRead,
        wishList,
        setWishList,
        handleWishList,

    };

    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;