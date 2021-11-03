import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
class QuillReact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  // quillObj;
  // imageHandler = async () => {
  //   const input = document.createElement("input");

  //   input.setAttribute("type", "file");
  //   input.setAttribute("accept", "image/*");
  //   input.click();

  //   input.onchange = async () => {
  //     var file = input.files[0];
  //     var formData = new FormData();

  //     formData.append("image", file);

  //     var fileName = file.name;

  //     const res = await this.props.handle(file, fileName, this.quillObj);
  //   };
  // };

  modules = {
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
      // handlers: {
      //   image: this.imageHandler,
      // },
    },
  };

  formats = [
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

  render() {
    return (
      <div className="text-editor">
        <ReactQuill
          ref={(el) => {
            this.quillObj = el;
          }}
          theme="snow"
          modules={this.modules}
          formats={this.formats}
          onChange={(e) => this.props.Content(e)}
        ></ReactQuill>
      </div>
    );
  }
}
export default QuillReact;
