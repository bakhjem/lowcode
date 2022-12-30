import React from "react";
const variantClasses = {
  h1: "font-bold sm:text-[38px] md:text-[44px] text-[52px]",
  h2: "font-bold sm:text-[34px] md:text-[40px] text-[44px]",
  h3: "font-bold sm:text-[32px] md:text-[34px] text-[36px]",
  h4: "font-bold sm:text-[26px] md:text-[28px] text-[30px]",
  h5: "font-bold sm:text-[22px] md:text-[24px] text-[26px]",
  h6: "sm:text-[18px] md:text-[20px] text-[22px]",
  body1: "text-[18px]",
  body2: "text-[16px]",
  body3: "text-[14px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
