import React from "react";
import { Link } from "react-router-dom";
import ModalAdd from "./ModalAdd";
import UseModal from "./useModal";

const Header = ({ onAdd }) => {
  const { isShowing, toggle } = UseModal();

  return (
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
                  <Link
                    to="/manager/publish_post"
                    className="text-gray-700 hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium"
                  >
                    Quản lý tag
                  </Link>
                </div>
              </li>
            </ol>
          </nav>
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
            Tất cả tag
          </h1>
        </div>
        <div className="block sm:flex items-center md:divide-x md:divide-gray-100">
          <ModalAdd onAdd={onAdd} isShowing={isShowing} hide={toggle} />
          <div className="bg-white w-[100%] flex justify-end">
            <button
              onClick={toggle}
              className="mx-[20px] bg-green-500 hover:bg-green-800 text-white whitespace-nowrap h-[38px] leading-[38px] px-5 my-[10px] rounded"
            >
              {" "}
              Thêm tag{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
