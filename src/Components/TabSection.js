import React, { useState } from "react";
import TabButton from "./TabButton";
import Tab from "./Tab";
import '../Styles/TabSection.css'

const TabSection = ({data,setList,handleRender}) => {
  const [mediaSelection, setMediaSelection] = useState('educations');
  const addData=()=>{
    const chunk ={
      "heading": "Chandigarh Group Of Colleges",
      "start_date": "June 2019",
      "end_date": "May 2019",
      "subheading": "B.Tech",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    };
    data[0][mediaSelection].push(chunk);
    setList(data);
    handleRender();
  }
  return (
    <>
      <div className="tab-section-selector">
        <TabButton
          mediaSelection={mediaSelection}
          setMediaSelection={setMediaSelection}
          index={'educations'}
          btnTitle={"Education"}
          data={data}
        />
        <TabButton
          mediaSelection={mediaSelection}
          setMediaSelection={setMediaSelection}
          index={'works'}
          btnTitle={"Work Experiences"}
          data={data}
        />
        <TabButton
          mediaSelection={mediaSelection}
          setMediaSelection={setMediaSelection}
          index={'achievements'}
          btnTitle={"Projects"}
          data={data}
        />
      </div>
      <Tab mediaSelection={mediaSelection} data={data} setList={setList} handleRender={handleRender} addData={addData}/>
    </>
  );
};

export default TabSection;
