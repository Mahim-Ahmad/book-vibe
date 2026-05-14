import React from 'react';
import { FcRating } from 'react-icons/fc';
import { Link } from 'react-router';

const BookCard = ({book}) => {
    return (
        <Link 
                to ={`/BookDetails/${book.bookId}`}
                className="card bg-base-100 w-96 shadow-sm">
                        <figure className='p-6'>
                            <img
                                src={book.image}
                                alt={book.bookName} className='rounded-xl h-[300px]'/>
                        </figure>
                        <div className="card-body">

                            <div className='flex items-center gap-2'>
                                {book.tags.map((tag,ind) => (
                                    <div key={ind} className='badge text-green-500 bg-green-100 font-semibold text-lg'>{tag}</div>
                                ))}
                            </div>
                            <h2 className="card-title text-2xl">
                                {book.bookName}
                            </h2>
                            <p className='font-semibold text-lg'>
                                {book.author}
                            </p>


                            <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4 text-2xl">
                                <div className="font-semibold">{book.category}</div>
                                <div className="flex gap-2 items-center ">{book.rating}<FcRating className='text-3xl' /></div>
                            </div>


                        </div>
                    </Link>
    );
};

export default BookCard;