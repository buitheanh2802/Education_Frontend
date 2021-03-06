import React from "react";
import { NavLink, useHistory } from "react-router-dom";

const Navigation = ({ path, button }) => {
  const history = useHistory();
  const token = localStorage.getItem("_token_");

  return (
    <div className="flex justify-between shadow-sm bg-white px-[10px] rounded gap-[15px] border">
      <div className="py-[15px] flex items-center overflow-x-auto w-full whitespace-nowrap">
        {path?.map((item, index) => (
          <NavLink
            exact
            key={index}
            to={item?.path}
            activeClassName="after:absolute after:w-full after:h-[2px] after:rounded after:bottom-[-16px] after:left-0 after:bg-[#1273eb] font-medium text-black"
            className="relative text-[15px] px-[10px] text-gray-600 hover:text-blue-600"
          >
            {item?.value}
          </NavLink>
        ))}
      </div>
      {button && (
        <div className="self-center whitespace-nowrap">
          <button
            onClick={
              token == null
                ? () => {
                    return history.push("/auth/login");
                  }
                : () => {
                    history.push(button?.path);
                  }
            }
            className="flex hover:bg-[#0d61c7] bg-[#1273eb] text-white rounded px-[10px] gap-[5px] py-[10px] md:py-[5px] text-[14px] "
          >
            <div className="self-center">
              <button.icon className="w-[15px] fill-current" />{" "}
            </div>
            <span className="hidden md:block">{button?.value}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navigation;

// const pathName = [
//     { path: path.POSTS, value: "Mới cập nhật" },
//     { path: path.POSTS_POPULAR, value: "Thịnh hành" },
//     { path: path.POSTS_FLOW, value: "Đang theo dõi" },
//     { path: path.POSTS_BOOK_MARK, value: "Bookmark của tôi" },
// ]
// const button = { path: path.POSTS_CREATE, icon: Icon.Pen, value: "Viết bài", event: function }
