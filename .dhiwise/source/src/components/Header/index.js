import React from "react";

import { Row, Img, Text, Button } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:p-[10px] p-[15px] sm:p-[7px] w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-center md:ml-[102px] ml-[149px] sm:mx-[0] my-[10px] sm:my-[5px] md:my-[6px] sm:px-[0] sm:w-[100%] w-[9%]">
            <Img
              src="defaultNoData.png"
              className="flex-shrink-0 sm:h-[16px] md:h-[21px] h-[30px] max-w-[100%] sm:w-[15px] md:w-[20px] w-[30px]"
              alt="Group448"
            />
            <Text className="flex-grow font-bold font-cinzeldecorative sm:mb-[2px] md:mb-[3px] mb-[5px] md:ml-[11px] ml-[16px] sm:ml-[8px] sm:mt-[4px] md:mt-[5px] mt-[8px] text-[16px] text-teal_400">
              Growit
            </Text>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center mb-[14px] sm:mb-[7px] md:mb-[9px] md:ml-[53px] ml-[78px] md:mt-[11px] mt-[17px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[30%] common-row-list common-row-list common-row-list">
            <Text className="font-bold font-chivo mt-[1px] text-[16px] text-gray_900 w-[auto]">
              Pricing
            </Text>
            <Text className="font-bold font-chivo sm:ml-[21px] md:ml-[27px] ml-[40px] my-[1px] text-[16px] text-gray_900 w-[auto]">
              Resources Center
            </Text>
            <Text className="font-bold font-chivo mb-[1px] sm:ml-[21px] md:ml-[27px] ml-[40px] text-[16px] text-gray_900 w-[auto]">
              About
            </Text>
            <Text className="font-bold font-chivo sm:ml-[21px] md:ml-[27px] ml-[40px] my-[1px] text-[16px] text-gray_900 w-[auto]">
              Contact
            </Text>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[199px] ml-[290px] sm:mx-[0] sm:px-[0] rounded-radius6 sm:w-[100%] w-[15%]">
            <Text className="font-bold font-chivo mb-[14px] sm:mb-[7px] md:mb-[9px] sm:mt-[10px] md:mt-[13px] mt-[19px] text-[16px] text-gray_900 w-[auto]">
              Login
            </Text>
            <Button
              className="bg-teal_400 cursor-pointer font-bold font-chivo min-w-[60%] sm:ml-[21px] md:ml-[27px] ml-[40px] sm:p-[15px] md:px-[22px] px-[32px] md:py-[11px] py-[17px] rounded-radius6 text-[16px] text-center text-white_A700 w-[max-content]"
              shape="RoundedBorder6"
              size="PaddingAll15"
              variant="FillTeal400"
              fontStyle="ChivoBold16"
            >
              Sign Up
            </Button>
          </Row>
        </Row>
      </header>
    </>
  );
};

export default Header;
