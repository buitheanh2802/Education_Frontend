import React, { useState } from "react";
import Select from "react-select";
import { useForm } from "react-hook-form";
import makeAnimated from "react-select/animated";
import QuillReact from "src/Helpers/QuillReact";
import { Icon } from "src/Components/Icon";
import PostApi from "src/Apis/PostApi";
const PostsCreate = () => {
  // const {register, handleSubmid, formState: { error }} = useForm();
  const [title, setTitle] = useState();
  const [tagsId, setTagsId] = useState();
  const [content, setContent] = useState();
  const [boxBtn, setBoxBtn] = useState();
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

  ////////
  const Tags = (e) => {
    const arr = e.map((item) => {
      return item.value;
    });
    setTagsId(arr);
  };
  /////////
  const Content = (e) => {
    setContent(e);
  };

  const AnimatedMulti = () => {
    return (
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        // defaultValue={[colourOptions[4], colourOptions[5]]}
        isMulti
        options={colourOptions}
        placeholder={"Gắn thẻ bài viết "}
        onChange={(e) => Tags(e)}
      />
    );
  };
  //

  const OnSubmit = async () => {
    try {
      let data = {
        title: title,
        tagsId: tagsId,
        content: content,
      };
      await PostApi.add(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-[80px] container mx-auto ">
      <div className="">
        <input
          type="text"
          className="w-full px-[15px] py-2 bg-white rounded-[3px] shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Tiêu đề bài viết..."
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mt-[20px] grid grid-cols-1  lg:grid-cols-[3fr,1fr] gap-5">
        {AnimatedMulti()}

        <div className="grid  grid-cols-[5fr,2fr] gap-3">
          <div className="relative">
            <button
              className={
                boxBtn
                  ? "w-full justify-center bg-blue-500 text-white px-3  py-[8px] border border-blue-500 rounded-[3px] flex items-center"
                  : " w-full justify-center bg-white text-blue-500 px-3  py-[8px] border border-blue-500 rounded-[3px] flex items-center hover:bg-blue-500 hover:text-white"
              }
              onClick={() => setBoxBtn(!boxBtn)}
            >
              <Icon.Pen className="fill-current w-[13px]" />
              <span className="text-[12x] md:text-[16x] ml-1">
                Xuất bản bài viết
              </span>
            </button>
            <ul
              className={
                boxBtn
                  ? "absolute z-10 text-center w-full mt-[10px] box_btn bg-white top-full left-0 rounded-[3px]"
                  : "hidden"
              }
            >
              <li className="py-3 px-3 text-[12x] flex justify-center items-center md:text-[16x] text-gray-600 cursor-pointer border-b border-gray-100 hover:bg-blue-100">
                <Icon.HeartFilled className="fill-current w-[13px] " />
                <span className="ml-2">Lưu thành bản nháp</span>
              </li>
              <li className="py-3 px-3 text-[12x] md:text-[16x] justify-center items-center text-gray-600 cursor-pointer hover:bg-blue-100 flex">
                <Icon.Pen className="fill-current w-[13px]" />
                <span className="ml-2"> Xuất bản bài ngay   </span>
              </li>
            </ul>
          </div>
          <button className="justify-center bg-white text-red-500 px-3  py-[8px] border border-red-500 rounded-[3px] flex items-center hover:bg-red-500 hover:text-white">
            <Icon.Close className="fill-current w-[13px]" />
            <span className="text-[12x] md:text-[16x] ml-1">Hủy</span>
          </button>
        </div>
      </div>
      <div className="mt-[20px]">
        <QuillReact Content={Content} />
      </div>
    </div>
  );
};

export default PostsCreate;
