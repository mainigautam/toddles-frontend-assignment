import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import upIcon from "../Assets/UploadOutlined.svg";
const DropBox = () => {
  const [file, setFile] = useState([]); //File State
  const { getRootProps, open, getInputProps } = useDropzone({ //useDropzone Custom Hook from '@react-dropzone
    accept: {
      "image/*": [],
    },
    noClick: true,//Enabled to Allow 
    noKeyboard: true,//Upload Button Along with Dropzone
    multiple: false,
    onDrop: (acceptedFiles) => {
      setFile(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  //Function to return Thumbnail For Photo is "file" is Set
  const thumbs = file.map((file) => (
    <div key={file.name}>
      <div className="dropzone">
        <img
          src={file.preview}
          alt=" "
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
          className="dropzone-image"
        />
      </div>
    </div>
  ));

  useEffect(() => {
    //To Avoid Memory Leaks revoke on Unmount
    return () => file.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [file]);//Re-Renders as State Changes
  
  return (
    <>
      <div
        {...getRootProps({ className: "dropzone" })}
        style={{ display: file.length === 1 ? "none" : "flex" }}
      >
        <input {...getInputProps()} />
        <button type="button" onClick={open} className="dropzone-btn">
          <img src={upIcon} alt="" className="upIcon" />
          Upload photo
        </button>
      </div>
      {thumbs}
    </>
  );
};
export default DropBox;
