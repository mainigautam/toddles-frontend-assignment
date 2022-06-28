import React, { useState } from "react";

const DetailModal = ({
  handleModal,
  modalOpen,
  updateEntry,
  addData,
  modalData,
  modalIndex,
}) => {
  const [heading, setHeading] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [subHeading, setSubheading] = useState(null);
  const [description, setDescription] = useState(null);
  const newRecord = {
    heading: heading,
    start_date: startDate,
    end_date: endDate,
    subheading: subHeading,
    desc: description,
  };
  const submitData = (event) => {
    modalIndex===null?addData(newRecord):updateEntry(newRecord,modalIndex);
    setHeading(null);
    setEndDate(null);
    setSubheading(null);
    setStartDate(null);
    setDescription(null);
    handleModal();
    document.getElementById('flush').click();
    
  };
  return (
    <div className={`detail-modal-blur ${modalOpen ? "" : "hide"}`}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="detail-modal"
      >
        <div className="modal-heading">Add new education</div>
        <div className="modal-col">
          <div className="modal-col-head">Institute</div>
          <div className="modal-col-input">
            <input
              defaultValue={modalData.heading}
              type="text"
              onChange={(e) => {
                setHeading(e.target.value);
              }}
              className="input-box"
            />
          </div>
        </div>
        <div className="modal-col">
          <div className="modal-col-head">Degree</div>
          <div className="modal-col-input">
            <input
              defaultValue={modalData.subheading}
              type="text"
              onChange={(e) => {
                setSubheading(e.target.value);
              }}
              className="input-box"
            />
          </div>
        </div>
        <div className="modal-row">
          <div className="modal-col m-right">
            <div className="modal-col-head">Start Date</div>
            <div className="modal-col-input">
              <input
                defaultValue={modalData.start_date}
                type="text"
                onChange={(e) => {
                  setStartDate(e.target.value);
                }}
                className="input-box"
              />
            </div>
          </div>
          <div className="modal-col">
            <div className="modal-col-head">End Date</div>
            <div className="modal-col-input">
              <input
                defaultValue={modalData.end_date}
                type="text"
                onChange={(e) => {
                  setEndDate(e.target.value);
                }}
                className="input-box"
              />
            </div>
          </div>
        </div>
        <div className="modal-col">
          <div className="modal-col-head">Description</div>
          <div className="modal-col-input">
            <textarea
              defaultValue={modalData.desc}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className="text-area input-box wd-100"
            ></textarea>
          </div>
        </div>
        <div className="modal-row">
          <button
            type="Submit"
            className="btn-save m-right"
            onClick={(e) => {
              submitData(e);
            }}
          >
            Save
          </button>
          <button
            className="btn-save btn-edit"
            onClick={() => {
              handleModal();
            }}
          >
            Cancel
          </button>
          <button type="reset" id="flush" hidden></button>
        </div>
      </form>
    </div>
  );
};

export default DetailModal;
