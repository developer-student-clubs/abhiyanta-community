import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const Items = [
  {
    title: "Internet of Things",
    description:
      "Network of physical objects (things) that are embedded with sensors, software, and other technologies for the purpose of connecting and exchanging data over the Internet",
    image: "./../../assets/images/feature-tile-icon-02.svg",
  },
  {
    title: "Embedded System",
    description:
      "A combination of a processor, controller and I/O peripheral devices that has a dedicated function within a larger mechanical or electrical system",
    image: "./../../assets/images/feature-tile-icon-02.svg",
  },
  {
    title: "Digital Signal Processing",
    description:
      "Use of digital processing, such as by computers or more specialized digital signal processors, to perform a wide variety of processing operations on signals",
    image: "./../../assets/images/feature-tile-icon-02.svg",
  },
  {
    title: "Robotics",
    description:
      "Network of physical objects (things) that are embedded with sensors, software, and other technologies for the purpose of connecting and exchanging data over the Internet",
    image: "./../../assets/images/feature-tile-icon-02.svg",
  },
  {
    title: "Control System",
    description:
      "A control system manages, commands, directs, or regulates the behavior of other devices or systems using control loops",
    image: "./../../assets/images/feature-tile-icon-02.svg",
  },
  {
    title: "Image Processing",
    description:
      "Digital image processing is the use of a digital computer to process digital images through different algorithms",
    image: "./../../assets/images/feature-tile-icon-02.svg",
  },
];

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: "Our Mission",
    paragraph:
      "Abhiyanta Community strives to create an environment for innovators and enthusiasts, where they learn, innovate and implement their ideas together. We intend to facilitate overall growth of individuals by collaborating with other platforms. We also maintain a creative work environment, which respects diversity, new ideas, and hard work.",
  };

  const subSectionHeader = {
    paragraph:
      '"To empower innovators to implement their best ideas and get it in front of the audience they deserve"',
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader
            data={sectionHeader}
            className="center-content hero-inner section-inner"
          />
          <i>
            <SectionHeader
              data={subSectionHeader}
              className="center-content italic"
            />
          </i>
          <div className={tilesClasses}>
            {Items.map((item) => (
              <div
                className="tiles-item reveal-from-bottom"
                data-reveal-delay="200"
              >
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={require("./../../assets/images/feature-tile-icon-02.svg")}
                        alt="Features tile icon 02"
                        width={64}
                        height={64}
                      />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">{item.title}</h4>
                    <p className="m-0 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
