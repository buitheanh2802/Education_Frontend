import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageApi from "src/Apis/ImageApi";
import { Icon } from "src/Components/Icon";

const QuillReact = (Content) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const imageHandler = (a) => {
    showModal();
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onUploadImage = (e) => {
    var formData = new FormData();
    formData.append("image", e.target.files[0]);

    const CallApi = async () => {
      // try {
      //   const { data } = await ImageApi.addImage(formData);
      //   console.log(data);
      // } catch (error) {
      //   console.log(error);
      // }
      const token = localStorage.getItem("_token_");
      fetch("http://localhost:4000/api/picture", {
        method: "POST",
        headers: { authorization: "Bearer " + token },
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          const url = data.data.photo.photoUrl;
          console.log(url);
          // setUrl(url)
        })
        .catch((err) => {
          console.log(err);
        });
    };
    CallApi();
  };
  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ align: [] }],
        ["link", "image"],
        ["clean"],
        [{ color: [] }],
      ],
      handlers: {
        image: imageHandler,
      },
    },
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];
  return (
    <div className="mt-[20px] mb-[40px]">
      {/* <QuillReact content={Content} /> */}
      <div className="text-editor">
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          onChange={Content}
        ></ReactQuill>
      </div>
      <div
        className={
          isModalVisible
            ? "fixed top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-70 z-[999999] overflow-auto"
            : "hidden"
        }
      >
        <div className="max-w-[650px] mx-[15px] mt-[15vh] sm:mx-auto mb-[50px] rounded-[2px] bg-white relative px-[15px]">
          <button
            onClick={() => handleCancel()}
            className="absolute top-[18px] right-[15px] "
          >
            <Icon.Close className="fill-current w-[11px] text-gray-500 hover:text-gray-700 " />
          </button>
          <p className="text-[20px] pt-[10px] text-gray-700">Thêm ảnh</p>
          <div className="mt-[25px] text-[14px] text-gray-700 ">
            <div
              // onClick={() => onUploadImage()}
              className="cursor-pointer border-dashed border-[1px] border-gray-400"
            >
              <input type="file" onChange={(e) => onUploadImage(e)} />
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
      </div>
    </div>
  );
};
export default QuillReact;
