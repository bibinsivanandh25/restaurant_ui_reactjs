import React from "react";

import "./Laurels.css";
import { images, data } from "../../constants";
import SubHeading from "../../components/SubHeading/SubHeading";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels-award_card">
    <img src={imgUrl} alt="awards" />
    <div className="app__laurels-award_card-content">
      <p className="p__cormorant" style={{ color: "#DDCA87" }}>
        {title}
      </p>
      <p className="p__cormorant">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app__wrapper app__bg section__padding">
    <div className="app__wrapper_info">
      <SubHeading title="Awards & Recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>
      <div className="app__laurels-award">
        {data.awards.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.laurels} alt="award" />
    </div>
  </div>
);

export default Laurels;
