import * as React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

/**
 *
 *  TODO:
 *
 * - Add Actions buttons and links
 * -
 */

const StyleColors = {
  light: {
    background: 'has-background-primary-light',
    text: 'has-text-black-bis'
  },
  primary: {
    background: 'has-background-primary',
    text: 'has-text-white'
  },
}

const Hero = ({ data: { image, heading, subheading, subheadingNode, imagePosition, style } }) => {
  const StyleComponents = {
    left: ImageLeft,
    right: ImageRight
  }
  const Component = StyleComponents[imagePosition]
  const subheadingHtml = subheadingNode?.childMarkdownRemark?.html ? subheadingNode.childMarkdownRemark?.html : subheading
  if (Component) {
    return <section className={`section ${StyleColors[style].background}`}>
      <div className="container">
        <div className="columns is-desktop is-vcentered">
          <Component image={image} heading={heading} style={style} subheading={subheadingHtml} />
        </div>
      </div>
    </section>
  } else {
    return <></>
  }
};

const TextComponent = ({ heading, style, subheading }) => {
  return (<><h1 className={`title is-size-1 has-text-weight-bold ${StyleColors[style].text}`}>{heading}</h1>
    <div className={`is-size-5 mb-5 ${StyleColors[style].text}`} dangerouslySetInnerHTML={{ __html: subheading }} />
    {/**<Buttons data={buttons} /> */}
    </>)
}

const ImageComponent = ({ heading, image }) => {
  return (<figure className="image is is-covered">
    <GatsbyImage
      image={image.gatsbyImageData}
      style={{ borderRadius: "5px" }}
      alt={heading}
    />
  </figure>)
}
const ImageRight = ({ heading, image, subheading, style }) => {
  return <>
    <div className="column is-half">
      <TextComponent heading={heading} style={style} subheading={subheading} />
    </div>
    <div className="column is-half">
      <ImageComponent heading={heading} image={image} />
    </div>
  </>
}
const ImageLeft = ({ heading, image, subheading, style }) => {
  return <>
    <div className="column is-half">
      <ImageComponent heading={heading} style={style} subheading={subheading} />
    </div>
    <div className="column is-half">
      <TextComponent heading={heading} image={image} />
    </div>
  </>
}

Hero.propTypes = {
  data: PropTypes.shape({
      position: PropTypes.string,
      heading: PropTypes.string,
      content: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      buttons: PropTypes.array,
    })
};

export default Hero;
