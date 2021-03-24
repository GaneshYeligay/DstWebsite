import React from "react";
import "../dist/css/engineering-services.css";
const EngineeringEmbedded2 = props => {
  let dataHead = props.dataHead;
  let img = props.img;
  let paradata = props.paradata;
  //   let bgColor = props.tooltipStyles;
let tabledata= props.tabledata;
let data1 =props.data1;
let data2 =props.data2;
let data3 =props.data3;
let data4 =props.data4;
let data5 =props.data5;
let data6 =props.data6;
let data7 =props.data7;
let data8 =props.data8;
let data9 =props.data9;
let data10 =props.data10;

  return (
    <div className="engineeringEmbd row ">
      <div className="engineeringData col-xs-12 col-sm-12 col-md-12 col-lg-12 HomeDataColumnReverse">
        
        <div className="colMarginTop col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <div className="bpe-details-container-eng">
            <p className="bpe-details-title">{dataHead}</p>

            <span>{paradata}</span>
            {(props.tabledata)?(
            
              <table className="tabledata">
   
              <tbody>
                <tr>
            <td>{data1}</td>
            <td>{data2}</td>
                  
                </tr>
                <tr>
                <td>{data3}</td>
                  <td>{data4}</td>
                 
                </tr>
                <tr>
                  <td>{data5}</td>
                  <td>{data6}</td>
                  
                </tr>
                <tr>
                  <td>{data7}</td>
                  <td>{data8}</td>
                  
                </tr>
                <tr>
                  <td>{data9}</td>
                  <td>{data10}</td>
                  
                </tr>
              </tbody>
            </table>
             ):"" }
            
          </div>
        </div>
        <div className="colPadding col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <div className="bpe-thumb-container-eng">
            <img className="bpe-thumb-img" src={img} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default EngineeringEmbedded2;
