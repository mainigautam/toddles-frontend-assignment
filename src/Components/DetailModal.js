import React ,{useState} from "react";

const DetailModal = ({handleModal,modalOpen,updateEntry,modalData,modalIndex}) => {
  const [heading,setHeading] = useState('');
  const [startDate,setStartDate] = useState('');
  const [endDate,setEndDate] = useState('');
  const [subHeading,setSubheading] = useState('');
  const [description,setDescription] = useState('');
  const newRecord={
    "heading": "",
    "start_date": "",
    "end_date": "",
    "subheading" :  "",
    "desc":""
  };
  console.log(heading)
  console.log(startDate)
  console.log(endDate)
  console.log(subHeading)
  console.log(description)
  return (
    <div className={`detail-modal-blur ${modalOpen?"":"hide"}`}>
      <div className="detail-modal">
        <div className="modal-heading">Add new education</div>
        <div className="modal-col">
          <div className="modal-col-head">Institute</div>
          <div className="modal-col-input">
            <input value={modalData.heading} type="text" onChange={(e)=>{setHeading(e.target.value)}} className="input-box"/>
          </div>
        </div>
        <div className="modal-col">
          <div className="modal-col-head">Degree</div>
          <div className="modal-col-input">
            <input value={modalData.subheading} type="text" onChange={(e)=>{setSubheading(e.target.value)}} className="input-box" />
          </div>
        </div>
        <div className="modal-row">
          <div className="modal-col m-right">
            <div className="modal-col-head">Start Date</div>
            <div className="modal-col-input">
              <input value={modalData.start_date} type="text" onChange={(e)=>{setStartDate(e.target.value)}} className="input-box"/>
            </div>
            </div>
            <div className="modal-col">
            <div className="modal-col-head">End Date</div>
            <div className="modal-col-input">
              <input value={modalData.end_date} type="text" onChange={(e)=>{setEndDate(e.target.value)}} className="input-box"/>
            </div>
          </div>
        </div>
        <div className="modal-col">
          <div className="modal-col-head">Description</div>
          <div className="modal-col-input">
            <textarea  value={modalData.desc} onChange={(e)=>{setDescription(e.target.value)}} className="text-area input-box wd-100"></textarea>
          </div>
        </div>
        <div className="modal-row">
          <button className="btn-save m-right" onClick={()=>{updateEntry(newRecord,modalIndex)}}>
            Save
          </button>
          <button className="btn-save btn-edit" onClick={()=>{handleModal(newRecord,null)}}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
