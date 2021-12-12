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
    </div>
  );
};
export default QuillReact;
