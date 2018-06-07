import React from "react";
import VideoDemonstration from "../components/VideoDemonstration";

export const VideoDemonstrationSection = ({}) => {
  return (
    <section className="video-demonstration">
      <VideoDemonstration url="https://www.youtube-nocookie.com/embed/aCqFSLWieOc" title="Demonstration Prototype" description="In this video you can see a short showcase of the platform we are inventing" />
    </section>
  );
};
