import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Image from "../../elements/Image";

const Logo = ({ className, ...props }) => {
  const classes = classNames("brand", className);

  return (
    <div {...props} className={classes}>
      <h1 className="m-0">
        <Link to="/">
          <Image
            src={`${process.env.PUBLIC_URL}/Assets/${props.image}`}
            alt="Open"
            width={55}
            height={55}
          />
        </Link>
      </h1>
    </div>
  );
};

export default Logo;
