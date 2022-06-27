import React , {useState} from "react";
import TabDetail from "./TabDetail";
import DetailModal from './DetailModal'
const Tab = ({
  mediaSelection,
  data,
  setList,
  handleRender,
  addData
}) => {
  const [modalOpen,setModalOpen] = useState(false)
  const [modalData,setModalData] = useState({
    "heading": "",
    "start_date": "",
    "end_date": "",
    "subheading" :  "",
    "desc":""
  })
  const [modalIndex,setModalIndex]=useState(null);
  const handleModal=(record,index)=>{
    setModalOpen(!modalOpen);
    setModalIndex(index);
    setModalData(record);
  }
  const updateEntry= (newRecord,index) =>{
    data[0][mediaSelection].splice(index,1);
    data[0][mediaSelection].splice(index,0, newRecord);
    handleRender();
    handleModal();
  }
  const deleteRecord = (index) => {
    data[0][mediaSelection].splice(index, 1);
    setList(data);
    handleRender();
  };
  return (
    <div className="tab-card">
      <button className="tab-add-btn" onClick={()=>{addData()}}>Add New</button>
      {data[0][mediaSelection].map((record, key) => {
        return (
          <TabDetail
            record={record}
            tabHeading={record.heading}
            tabSDate={record.start_date}
            tabEDate={record.end_date}
            tabSubHeadVal={record.subheading}
            tabDesc={record.desc}
            mediaSelection={mediaSelection}
            deleteRecord={deleteRecord}
            handleModal={handleModal}
            modalOpen={modalOpen}
            updateEntry={updateEntry}
            key={key}
            index={key}
          />
        );
      })}
      <DetailModal modalOpen={modalOpen} handleModal={handleModal} updateEntry={updateEntry} modalData={modalData} modalIndex={modalIndex}/>
    </div>
  );
};

export default Tab;
