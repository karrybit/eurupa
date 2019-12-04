import React, { useState } from "react";

const useTextField = (
  initialText: string
): [string, (event: React.ChangeEvent<HTMLInputElement>) => void] => {
  const [text, setText] = useState(initialText);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  return [text, handleChange];
};

export default useTextField;
