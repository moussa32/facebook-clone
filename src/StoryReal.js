import React from "react";
import Story from "./Story.js";
import "./StoryReal.css";

const StoryReal = () => {
  return (
    <div className="storyReal">
      <Story
        image="https://www.presentationmagazine.com/newimages/pres-topic-510.jpg"
        profileSrc="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg"
        title="THE ROCK"
      />
      <Story
        image="https://www.presentationmagazine.com/newimages/pres-topic-510.jpg"
        profileSrc="https://www.gtlaw.com/-/media/images/team/p/person-philip-i/34485largepng.png"
        title="Dany Anno"
      />
      <Story
        image="https://www.presentationmagazine.com/newimages/pres-topic-510.jpg"
        profileSrc="https://www.bentbusinessmarketing.com/wp-content/uploads/2013/02/35844588650_3ebd4096b1_b-1024x683.jpg"
        title="Eliy"
      />
      <Story
        image="https://www.presentationmagazine.com/newimages/pres-topic-510.jpg"
        profileSrc="https://www.machinecurve.com/wp-content/uploads/2019/07/thispersondoesnotexist-1-1022x1024.jpg"
        title="Andro"
      />
    </div>
  );
};

export default StoryReal;
