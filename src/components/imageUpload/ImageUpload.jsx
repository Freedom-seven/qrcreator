import React, { useCallback, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import "./ImageUpload.css";

function ImageUpload({ onUpload }) {
  const onDrop = useCallback(
    (acceptedFiles) => {
      onUpload(acceptedFiles[0]);
    },
    [onUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  const dropzoneClass = useMemo(
    () => `dropzone ${isDragActive ? "active" : ""}`,
    [isDragActive]
  );

  const handleClick = () => {
    document.querySelector("input").click();
  };

  return (
    <div {...getRootProps()} className={`image-upload ${dropzoneClass}`}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the image here ...</p>
      ) : (
        <p>Drag 'n' drop an image here, or click to select an image</p>
      )}
      <button className="choose-image-button" onClick={handleClick}>
        Choose an image
      </button>
    </div>
  );
}

export default ImageUpload;
