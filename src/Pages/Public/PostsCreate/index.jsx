import React, { useState, useEffect } from "react";
import Select from "react-select";
// import { useForm } from "react-hook-form";
import makeAnimated from "react-select/animated";
import QuillReact from "src/Helpers/QuillReact";
import { Icon } from "src/Components/Icon";
import TagApi from "src/Apis/TagApi";
import PostApi from "src/Apis/PostApi";
const PostsCreate = () => {
  // const {register, handleSubmid, formState: { error }} = useForm();
  const [title, setTitle] = useState();
  const [tag, setTag] = useState();
  const [content, setContent] = useState();
  const [boxBtn, setBoxBtn] = useState();
  const [taged, setTaged] = useState([]);
  ////////
  useEffect(() => {
    const listTags = async () => {
      try {
        const { data: tags } = await TagApi.getAll();
        const newData = tags?.data?.models?.map((item) => ({
          ...item,
          value: item.name,
          label: item.name,
        }));
        setTag(newData);
      } catch (error) {
        console.log(error);
      }
    };
    listTags();
  }, []);
  ////////////////

  const tagItem = (e) => {
    const arrTag = e.map((item) => {
      return item.value;
    });
    setTaged(arrTag);
  };
  ///////
  const Content = (e) => {
    setContent(e);
  };

  ///react-select
  const animatedComponents = makeAnimated();
  const AnimatedMulti = () => {
    return (
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options={tag}
        placeholder={"Gắn thẻ bài viết "}
        onChange={(e) => tagItem(e)}
      />
    );
  };
  //
  const OnSubmit1 = async () => {
    try {
      let data = {
        title: title,
        tagsId: taged,
        content: content,
        isDraft: false,
      };
      console.log(data);
      // await PostApi.add(data);
    } catch (error) {
      console.log(error);
    }
  };
  const OnSubmit2 = async () => {
    try {
      let data = {
        title: title,
        tagsId: taged,
        content: content,
        isDraft: true,
      };
      console.table(data);
      // await PostApi.add(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-[80px] container mx-auto ">
      <div className="">
        <input
          type="text"
          className="w-full px-[15px] py-[9px] bg-white rounded-[3px] shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              <li
                className="py-3 px-3 text-[12x] flex justify-center items-center md:text-[16x] text-gray-600 cursor-pointer border-b border-gray-100 hover:bg-blue-100"
                onClick={() => OnSubmit1()}
              >
                <Icon.HeartFilled className="fill-current w-[13px]" />
                <span className="ml-2">Lưu thành bản nháp</span>
              </li>
              <li
                className="py-3 px-3 text-[12x] md:text-[16x] justify-center items-center text-gray-600 cursor-pointer hover:bg-blue-100 flex"
                onClick={() => OnSubmit2()}
              >
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
