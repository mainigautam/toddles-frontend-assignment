import React, { useState } from "react";
import caretR from "../Assets/CaretRightFilled.svg";
import caretD from "../Assets/CaretDownFilled.svg";
const TabDetail = ({
  tabHeading,
  tabSDate,
  tabEDate,
  tabDesc,
  tabSubHeadVal,
  mediaSelection,
  record,
  index,
  deleteRecord,
  handleModal
}) => {
  const [expanded, setExpanded] = useState(false);
  const handleExpansion = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="tab-detail">
      <div
        className="tab-header"
        onClick={() => {
          handleExpansion();
        }}
      >
        <div className="tab-icon">
          <img src={expanded ? caretD : caretR} alt="" />
        </div>
        <div className="tab-heading">{tabHeading}</div>
        <div className="tab-date">
          {tabSDate}
          <span className={mediaSelection === "achievements" ? "tab-hide" : ""}>
            &nbsp;-&nbsp; 
          </span>
          {tabEDate}
        </div>
      </div>
      <div
        className="tab-footer"
        style={{ display: expanded ? "flex" : "none" }}
      >
        <div className={mediaSelection === "achievements" ? "tab-hide" : ""}>
          <div className="tab-foot-heading">Degree</div>
          <div className="tab-foot-value b-big-headings">{tabSubHeadVal}</div>
        </div>
        <div className="tab-foot-heading">Description</div>
        <div className="tab-foot-value">{tabDesc}</div>
        <div className="tab-foot-btns">
          <button className="foot-button" id={index} onClick={()=>{handleModal(record,index)}}>Edit</button>
          <button className="foot-button" onClick={()=>{deleteRecord(index)}}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TabDetail;
