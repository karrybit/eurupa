import React, { FC } from "react";
import TextFieldComponent from "./TextFieldComponent";
import useTextField from "./TextFieldHook";

import "./TextFieldContainer.css";

const TextFieldContainer: FC = () => {
  const [text, setText] = useTextField("");
  return (
    <div className="container">
      <TextFieldComponent text={text} setText={setText} />
      <p>{text}</p>
    </div>
  );
};

export default TextFieldContainer;
