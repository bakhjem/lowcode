import React from "react";

import { Column, Row, Img, Text, Input, Button, Line } from "components";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  function handleNavigate17() {
    navigate("/signup");
  }

  return (
    <>
      <Column className="bg-gray_200 flex flex-col font-chivo items-center justify-start mx-[auto] sm:p-[15px] md:p-[55px] p-[80px] w-[100%]">
        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center max-w-[1112px] ml-[auto] mr-[auto] sm:pl-[15px] md:pl-[33px] pl-[48px] sm:pr-[15px] rounded-bl-[6px] rounded-br-[0] rounded-tl-[6px] rounded-tr-[0] shadow-bs1 w-[100%]">
          <Column className="flex flex-col justify-start sm:mt-[37px] md:mt-[48px] mt-[70px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
            <Img
              src="images/img_uilchartgrowt.svg"
              className="max-w-[100%] w-[26%]"
              alt="uilchartgrowt"
            />
            <Column className="flex flex-col items-center justify-start sm:mt-[26px] md:mt-[34px] mt-[50px] rounded-radius6 w-[100%]">
              <Column className="flex flex-col justify-start rounded-radius6 w-[100%]">
                <Text className="text-black_900 w-[auto]" as="h5" variant="h5">
                  Login to your account
                </Text>
                <Column className="flex flex-col items-center justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] pt-[4px] rounded-radius6 w-[100%]">
                  <Column className="flex flex-col justify-start rounded-radius6 w-[100%]">
                    <Text
                      className="cursor-text font-normal not-italic text-black_900 w-[auto]"
                      variant="body1"
                    >
                      Email Address
                    </Text>
                    <Input
                      className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                      wrapClassName="md:mt-[11px] mt-[17px] sm:mt-[9px] w-[100%]"
                      type="email"
                      name="FormInput"
                      placeholder="Email Address"
                      shape="RoundedBorder6"
                    ></Input>
                  </Column>
                  <Column className="flex flex-col justify-start sm:mt-[14px] md:mt-[19px] mt-[28px] rounded-radius6 w-[100%]">
                    <Text
                      className="font-normal not-italic text-black_900 w-[auto]"
                      variant="body1"
                    >
                      Password
                    </Text>
                    <Input
                      className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                      wrapClassName="md:mt-[11px] mt-[17px] sm:mt-[9px] w-[100%]"
                      type="password"
                      name="FormInput One"
                      placeholder="Password"
                      shape="RoundedBorder6"
                    ></Input>
                  </Column>
                </Column>
                <Button
                  className="bg-colors1 cursor-pointer font-bold sm:mt-[17px] md:mt-[22px] mt-[32px] text-[16px] text-center text-white_A700 w-[100%]"
                  shape="RoundedBorder6"
                  size="sm"
                  variant="FillTeal400"
                >
                  Login
                </Button>
              </Column>
              <Text
                className="font-bold sm:mt-[12px] md:mt-[16px] mt-[24px] text-teal_400 w-[auto]"
                variant="body2"
              >
                Forgot Password?
              </Text>
              <Column className="flex flex-col items-center justify-start sm:mt-[20px] md:mt-[26px] mt-[38px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[52%]">
                <Text
                  className="common-pointer font-normal not-italic text-gray_900 w-[auto]"
                  variant="body2"
                  onClick={handleNavigate17}
                >
                  <span className="text-gray_900 text-[16px] font-chivo">
                    Don’t have an account?{" "}
                  </span>
                  <span className="text-teal_400 text-[16px] font-chivo font-bold">
                    Sign Up
                  </span>
                </Text>
              </Column>
            </Column>
            <Line className="bg-gray_200 h-[1px] sm:mt-[25px] md:mt-[33px] mt-[48px] w-[100%]" />
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center md:ml-[62px] ml-[91px] sm:mt-[14px] md:mt-[19px] mt-[28px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
              <Text
                className="font-normal not-italic text-bluegray_200 w-[auto]"
                variant="body2"
              >
                Terms & Conditions
              </Text>
              <Text
                className="font-normal sm:ml-[12px] md:ml-[15px] ml-[23px] mt-[1px] not-italic text-bluegray_200 w-[auto]"
                variant="body2"
              >
                Privacy Policy
              </Text>
            </Row>
          </Column>
          <Column className="bg-teal_400 flex flex-col items-center justify-end md:ml-[33px] ml-[48px] sm:mx-[0] sm:p-[15px] md:p-[44px] p-[64px] rounded-bl-[0] rounded-br-[6px] rounded-tl-[0] rounded-tr-[6px] sm:w-[100%] w-[53%]">
            <Column className="flex flex-col items-center justify-start mt-[10px] sm:mt-[5px] md:mt-[6px] sm:px-[0] w-[100%]">
              <Img
                src="images/img_illustration.svg"
                className="max-w-[100%] sm:w-[100%] w-[84%]"
                alt="illustration"
              />
              <Text
                className="font-bold leading-[32.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[31px] md:mt-[41px] mt-[60px] sm:mx-[0] text-center text-white_A700 sm:w-[100%] w-[94%]"
                as="h6"
                variant="h6"
              >
                A powerful SaaS analytics application that is very easy to use
              </Text>
              <Text
                className="font-normal leading-[26.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-center text-white_A700_99 w-[100%]"
                variant="body2"
              >
                The fastest and simple way to generate growing business
                solutions with our products
              </Text>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default LoginPage;
