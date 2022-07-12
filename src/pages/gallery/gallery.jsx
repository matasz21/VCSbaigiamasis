import React from "react";
import { InstagramEmbed } from 'react-social-media-embed';

const Gallery = () => {
  return (
  <div>
    <div className="container">
      <div className="row justify-content-around my-3">
        <InstagramEmbed url="https://www.instagram.com/p/CfpFv5nrEOO/" width={400} />
        <InstagramEmbed url="https://www.instagram.com/p/CfVZrkzIKtk/" width={400} />
        <InstagramEmbed url="https://www.instagram.com/p/CdIYZukjO2L/" width={400} />
      </div>
    </div>
  </div>
  )
};

export default Gallery;
