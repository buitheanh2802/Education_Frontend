import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CreateCateChallen from '../Modals/CreateCateChallen';

const Header = () => {
    const [isModal, setIsModals] = useState(false);
    return (
        <>
            {isModal && <CreateCateChallen isModal={isModal} setIsModals={setIsModals} />}
            <div className="p-4 bg-white block w-full sm:flex items-center justify-between border-b border-gray-200">
                <div className="mb-1 w-full">
                    <div className="mb-4">
                        <nav className="flex mb-5" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-2">
                                <li className="inline-flex items-center">
                                    <Link
                                        to="/manager"
                                        className="text-gray-700 hover:text-gray-900 inline-flex items-center"
                                    >
                                        <svg
                                            className="w-5 h-5 mr-2.5"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                        </svg>
                                        Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-gray-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <p className="text-gray-700 hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium" >
                                            Danh sách thể loại bài tập
                                        </p>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Tất cả thể loại bài tập
                        </h1>
                    </div>
                    <div className="block sm:flex items-center md:divide-x md:divide-gray-100">
                        <form className="sm:pr-3 mb-4 sm:mb-0 hidden" action="#" method="GET">
                            <label htmlFor="products-search" className="sr-only">
                                Search
                            </label>
                            <div className="mt-1 relative sm:w-64 xl:w-96">
                                <input
                                    type="text"
                                    name="email"
                                    id="products-search"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                    placeholder="Tìm kiếm bài viết"
                                />
                            </div>
                        </form>
                        <div className="flex items-center sm:justify-end w-full">
                            <button
                                onClick={() => setIsModals(true)}
                                type="button"
                                data-modal-toggle="add-product-modal"
                                className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center rounded-lg text-sm px-3 py-2 text-center sm:ml-auto"
                            >
                                <svg
                                    className="-ml-1 mr-2 h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Thêm thể loại
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;