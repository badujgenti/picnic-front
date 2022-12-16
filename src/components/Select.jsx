import React from "react";
import { Select } from "antd";

const SelectFunc = ({
  options,
  selectedSegmentTypes,
  setSelectedSegmentTypes,
}) => {
  const handleChange = (value) => {
    setSelectedSegmentTypes(value);
  };
  return (
    <>
      <Select
        mode="multiple"
        allowClear
        style={{
          width: "300px",
          cursor: "pointer",
        }}
        placeholder="Please select"
        onChange={handleChange}
        options={options}
      />
    </>
  );
};
export default SelectFunc;
