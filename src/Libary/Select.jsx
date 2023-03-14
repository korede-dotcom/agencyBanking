import React from "react";

import Select from "react-select";

function Selector({
  padding,
  data,
  placeholder,
  selected,
  value,
  sizeX,
  sizeY,
  isSearch,
  className,
}) {
  return (
    <Select
      options={data}
      isSearchable={isSearch ? isSearch : false}
      placeholder={placeholder}
      onChange={selected}
      defaultValue={value}
      className={className}
      styles={{
        control: (styles) => ({
          ...styles,
          backgroundColor: "white",
          color: "rgba(0,0,0,0.7)",
          padding: `${padding}`,
          border: ".6px solid rgba(135, 135, 135, 1)",
          borderRadius: "5px",
          // outline: "none",
          outline: "none",
          fontSize: "15px",
          scaleX: `${sizeX}`,
          scaleY: `${sizeY}`,
          cursor: "pointer",
          //   borderColor: isFocused ? "grey" : "red",
        }),
      }}
    />
  );
}

export default Selector;
