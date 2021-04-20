import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";

function TagSelect(props) { 
  const options = [
    { label: "Life", value: "life" },
    { label: "Love", value: "love" },
    { label: "Inspirational", value: "inspirational"},
    { label: "Philosophy", value: "philosophy" },
    { label: "Humor", value: "humor" },
    { label: "God", value: "god" },
    { label: "Truth", value: "truth" },
    { label: "Wisdom", value: "wisdom" },
    { label: "Death", value: "death" },
  ];

  return (
    <div>
      <p className="text">Choose some relevant tags for your quote:</p>

      {/* TODO: Extract tags selected */}
      <MultiSelect
        options={options}
        value={props.selected}
        onChange={props.setSelected}
        labelledBy="Select"
      />
    </div>
  );
};

export default TagSelect;
