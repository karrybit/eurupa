import React, { FC } from "react";

import TextFieldComponent from "./TextFieldComponent";
import useTextField from "./TextFieldHook";

const TextFieldContainer: FC = () => {
  const [text, setText] = useTextField("");
  return <TextFieldComponent text={text} setText={setText} />;
};

export default TextFieldContainer;
