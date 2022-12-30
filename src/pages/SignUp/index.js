import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Input,
  SelectBox,
  Line,
  CheckBox,
  Button,
} from "components";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();

  function handleNavigate32() {
    navigate("/");
  }

  return (
    <>
      <Column className="bg-gray_200 flex flex-col font-chivo justify-start mx-[auto] sm:p-[15px] md:p-[55px] p-[80px] w-[100%]">
        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1112px] sm:ml-[27px] md:ml-[35px] ml-[auto] mr-[auto] sm:pl-[15px] md:pl-[33px] pl-[48px] sm:pr-[15px] rounded-bl-[6px] rounded-br-[0] rounded-tl-[6px] rounded-tr-[0] shadow-bs1 w-[100%]">
          <Column className="flex flex-col justify-start sm:mt-[34px] md:mt-[44px] mt-[64px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
            <Img
              src="images/img_uilchartgrowt.svg"
              className="max-w-[100%] w-[26%]"
              alt="uilchartgrowt"
            />
            <Column className="flex flex-col justify-start sm:mt-[29px] md:mt-[38px] mt-[56px] w-[100%]">
              <Text className="text-black_900 w-[auto]" as="h5" variant="h5">
                Create your Growly Account
              </Text>
              <Column className="flex flex-col items-center justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between pt-[4px] rounded-radius6 w-[100%]">
                  <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] rounded-radius6 sm:w-[100%] w-[47%]">
                    <Text
                      className="font-normal not-italic text-black_900 w-[auto]"
                      variant="body1"
                    >
                      Firts Name
                    </Text>
                    <Input
                      className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                      wrapClassName="md:mt-[11px] mt-[17px] sm:mt-[9px] w-[100%]"
                      type="text"
                      name="FormInput"
                      placeholder="First Name"
                      shape="RoundedBorder6"
                    ></Input>
                  </Column>
                  <Column className="flex flex-col justify-start mt-[1px] sm:mx-[0] sm:px-[0] rounded-radius6 sm:w-[100%] w-[47%]">
                    <Text
                      className="font-normal ml-[4px] not-italic text-black_900 w-[auto]"
                      variant="body1"
                    >
                      Last Name
                    </Text>
                    <Input
                      className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                      wrapClassName="md:mt-[11px] mt-[17px] sm:mt-[9px] w-[100%]"
                      type="text"
                      name="FormInput One"
                      placeholder="Last Name"
                      shape="RoundedBorder6"
                    ></Input>
                  </Column>
                </Row>
                <Column className="flex flex-col justify-start sm:mt-[14px] md:mt-[19px] mt-[28px] rounded-radius6 w-[100%]">
                  <Text
                    className="font-normal not-italic text-black_900 w-[auto]"
                    variant="body1"
                  >
                    Email Address
                  </Text>
                  <Input
                    className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                    wrapClassName="md:mt-[11px] mt-[17px] sm:mt-[9px] w-[100%]"
                    type="email"
                    name="FormInput Two"
                    placeholder="Email Address"
                    shape="RoundedBorder6"
                  ></Input>
                </Column>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[12px] md:mt-[16px] mt-[24px] sm:pt-[3px] md:pt-[4px] pt-[6px] rounded-radius6 w-[100%]">
                  <Column className="flex flex-col justify-start mt-[1px] sm:mx-[0] sm:px-[0] rounded-radius6 sm:w-[100%] w-[47%]">
                    <Text
                      className="font-normal not-italic text-black_900 w-[auto]"
                      variant="body1"
                    >
                      Company Name
                    </Text>
                    <Input
                      className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                      wrapClassName="md:mt-[8px] mt-[12px] sm:mt-[6px] w-[100%]"
                      type="text"
                      name="FormInput Three"
                      placeholder="Company Name"
                      shape="RoundedBorder6"
                      size="xl"
                    ></Input>
                  </Column>
                  <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] rounded-radius6 sm:w-[100%] w-[47%]">
                    <Text
                      className="font-normal not-italic text-black_900 w-[auto]"
                      variant="body1"
                    >
                      Company size
                    </Text>
                    <SelectBox
                      className="font-normal mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-[16px] text-bluegray_200 w-[100%]"
                      placeholderClassName="text-bluegray_200"
                      name="forminput Four"
                      placeholder="Company Size"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown.svg"
                          className="w-[24px] h-[24px] mr-[13px] sm:mr-[6px] sm:h-[13px] sm:w-[12px] md:mr-[8px] md:h-[17px] md:w-[16px] max-w-[100%]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                  </Column>
                </Row>
                <Column className="flex flex-col justify-start sm:mt-[14px] md:mt-[19px] mt-[28px] w-[100%]">
                  <Text
                    className="font-normal not-italic text-black_900 w-[auto]"
                    variant="body1"
                  >
                    Phone Number
                  </Text>
                  <Row className="bg-white_A700 border border-bluegray_200 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[17px] sm:mt-[9px] sm:p-[4px] md:p-[5px] p-[8px] rounded-radius6 w-[100%]">
                    <Column className="bg-white_A700 flex flex-col items-center md:ml-[5px] ml-[8px] sm:mx-[0] sm:my-[3px] md:my-[4px] my-[7px] pb-[10px] sm:pb-[5px] md:pb-[6px] sm:w-[100%] w-[6%]">
                      <div className="bg-red_800 h-[10px] sm:h-[6px] md:h-[7px] w-[100%]"></div>
                    </Column>
                    <Img
                      src="images/img_arrowdown_bluegray_600.svg"
                      className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[4px] md:ml-[5px] ml-[8px] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="arrowdown"
                    />
                    <Line className="bg-gray_200 sm:h-[14px] md:h-[18px] h-[26px] sm:ml-[4px] md:ml-[5px] ml-[8px] my-[4px] w-[1px]" />
                    <Input
                      className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_600 text-bluegray_600 w-[100%]"
                      wrapClassName="md:ml-[4px] ml-[7px] mt-[1px] sm:mx-[0] sm:w-[100%] w-[76%]"
                      type="number"
                      name="frame178"
                      placeholder="Phone Number"
                      size="sm"
                      variant="FillWhiteA700"
                    ></Input>
                  </Row>
                </Column>
                <CheckBox
                  className="font-normal leading-[26.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[12px] md:mt-[16px] mt-[24px] not-italic sm:pl-[4px] md:pl-[5px] pl-[8px] text-[16px] text-bluegray_600 w-[100%]"
                  inputClassName="h-[16px] mr-[5px] w-[16px]"
                  name="BysigningupI"
                  label="By signing up I agree  to Sastly Terms & Conditons and Privacy Policy"
                ></CheckBox>
                <Button
                  className="cursor-pointer font-bold sm:mt-[17px] md:mt-[22px] mt-[32px] text-[16px] text-center text-white_A700 w-[100%]"
                  shape="RoundedBorder6"
                  size="sm"
                  variant="FillTeal400"
                >
                  Sign Up
                </Button>
              </Column>
              <Text
                className="common-pointer font-normal ml-[141px] sm:ml-[75px] md:ml-[97px] sm:mt-[15px] md:mt-[20px] mt-[30px] not-italic text-gray_900 w-[auto]"
                variant="body2"
                onClick={handleNavigate32}
              >
                <span className="text-gray_900 text-[16px] font-chivo">
                  Already an user?{" "}
                </span>
                <span className="text-teal_400 text-[16px] font-chivo font-bold">
                  Login
                </span>
              </Text>
            </Column>
            <Line className="bg-gray_200 h-[1px] sm:mt-[34px] md:mt-[44px] mt-[64px] w-[100%]" />
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center md:ml-[62px] ml-[91px] sm:mt-[14px] md:mt-[19px] mt-[28px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
              <Text
                className="font-normal not-italic text-bluegray_200 w-[auto]"
                variant="body2"
              >
                Terms & Conditions
              </Text>
              <Text
                className="font-normal sm:ml-[12px] md:ml-[16px] ml-[24px] mt-[1px] not-italic text-bluegray_200 w-[auto]"
                variant="body2"
              >
                Privacy Policy
              </Text>
            </Row>
          </Column>
          <Column className="bg-teal_400 flex flex-col items-center justify-start md:ml-[33px] ml-[48px] sm:mx-[0] sm:p-[15px] md:p-[44px] p-[65px] rounded-bl-[0] rounded-br-[6px] rounded-tl-[0] rounded-tr-[6px] sm:w-[100%] w-[53%]">
            <Column className="flex flex-col items-center justify-start mb-[144px] sm:mb-[76px] md:mb-[99px] mt-[120px] sm:mt-[63px] md:mt-[82px] sm:px-[0] w-[100%]">
              <Img
                src="images/img_illustration_402X358.svg"
                className="max-w-[100%] sm:w-[100%] w-[84%]"
                alt="illustration"
              />
              <Text
                className="font-bold leading-[32.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[34px] md:mt-[44px] mt-[64px] sm:mx-[0] text-center text-white_A700 sm:w-[100%] w-[94%]"
                as="h6"
                variant="h6"
              >
                Give trust to us to provide accurate data for your product
              </Text>
              <Text
                className="font-normal leading-[26.00px] md:leading-[normal] sm:leading-[normal] md:mt-[11px] mt-[16px] sm:mt-[8px] not-italic text-center text-white_A700_99 w-[100%]"
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

export default SignUpPage;
