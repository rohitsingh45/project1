import React, { useState } from "react";
import PropsTypes from "prop-types";

export default function TextBox(props) {
  // Defining state....
  // Here text is a simple re-usable variable and setText is a function which used
  // to assign the value to the text variable.
  // Here combinedly [text,setText] forms a state.
  // We can't value to text variable using the assignment operator.
  // Here useState contain the default value of text variable.
  const [text, setText] = useState("");

  const handleClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container mb-3">
        <h1>{props.textboxHeading}</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <button className="btn btn-primary" onClick={handleClick}>
          Convert to upper case
        </button>
      </div>
      <div className="container">
        <p>Words {text.split(" ").length} and Characters are {text.length}</p>
      </div>
    </>
  );
}

TextBox.prototype = {
  textboxHeading: PropsTypes.string.isrequired,
};

TextBox.defaultProps = {
  textboxHeading: "New Text",
};
