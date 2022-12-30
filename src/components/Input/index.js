import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineBluegray200: "bg-white_A700 border border-bluegray_200 border-solid",
  FillWhiteA700: "bg-white_A700",
  FillGray50: "bg-gray_50",
};
const shapes = { RoundedBorder6: "rounded-radius6" };
const sizes = {
  sm: "sm:px-[3px] md:px-[4px] px-[7px] sm:py-[4px] md:py-[5px] py-[8px]",
  md: "p-[10px] sm:p-[5px] md:p-[6px]",
  lg: "md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px]",
  xl: "pb-[12px] sm:pb-[6px] md:pb-[8px] md:pt-[12px] pt-[18px] sm:pt-[9px] px-[12px] sm:px-[6px] md:px-[8px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder6"]),
  variant: PropTypes.oneOf([
    "OutlineBluegray200",
    "FillWhiteA700",
    "FillGray50",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "OutlineBluegray200",
  size: "lg",
};

export { Input };
