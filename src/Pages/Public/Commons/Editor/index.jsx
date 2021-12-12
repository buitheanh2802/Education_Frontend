import React from "react";
import hljs from "highlight.js";
import ReactQuill, { Quill } from "react-quill";
import ImageResize from "quill-image-resize-module-react";
import * as Emoji from "quill-emoji";
import "react-quill/dist/quill.snow.css";
import "highlight.js/styles/monokai-sublime.css";
import "quill-emoji/dist/quill-emoji.css";
import "./index.css";

class Editor extends React.Component {
  constructor(props) {
    //   extend all props from parent
    super(props);
    // state
    this.state = {
      modules: {
        toolbar: {
          container: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote"],
            // [{ header: 1 }, { header: 2 }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ direction: "rtl" }],
            // [{ size: ["small", false, "large", "huge"] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ color: [] }, { background: [] }],
            [{ font: [] }],
            [{ align: [] }],
            ["code-block"],
            ["link", "image"],
            ["clean"],
          ],
          handlers: {
            image: this.props.imageHandler,
          },
        },
        imageResize: {
          parchment: Quill.import("parchment"),
          modules: ["Resize", "DisplaySize"],
          displaySize: true,
        },
        syntax: {
          highlight: (text) => hljs.highlightAuto(text).value,
        },
        "emoji-textarea": true,
      },
    };
  }
  //   register module in willmount component
  componentWillMount() {
    hljs.configure({
      // optionally configure hljs
      languages: ["javascript", "ruby", "python"],
    });
    Quill.register("modules/imageResize", ImageResize);
    Quill.register("modules/emoji", Emoji);
  }
  //   didMount
  componentDidMount() {}
  //   render modules
  render() {
    return (
      <ReactQuill
        onChange={this.props.onChange}
        modules={this.state.modules}
        theme="snow"
        ref={this.props.editorInstance}
      />
    );
  }
}
export default React.memo(Editor);
