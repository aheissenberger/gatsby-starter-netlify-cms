import React from "react";
import VideoDemonstration from "../components/VideoDemonstration";

export const VideoDemonstrationSection = ({url, title, description}) => {
  return (
    <section className="video-demonstration">
      <VideoDemonstration url={url} title={title} description={description} />
    </section>
  );
};
