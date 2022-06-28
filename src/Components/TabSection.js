import React, { useState } from "react";
import TabButton from "./TabButton";
import Tab from "./Tab";
import "../Styles/TabSection.css";

const TabSection = ({ data, setList, handleRender }) => {
  const [mediaSelection, setMediaSelection] = useState("educations");
  const addData = (newData) => {
    data[0][mediaSelection].push(newData);
    setList(data);
    handleRender();
  };
  return (
    <>
      <div className="tab-section-selector">
        <TabButton
          mediaSelection={mediaSelection}
          setMediaSelection={setMediaSelection}
          index={"educations"}
          btnTitle={"Education"}
          data={data}
        />
        <TabButton
          mediaSelection={mediaSelection}
          setMediaSelection={setMediaSelection}
          index={"works"}
          btnTitle={"Work Experiences"}
          data={data}
        />
        <TabButton
          mediaSelection={mediaSelection}
          setMediaSelection={setMediaSelection}
          index={"achievements"}
          btnTitle={"Projects"}
          data={data}
        />
      </div>
      <Tab
        mediaSelection={mediaSelection}
        data={data}
        setList={setList}
        handleRender={handleRender}
        addData={addData}
      />
    </>
  );
};

export default TabSection;
