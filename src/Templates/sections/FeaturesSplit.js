import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "Founders",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                {/* <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                </div> */}
                <h3 className="mt-0 mb-12 text-color-primary">Ritvik Tiwari</h3>
                <p className="m-0">
                  Hey, I’m Ritvik! I have always been a VLSI enthusiast and I am
                  keen to gain as much knowledge as possible in this domain.
                  FPGA is something which intrigued me a lot, the moment I read
                  about it. Since my childhood days I was interested in learning
                  robotics and the amount of innovations that we have seen in
                  this field are mind blowing. I hope this site gives you some
                  inspiration to innovate something new!
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom" &&
                    "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={process.env.PUBLIC_URL + "/Assets/ritvik_round.png"}
                  alt="Features split 02"
                  width={528}
                  height={396}
                  style={{ marginBottom: -120, marginTop: -120 }}
                />
              </div>
            </div>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                {/* <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                </div> */}
                <h3 className="mt-0 mb-12 text-color-primary">Prit Varmora</h3>
                <p className="m-0">
                  I am Prit Varmora, the founder of Abhiyanta Community. I am an
                  Engineer in the field of Electronics and communication and
                  also a robotics enthusiast. Our Team secured the 2nd rank in
                  the Nation-wide E-yantra Robotics Competition for which I have
                  tried for 3 years continuously. I have done my summer
                  internship at IIT Bombay. At every stage of my life as a
                  student, I have observed that the education system has not put
                  in any effort to change the conventional system. The key
                  motivation behind establishing this community is to give wings
                  to the student’s innovative ideas and make them implemented by
                  the approach of learning together.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={process.env.PUBLIC_URL + "/Assets/prit_round.png"}
                  alt="Features split 02"
                  width={528}
                  height={396}
                  style={{ marginBottom: -120, marginTop: -120 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
