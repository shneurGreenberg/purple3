import React, { useCallback } from "react";
import { TextField } from "@shopify/polaris";
// import { useSelector } from "react-redux";

export function TextFieldFn(props) {
  // const user = useSelector((state) => state.user.value);

  // const [value, setValue] = useState(props.value);

  // const bb = "sfdsf";

  const handleChange = useCallback(
    (newValue) => {
      // user.value = newValue;
      props.onChangeValue(newValue);
    },
    [props]
  );

  return (
    <TextField
      label={props.title}
      value={props.value}
      onChange={handleChange}
      autoComplete="off"
      multiline={props.multiline}
      type={props.type}
    />
  );
}
