import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();

const BookProvider = ({ children }) => {


    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);

    const handleMarkAsRead = (currentBook) => {



        const isExistedBook = readList.find((book) => book.bookId === currentBook.bookId)

        if (isExistedBook) {
            toast.error("the book is already read list");
        }
        else {
            setReadList([...readList, currentBook]);
            toast.success(`${currentBook.bookName} is added to read list`);
        }
        console.log(currentBook, readList, "book");

    };



    const handleWishList = (currentBook) => {

        const isExistedReadList=readList.find((book)=>book.bookId===currentBook.bookId);

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
        console.log(currentBook, readList, "book");

    };



    const data = {
        readList,
        setReadList,
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