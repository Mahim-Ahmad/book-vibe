import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import BookCard from "../ui/BookCard";

const ListedReadList = () => {
    const { storedBooks } = useContext(BookContext)
    console.log(storedBooks, "bookContext");


    if(storedBooks.length===0){
        return <div className='h-[50vh] bg-gray-200 flex items-center justify-center'>
            <h2 className='font-bold text-3xl'>No read list data found</h2>
        </div>
    }

    return (

        <div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 mb-10'>
                {
                    storedBooks.map((book, ind) => (
                        <BookCard key={ind} book={book} />
                    ))}
            </div>
        </div>
    );
};

export default ListedReadList;