// context/BookProvider.jsx

import React, { createContext, useState } from 'react';

import { toast } from 'react-toastify';

import {
    addReadListToLocalDB,
    getAllReadListFromLocalDB,
    addWishListToLocalDB,
    getAllWishListFromLocalDB
} from '../utils/localDB';

export const BookContext = createContext();

const BookProvider = ({ children }) => {

    // ================= STATES =================

    const [readList, setReadList] = useState(
        () => getAllReadListFromLocalDB()
    );

    const [wishList, setWishList] = useState(
        () => getAllWishListFromLocalDB()
    );



    // ================= HANDLE READ LIST =================

    const handleMarkAsRead = (currentBook) => {

        const isExistedBook = readList.find(
            (book) => book.bookId === currentBook.bookId
        );

        if (isExistedBook) {

            toast.error("The book already exists in Read List");
        }
        else {

            addReadListToLocalDB(currentBook);

            setReadList([...readList, currentBook]);

            toast.success(
                `${currentBook.bookName} added to Read List`
            );
        }
    };



    // ================= HANDLE WISH LIST =================

    const handleWishList = (currentBook) => {

        // Check if already in read list

        const isExistedReadList = readList.find(
            (book) => book.bookId === currentBook.bookId
        );

        if (isExistedReadList) {

            toast.error("Book already exists in Read List");

            return;
        }



        // Check if already in wish list

        const isExistedWishList = wishList.find(
            (book) => book.bookId === currentBook.bookId
        );

        if (isExistedWishList) {

            toast.error("Book already exists in Wish List");
        }
        else {

            addWishListToLocalDB(currentBook);

            setWishList([...wishList, currentBook]);

            toast.success(
                `${currentBook.bookName} added to Wish List`
            );
        }
    };



    // ================= CONTEXT DATA =================

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