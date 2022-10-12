import React from "react";
import "./ImageList.css";

const ImageList = (props) => {
  console.log(props.images);

  const images = props.images.map((image) => {
    console.log(image.patch.small);
  });

  return (
    <div className="container image-results">
      <div className="list">{images.patch.small}</div>
      <p className="d">No More Data Can Be Fecthed</p>
    </div>
  );
};
export default ImageList;
