import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import QuillReact from "src/Helpers/QuillReact";
import { Icon } from "src/Components/Icon";
const PostsCreate = () => {
  ///react-select
  const animatedComponents = makeAnimated();
  const colourOptions = [
    { value: "red", label: "Red", color: "#FF5630", isFixed: true },
    { value: "orange", label: "Orange", color: "#FF8B00" },
    { value: "yellow", label: "Yellow", color: "#FFC400" },
    { value: "green", label: "Green", color: "#36B37E" },
    { value: "forest", label: "Forest", color: "#00875A" },
    { value: "slate", label: "Slate", color: "#253858" },
    { value: "silver", label: "Silver", color: "#666666" },
  ];

  const AnimatedMulti = () => {
    return (
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        // defaultValue={[colourOptions[4], colourOptions[5]]}
        isMulti
        options={colourOptions}
        placeholder={"Gắn thẻ bài viết: Tối đa 5 thẻ và ít nhất 1 thẻ "}
      />
    );
  };
  //

  return (
    <div className="mt-[80px] container mx-auto ">
      <div className="">
        <input
          type="text"
          className="w-full px-[15px] py-2 bg-white rounded-[3px] shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Tiêu đề bài viết..."
        />
      </div>
      <div className="mt-[20px] grid grid-cols-1  lg:grid-cols-[3fr,1fr] gap-5">
        {AnimatedMulti()}
        <div className="grid  grid-cols-[5fr,2fr] gap-3">
          <button className=" justify-center bg-white text-blue-500 px-3  py-[8px] border border-blue-500 rounded-[3px] flex items-center hover:bg-blue-500 hover:text-white">
            <Icon.Pen className="fill-current w-[13px]" />
            <span className="text-[12x] md:text-[16x] ml-1">
              Xuất bản bài viết
            </span>
          </button>
          <button className="justify-center bg-white text-red-500 px-3  py-[8px] border border-red-500 rounded-[3px] flex items-center hover:bg-red-500 hover:text-white">
            <Icon.Close className="fill-current w-[13px]" />
            <span className="text-[12x] md:text-[16x] ml-1">Hủy</span>
          </button>
        </div>
      </div>
      <div className="mt-[20px]">
        <QuillReact />
      </div>
    </div>
  );
};

export default PostsCreate;
