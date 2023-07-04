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

  const handleUpperClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  let [countVowel, vowelCountMethod] = useState(0);
  let [countCons, countConsonantsMethod] = useState(0);

  const handleVowelClick = () => {
    countVowel = 0;
    countCons = 0;
    for (let i = 0; i < text.length; i++) {
      if (
        text[i] === "a" ||
        text[i] === "e" ||
        text[i] === "i" ||
        text[i] === "o" ||
        text[i] === "u"
      ) {
        countVowel++;
      } else if (
        text[i] === " " ||
        text[i] === "'" ||
        text[i] === '"' ||
        text[i] === ","
      ) {
        continue;
      } else {
        countCons++;
      }
    }
    vowelCountMethod(countVowel);
    countConsonantsMethod(countCons);
  };

  return (
    <>
      <div className="container mb-3">
        <h1>{props.textboxHeading}</h1>
        <button className="btn btn-dark my-3">
          Dark Mode
        </button>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <button className="btn btn-primary my-3" onClick={handleUpperClick}>
          Convert to upper case
        </button>
        <button
          className="btn btn-success mx-2 my-3"
          onClick={handleLowerClick}
        >
          Convert to Lower case
        </button>
        <button className="btn btn-info mx-2 my-3" onClick={handleVowelClick}>
          Count Vowel
        </button>
      </div>
      <div className="container">
        <p>
          Words {text.split(" ").length} and Characters are {text.length}
        </p>
        <p>
          {countVowel} Vowels and {countCons} Consonants{" "}
        </p>
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
