import React, { FC } from "react";
import TextFieldComponent from "./TextFieldComponent";
import useTextField from "./TextFieldHook";

import "./TextFieldContainer.css";

const TextFieldContainer: FC = () => {
  const [text, setText] = useTextField("");
  return (
    <div className="container">
      <div className="textControl">
        <TextFieldComponent text={text} setText={setText} />
        <button>enter</button>
        <button>delete</button>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default TextFieldContainer;
