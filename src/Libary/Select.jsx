import React from "react";

import Select from "react-select";

function Selector({ data, placeholder, selected, value, size, isSearch }) {
  return (
    <Select
      options={data}
      isSearchable={isSearch ? isSearch : false}
      placeholder={placeholder}
      onChange={selected}
      defaultValue={value}
      styles={{
        control: (styles) => ({
          ...styles,
          backgroundColor: "white",
          padding: "0.8px",
          border: ".6px solid rgba(135, 135, 135, 1)",
          borderRadius: "5px",
          outline: "none",
          fontSize: "13px",
          scale: `${size}`,
          //   borderColor: isFocused ? "grey" : "red",
        }),
      }}
    />
  );
}

export default Selector;
