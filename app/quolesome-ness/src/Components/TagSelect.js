import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";


function TagSelect(props) { 
  var data = require('./tag.json');
  const options = data;

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
