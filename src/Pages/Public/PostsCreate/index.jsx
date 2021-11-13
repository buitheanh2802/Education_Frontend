import React, { useState, useEffect } from "react";
import CreatetableSelect from "react-select/creatable";
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
      <CreatetableSelect
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
      <div className="mt-[20px] mb-[40px]">
        <QuillReact Content={Content} />
        {/* <div className="fixed top-0 left-0 hidden right-0 bottom-0 bg-gray-500 bg-opacity-70 z-[999999] overflow-auto">
          <div className="max-w-[650px] mx-[15px] mt-[15vh] sm:mx-auto mb-[50px] rounded-[2px] bg-white relative px-[15px]">
            <button className="absolute top-[18px] right-[15px] ">
              <Icon.Close className="fill-current w-[11px] text-gray-500 hover:text-gray-700 " />
            </button>
            <p className="text-[20px] pt-[10px] text-gray-700">Thêm ảnh</p>
            <div className="mt-[25px] text-[14px] text-gray-700 ">
              <div className="cursor-pointer border-dashed border-[1px] border-gray-400">
                <div className="leading-[12px] pt-[25px] pb-[30px] sm:pb-[50px]">
                  <button className=" text-center block w-full ">
                    <Icon.UpLoad className="fill-current w-[45px] text-gray-600 mx-auto" />
                    <br />
                    Kéo và thả tập tin ở đây hoặc nhấp chuột để tải tập tin lên
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-[40px]">
              <p className="text-[18px] text-gray-500">Ảnh của bạn</p>
              <div
                className="grid grid-cols-2 md:grid-cols-6 gap-x-[40px] gap-y-[20px] mt-[20px] overflow-y-auto "
                style={{ maxHeight: "calc(80vh - 250px)" }}
              >
                <div className="w-full">
                  <img
                    src="https://images.viblo.asia/2901193a-1467-44ad-995d-3831534b3047.jpg"
                    alt=""
                  />
                </div>
                <div className="w-full">
                  <img
                    src="https://images.viblo.asia/2901193a-1467-44ad-995d-3831534b3047.jpg"
                    alt=""
                  />
                </div>
                <div className="w-full">
                  <img
                    src="https://images.viblo.asia/2901193a-1467-44ad-995d-3831534b3047.jpg"
                    alt=""
                  />
                </div>
                <div className="w-full">
                  <img
                    src="https://images.viblo.asia/2901193a-1467-44ad-995d-3831534b3047.jpg"
                    alt=""
                  />
                </div>
                <div className="w-full">
                  <img
                    src="https://images.viblo.asia/2901193a-1467-44ad-995d-3831534b3047.jpg"
                    alt=""
                  />
                </div>
                <div className="w-full">
                  <img
                    src="https://images.viblo.asia/2901193a-1467-44ad-995d-3831534b3047.jpg"
                    alt=""
                  />
                </div>
                <div className="w-full">
                  <img
                    src="https://images.viblo.asia/2901193a-1467-44ad-995d-3831534b3047.jpg"
                    alt=""
                  />
                </div>
                <div className="w-full">
                  <img
                    src="https://images.viblo.asia/2901193a-1467-44ad-995d-3831534b3047.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="pt-[30px] pb-[15px] flex justify-end">
              <button className="border border-gray-400 text-gray-500 hover:bg-blue-50  hover:text-blue-400 rounded-[3px] px-[20px] py-[5px]">
                Hủy
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default PostsCreate;
