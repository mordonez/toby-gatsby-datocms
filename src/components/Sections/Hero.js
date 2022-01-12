import * as React from "react";
import PropTypes from "prop-types";
import Buttons from "@components/Buttons/Buttons";
import { GatsbyImage } from "gatsby-plugin-image";
import { StructuredText } from "react-datocms";
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

const Hero = ({ data }) => {
  const StyleComponents = {
    left: ImageLeft,
    right: ImageRight
  }
  const Component = StyleComponents[data.imagePosition]
  if (Component) {
    return <section className={`section ${StyleColors[data.style].background}`}>
      <div className="container">
        <div className="columns is-desktop is-vcentered">
          <Component data={data} />
        </div>
      </div>
    </section>
  } else {
    return <></>
  }
};

const TextComponent = ({ data }) => {
  return (<><h1 className={`title is-size-1 has-text-weight-bold ${StyleColors[data.style].text}`}>{data.heading}</h1>
    <div className={`is-size-5 mb-5 ${StyleColors[data.style].text}`} dangerouslySetInnerHTML={{ __html: data.subheading }} />
    {/**<Buttons data={data.buttons} /> */}
    </>)
}

const ImageComponent = ({ data }) => {
  return (<figure className="image is is-covered">
    <GatsbyImage
      image={data.image.gatsbyImageData}
      style={{ borderRadius: "5px" }}
      alt={data.heading}
    />
  </figure>)
}
const ImageRight = ({ data }) => {
  return <>
    <div className="column is-half">
      <TextComponent data={data} />
    </div>
    <div className="column is-half">
      <ImageComponent data={data} />
    </div>
  </>
}
const ImageLeft = ({ data }) => {
  return <>
    <div className="column is-half">
      <ImageComponent data={data} />
    </div>
    <div className="column is-half">
      <TextComponent data={data} />
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
