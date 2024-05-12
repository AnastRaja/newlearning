import React, {useState} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Richtext() {
  const [value, setValue] = useState("");

  return (
    <>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        className=" border-0"
      />
    </>
  );
}

export default Richtext;
