import React from "react";
import "../dist/css/custom.css";
const HomeData = (props) => {
  let dataHead = props.dataHead;
  let img = props.img;
  let paradata = props.paradata;

  return (
    <div className="blog-dataStyle row " style={{ display: "block" }}>
      <div className="blog-contentData col-xs-12 col-sm-12 col-md-12 col-lg-12 HomeDataColumnReverse">
        <div className="colMarginTop col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <div className="bpe-details-container">
            <p className="bpe-details-title">{dataHead}</p>

            <span>{paradata}</span>
            <p></p>
          </div>
        </div>
        <div className="colPadding col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <div className="bpe-thumb-container">
            <img className="bpe-thumb-img" src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeData;
