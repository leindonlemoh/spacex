import React from "react";
import "./ImageList.css";

const ImageList = (props) => {
  console.log(props.images);

  // const images = this.props.images.map((image) => {
  //   console.log(image.patch.small);
  //   return (
  //     <div>
  //       <img src={image.patch.small} />
  //       <div className="details"></div>
  //     </div>
  //   );
  // });

  return (
    <div className="container image-results">
      {/* {images} */}
      <p className="">No More Data Can Be Fecthed</p>
    </div>
  );
};
export default ImageList;
