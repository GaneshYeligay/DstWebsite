import React from "react";

const Form_Date = (props) => {
  let data = props.date;
  return (
    <div class="post-date">
      <h4>{data}</h4>
    </div>
  );
};

export default Form_Date;
