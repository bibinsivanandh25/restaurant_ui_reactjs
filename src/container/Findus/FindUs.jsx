import React from "react";
import { images } from "../../constants";
import SubHeading from "../../components/SubHeading/SubHeading";

const FindUs = () => (
  <div className="app__wrapper app__bg section__padding">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans"></p>
        <p
          className="p__cormorant"
          style={{ color: "#DDCA87", margin: "1rem 0" }}
        >
          Opening Hours
        </p>
        <p className="p__opensans">Mon - Fri: 10:00am : 02:00am</p>
        <p className="p__opensans">Sat - Sun: 10:00am : 03:00am</p>
      </div>
      <button className="custom__button" style={{ marginTop: "3rem" }}>
        Visit Us
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="findUs" />
    </div>
  </div>
);

export default FindUs;
