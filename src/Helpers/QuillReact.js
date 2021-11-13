import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageApi from "src/Apis/ImageApi";
const QuillReact = (Content) => {
  const handleImage = async () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    // input.onchange = async e => {
    //     const file = e.target.files[0];
    //     // const targetEditor = editor.current.getEditor();
    //     // const curentSpace = targetEditor.getSelection(true);
    //     // const res = await uploadFile(file.name, file);
    //     // url
    //     // targetEditor.insertEmbed(curentSpace.index, 'image', res);
    // }
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
        image: handleImage(),
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
    <div className="text-editor">
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        // onChange={(e) => Content(e)}
      ></ReactQuill>
    </div>
  );
};
export default QuillReact;
