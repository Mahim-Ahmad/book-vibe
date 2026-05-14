import React, { useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../context/BookContext';

const BookDetails = () => {

    const { bookId } = useParams();

    const books = useLoaderData();

    const expectedBook = books.find(
        (book) => book.bookId === Number(bookId)
    );

    const {
        bookName,
        author,
        image,
        review,
        totalPages,
        rating,
        category,
        tags,
        publisher,
        yearOfPublishing
    } = expectedBook;

    const {handleMarkAsRead,handleWishList}=useContext(BookContext)
    

    





    return (
        <div className='max-w-7xl mx-auto p-8'>

            <div className="hero bg-base-200 rounded-2xl p-8">

                <div className="hero-content flex-col lg:flex-row gap-12 items-start">

                    {/* Left Side Image */}
                    <div className='bg-white rounded-xl p-10'>
                        <img
                            src={image}
                            alt={bookName}
                            className="h-[600px] object-cover rounded-lg"
                        />
                    </div>

                    {/* Right Side Content */}
                    <div className='flex-1 h-[400px]'>

                        <h1 className="text-3xl font-bold mb-3">
                            {bookName}
                        </h1>

                        <p className='text-2xl font-semibold mb-3'>
                            By : {author}
                        </p>

                        <div className='border-y py-4 mb-3'>
                            <p className='font-semibold text-lg'>
                                {category}
                            </p>
                        </div>

                        <p className='mb-3 leading-6 font-sans'>
                            <span className='font-bold'>
                                Review :
                            </span>{" "}
                            {review}
                        </p>

                        {/* Tags */}
                        <div className='flex items-center gap-4 mb-3 flex-wrap'>

                            <span className='font-bold text-lg'>
                                Tag
                            </span>

                            {
                                tags?.map((tag, ind) => (
                                    <div
                                        key={ind}
                                        className='badge badge-lg bg-green-100 text-green-600 border-0 px-4 py-4 font-bold'
                                    >
                                        #{tag}
                                    </div>
                                ))
                            }

                        </div>

                        {/* Table Section */}
                        <div className='border-t pt-2 space-y-4'>

                            <div className='flex justify-between'>
                                <span className='text-gray-500'>
                                    Number of Pages:
                                </span>

                                <span className='font-bold'>
                                    {totalPages}
                                </span>
                            </div>

                            <div className='flex justify-between'>
                                <span className='text-gray-500'>
                                    Publisher:
                                </span>

                                <span className='font-bold'>
                                    {publisher}
                                </span>
                            </div>

                            <div className='flex justify-between'>
                                <span className='text-gray-500'>
                                    Year of Publishing:
                                </span>

                                <span className='font-bold'>
                                    {yearOfPublishing}
                                </span>
                            </div>

                            <div className='flex justify-between'>
                                <span className='text-gray-500'>
                                    Rating:
                                </span>

                                <span className='font-bold'>
                                    {rating}
                                </span>
                            </div>

                        </div>

                        {/* Buttons */}
                        <div className='flex gap-2 mt-3'>

                            <button className='btn btn-outline btn-lg' onClick={()=> handleMarkAsRead(expectedBook)}>
                                Mark as Read
                            </button>

                            <button className='btn btn-primary btn-lg' onClick={()=> handleWishList(expectedBook)}>
                                Add to Wishlist
                            </button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;