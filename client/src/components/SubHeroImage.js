import React from "react";
import "../style/SubHeroImage.scss";

function SubHeroImage({ page = "Default" }) {
  return (
    <div
      className="subHeroImageContainer"
      style={{ backgroundImage: "url('./assets/images/slider-1.jpg')" }}
    >
      <h3>{page}</h3>
    </div>
  );
}

export default SubHeroImage;
