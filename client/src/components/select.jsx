import React, { useState, useCallback } from "react";
import { Select } from "@shopify/polaris";

function PrefixExample() {
  const [selected, setSelected] = useState("enabled");

  const handleSelectChange = useCallback((value) => setSelected(value), []);

  const options = [
    {
      label: "Increase",
      value: "Increase",
      prefix: <Icon source={CaretUpMinor} />,
    },
    {
      label: "Decrease",
      value: "Decrease",
      prefix: <Icon source={CaretDownMinor} />,
    },
  ];

  return (
    <Select
      label="Permission"
      options={options}
      onChange={handleSelectChange}
      value={selected}
    />
  );
  export default PrefixExample;
}
