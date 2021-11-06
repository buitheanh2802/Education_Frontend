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
  handleImage = async () => {
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
      handlers: {
        image: this.handleImage,
      },
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
