import React, { useState } from "react";
import { lexize } from "pygmaea/pygmaea_bg";

const useTextField = (
  initialText: string
): [string, (event: React.ChangeEvent<HTMLInputElement>) => void] => {
  const [text, setText] = useState(initialText);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const token = lexize(event.target.value);
    // const token = event.target.value;
    setText(token);
  };
  return [text, handleChange];
};

export default useTextField;
