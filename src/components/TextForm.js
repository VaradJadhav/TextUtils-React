import React, { useState } from "react";

export default function TextForm(props) {
  document.title = "TextUtils - Home";
  const handleOnChange = (event) => {
    // console.log("On change")
    setText(event.target.value);
  };
  // bydefault ek object event return karta hai
  const handleClearClick = () => {
    setText("");
  };
  const handleUpClick = () => {
    // console.log("Uppercase was clicked!");
    setText(text.toUpperCase());
  };
  const handleDownClick = () => {
    // console.log("Lowercase was clicked!");
    setText(text.toLowerCase());
  };
  const handleToggleClick = () => {
    // console.log("Lowercase was clicked!");
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < "Z") newText += text[i].toLowerCase();
      else newText += text[i].toUpperCase();
    }
    setText(newText);
  };
  const handleAlternateClick = () => {
    // console.log("Lowercase was clicked!");
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      if (i % 2) newText += text[i].toLowerCase();
      else newText += text[i].toUpperCase();
    }
    setText(newText);
  };
  const handleCopyText = () => {
    let text2 = document.getElementById("myBox");
    text2.select();
    navigator.clipboard.writeText(text2.value); //only this line will be fine
    props.showAlert("Copied to clipboard!", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const Capitalize = () => {
    const titleCase = text
      .toLowerCase()
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
    setText(titleCase);
  };
  const [text, setText] = useState("");
  // text = "new text" //wrong way
  // text = setText('new text') //correct way
  return (
    <>
      <h2>{props.heading}</h2>
      <div className="mb-3 my-3">
        {/* <label htmlFor="myBox" className='form-label1'>Example textarea</label> */}
        <textarea
          id="myBox"
          className="form-control"
          value={text}
          placeholder="Enter text here"
          cols="30"
          rows="8"
          style={{
            backgroundColor: props.mode === "dark" ? "gray" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-3" onClick={handleClearClick}>
        Clear text
      </button>
      <button className="btn btn-primary mx-3" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-3" onClick={handleDownClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-3" onClick={handleToggleClick}>
        Togglecase
      </button>
      <button className="btn btn-primary mx-3" onClick={handleAlternateClick}>
        Alternatecase
      </button>
      <button className="btn btn-primary mx-3" onClick={handleCopyText}>
        Copy Text
      </button>
      <button className="btn btn-primary mx-3 my-3" onClick={handleExtraSpaces}>
        Remove Extra Spaces
      </button>
      <button className="btn btn-primary mx-3 my-3" onClick={Capitalize}>
        Capitalize
      </button>

      <div className="container my-3">
        <h3>Your text summary</h3>
        <p>
          {/* {text.split(/[ ]+/).length + ((text.length===0) ? -1:0)} words and {text.length} characters */}
          {text.trim() === "" ? 0 : text.match(/\S+/g).length} words and{" "}
          {text.replace(/\S+/g, "").length} characters
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview here"}</p>
      </div>
    </>
  );
}

//agar onchange event par listen nahi kiya to text change nahi ho payega
//actually hum apne state ko change kar rahe hai
