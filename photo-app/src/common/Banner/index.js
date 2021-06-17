import React from 'react';
import "./banner.scss";

const Banner = ({ title, backgroundUrl }) => {
  const bannerStyle = backgroundUrl
    ? { backgroundImage: `url(${backgroundUrl})` }
    : {};

  return (
    <section className="banner" style={bannerStyle}>
      <h1 className="banner__title">{title}</h1>
    </section>
  );
};

export default Banner;
