import * as React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const FullImage = ({ image, heading, height = 400 }) => {
  return (
    <div
      className="mt-0"
      style={{
        display: "grid",
        alignItems: "center",
      }}
    >
      <GatsbyImage
        image={getImage(image)}
        objectFit={"cover"}
        objectPosition="center"
        style={{
          gridArea: "1/1",
          maxHeight: height
        }}
        layout="fullWidth"
        aspectratio={3 / 1}
        alt=""
        formats={["auto", "webp", "avif"]}
      />
      {(heading) && (
        <div
          style={{
            gridArea: "1/1",
            position: "relative",
            placeItems: "center",
            display: "grid",
          }}
        >
          {heading && (
            <h1
              className="has-background-primary p-1 has-text-white has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            >
              {heading}
            </h1>
          )}

        </div>
      )}
    </div>
  )
};

FullImage.propTypes = {
  heading: PropTypes.string,
  image: PropTypes.object,
  height: PropTypes.number
};

export default FullImage;
