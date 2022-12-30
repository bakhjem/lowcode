import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder6: "rounded-radius6",
  icbRoundedBorder6: "rounded-radius6",
};
const variants = {
  FillTeal400: "bg-teal_400 text-white_A700",
  FillTeal401: "bg-teal_401 text-white_A700",
  icbOutlineIndigo9000c: "bg-white_A700 shadow-bs",
};
const sizes = {
  sm: "md:p-[10px] p-[15px] sm:p-[7px]",
  smIcn: "md:p-[14px] p-[21px] sm:px-[15px] sm:py-[11px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder6", "icbRoundedBorder6"]),
  variant: PropTypes.oneOf([
    "FillTeal400",
    "FillTeal401",
    "icbOutlineIndigo9000c",
  ]),
  size: PropTypes.oneOf(["sm", "smIcn"]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };
