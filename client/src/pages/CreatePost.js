import { useState } from "react";
import { Navigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
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

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function createNewPost(ev) {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);
    ev.preventDefault();
    // console.log(files);

    const response = await fetch("http://localhost:8080/post", {
      method: "POST",
      body: data,
    });
    if (response.ok) {
      setRedirect(true);
    }
  }
  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="write">
      <form className="writeForm" onSubmit={createNewPost}>
        <div className="writeFormGroup">
          <input
            className="writeInput"
            type="title"
            placeholder={"Title"}
            autoFocus={true}
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
          />
        </div>

        
        <div className="writeFormGroup">
        <input
        className="writeInput writeText"
          type="summary"
          placeholder={"Summary"}
          autoFocus={true}
          value={summary}
          onChange={(ev) => setSummary(ev.target.value)}
        />


         </div>


        <input id="fileInput" type="file" style={{display: "none"}} onChange={(ev) => setFiles(ev.target.files)} />
        <label htmlFor="fileInput">
          {" "}
          <i className="writeIcon fas fa-plus"></i>
        </label>
        <ReactQuill
          value={content}
          onChange={(newValue) => setContent(newValue)}
          modules={modules}
          formats={formats}
        />
        <button style={{ marginTop: "5px" }}> Create post</button>
      </form>
    </div>
  );
}
