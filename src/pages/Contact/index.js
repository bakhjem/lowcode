import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Button,
  List,
  Input,
  Line,
  TextArea,
} from "components";
import Header from "components/Header";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate();

  function handleNavigate18() {
    navigate("/about");
  }
  function handleNavigate19() {
    navigate("/resourcecenter");
  }
  function handleNavigate20() {
    navigate("/about");
  }
  function handleNavigate21() {
    navigate("/resourcecenter");
  }
  function handleNavigate22() {
    navigate("/pricing");
  }
  function handleNavigate23() {
    navigate("/signup");
  }
  function handleNavigate24() {
    navigate("/");
  }
  function handleNavigate33() {
    navigate("/pricing");
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-chivo items-center justify-start mx-[auto] w-[100%]">
        <Header className="w-[100%]" />
        <Column className="flex flex-col items-center justify-start sm:mt-[37px] md:mt-[48px] mt-[70px] w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1112px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
              <Column className="flex flex-col items-center justify-start w-[100%]">
                <Text
                  className="leading-[54.00px] md:leading-[normal] sm:leading-[normal] text-gray_900 w-[100%]"
                  as="h2"
                  variant="h2"
                >
                  Talk to our product analytics expert
                </Text>
                <Text
                  className="font-normal leading-[28.00px] md:leading-[normal] sm:leading-[normal] md:mt-[11px] mt-[16px] sm:mt-[8px] not-italic text-bluegray_600 w-[100%]"
                  variant="body1"
                >
                  Have questions about pricing, plans, or Growit? Fill out the
                  form and our product analytics expert will be in touch
                  directly.
                </Text>
              </Column>
              <Column className="flex flex-col justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]">
                <Text className="text-gray_900 w-[auto]" as="h5" variant="h5">
                  Our office
                </Text>
                <Column className="flex flex-col items-center justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
                  <Column className="flex flex-col items-center justify-start rounded-radius6 w-[100%]">
                    <Img
                      src="images/img_rectangle224.png"
                      className="max-w-[100%] rounded-radius6 sm:w-[100%] w-[99%]"
                      alt="Rectangle224"
                    />
                    <Text
                      className="font-normal leading-[28.00px] md:leading-[normal] sm:leading-[normal] md:mt-[12px] mt-[18px] sm:mt-[9px] not-italic text-bluegray_600 w-[100%]"
                      variant="body1"
                    >
                      Have questions about pricing, plans, or Growit? Fill out
                      the form and our product analytics expert will be in touch
                      directly.
                    </Text>
                  </Column>
                  <List
                    className="sm:gap-[21px] md:gap-[27px] gap-[40px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]"
                    orientation="horizontal"
                  >
                    <Column className="flex flex-col justify-start pb-[3px] sm:px-[0] w-[100%]">
                      <Text
                        className="font-bold text-gray_900 w-[auto]"
                        variant="body1"
                      >
                        United Kingdom
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]">
                        <Img
                          src="images/img_location.svg"
                          className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mt-[3px] sm:w-[10px] md:w-[13px] w-[20px]"
                          alt="location"
                        />
                        <Text
                          className="flex-grow font-normal leading-[26.00px] md:leading-[normal] sm:leading-[normal] md:ml-[5px] ml-[8px] sm:mx-[0] not-italic text-bluegray_600"
                          variant="body2"
                        >
                          30 Eastbourne Terrace
                          <br />
                          Paddington, London
                          <br />
                          W2 6LA, UK
                        </Text>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[11px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                        <Img
                          src="images/img_call.svg"
                          className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                          alt="call"
                        />
                        <a
                          href={"javascript:"}
                          className="font-bold sm:ml-[4px] md:ml-[5px] ml-[8px] text-[14px] text-bluegray_600 underline w-[auto]"
                          rel="noreferrer"
                        >
                          +44 13 5135 1051
                        </a>
                      </Row>
                    </Column>
                    <Column className="flex flex-col justify-start pb-[3px] sm:px-[0] w-[100%]">
                      <Text
                        className="font-bold text-gray_900 w-[auto]"
                        variant="body1"
                      >
                        France
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:mt-[10px] mt-[15px] sm:mt-[7px] w-[100%]">
                        <Img
                          src="images/img_location.svg"
                          className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:w-[10px] md:w-[13px] w-[20px]"
                          alt="location One"
                        />
                        <Text
                          className="flex-grow font-normal leading-[26.00px] md:leading-[normal] sm:leading-[normal] md:ml-[5px] ml-[8px] sm:mx-[0] not-italic text-bluegray_600"
                          variant="body2"
                        >
                          266 Place Ernest Granier
                          <br />
                          34000 Montpellier
                          <br />
                          France
                        </Text>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[11px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[59%]">
                        <Img
                          src="images/img_call.svg"
                          className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                          alt="call One"
                        />
                        <a
                          href={"javascript:"}
                          className="font-bold sm:ml-[4px] md:ml-[5px] ml-[8px] text-[14px] text-bluegray_600 underline w-[auto]"
                          rel="noreferrer"
                        >
                          +33 5 12 18 21 86
                        </a>
                      </Row>
                    </Column>
                  </List>
                </Column>
              </Column>
            </Column>
            <Column className="bg-white_A700 flex flex-col items-center md:ml-[27px] ml-[40px] sm:mx-[0] sm:p-[15px] md:p-[26px] p-[39px] rounded-radius6 shadow-bs1 sm:w-[100%] w-[49%]">
              <Column className="flex flex-col items-center justify-start my-[1px] pt-[4px] sm:px-[0] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                  <Column className="flex flex-col sm:mx-[0] sm:px-[0] rounded-radius6 sm:w-[100%] w-[47%]">
                    <Text
                      className="font-normal not-italic text-gray_900 w-[auto]"
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
                  <Column className="flex flex-col mt-[1px] sm:mx-[0] sm:px-[0] rounded-radius6 sm:w-[100%] w-[47%]">
                    <Text
                      className="font-normal ml-[4px] not-italic text-gray_900 w-[auto]"
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
                <Column className="flex flex-col justify-start sm:mt-[14px] md:mt-[19px] mt-[28px] sm:px-[0] rounded-radius6 w-[100%]">
                  <Text
                    className="font-normal not-italic text-gray_900 w-[auto]"
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
                <Column className="flex flex-col justify-start sm:mt-[15px] md:mt-[19px] mt-[29px] sm:px-[0] rounded-radius6 w-[100%]">
                  <Text
                    className="font-normal not-italic text-gray_900 w-[auto]"
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
                <Column className="flex flex-col justify-start sm:mt-[14px] md:mt-[19px] mt-[28px] sm:px-[0] w-[100%]">
                  <Text
                    className="font-normal not-italic text-gray_900 w-[auto]"
                    variant="body1"
                  >
                    Phone Number
                  </Text>
                  <Row className="bg-white_A700 border border-bluegray_200 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[17px] sm:mt-[9px] sm:p-[3px] md:p-[4px] p-[6px] rounded-radius6 w-[100%]">
                    <Column className="bg-white_A700 flex flex-col items-center ml-[10px] md:ml-[6px] sm:mx-[0] sm:my-[4px] md:my-[6px] my-[9px] pb-[10px] sm:pb-[5px] md:pb-[6px] sm:w-[100%] w-[6%]">
                      <div className="bg-red_800 h-[10px] sm:h-[6px] md:h-[7px] w-[100%]"></div>
                    </Column>
                    <Img
                      src="images/img_arrowdown.svg"
                      className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[4px] md:ml-[5px] ml-[8px] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="arrowdown"
                    />
                    <Line className="bg-gray_200 sm:h-[14px] md:h-[18px] h-[26px] sm:ml-[4px] md:ml-[5px] ml-[8px] sm:my-[3px] md:my-[4px] my-[6px] w-[1px]" />
                    <Input
                      className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_600 text-bluegray_600 w-[100%]"
                      wrapClassName="md:ml-[4px] ml-[7px] mt-[1px] sm:mx-[0] sm:w-[100%] w-[69%]"
                      type="number"
                      name="Frame179"
                      placeholder="Phone Number"
                      size="md"
                      variant="FillWhiteA700"
                    ></Input>
                  </Row>
                </Column>
                <Column className="flex flex-col justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] sm:px-[0] rounded-radius6 w-[100%]">
                  <Text
                    className="font-normal not-italic text-gray_900 w-[auto]"
                    variant="body1"
                  >
                    Message
                  </Text>
                  <TextArea
                    className="font-normal mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-[16px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                    name="FormInput Four"
                    placeholder="Message"
                  ></TextArea>
                </Column>
                <Button
                  className="cursor-pointer font-bold sm:mt-[21px] md:mt-[27px] mt-[40px] text-[16px] text-center text-white_A700 w-[100%]"
                  shape="RoundedBorder6"
                  size="sm"
                  variant="FillTeal400"
                >
                  Send Message
                </Button>
              </Column>
            </Column>
          </Row>
          <Row className="bg-teal_401 flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center max-w-[1112px] ml-[auto] mr-[auto] mt-[100px] sm:mt-[53px] md:mt-[68px] sm:mx-[0] sm:pb-[15px] md:pb-[26px] pb-[39px] sm:pl-[15px] md:pl-[26px] pl-[39px] sm:pr-[15px] rounded-radius6 w-[100%]">
            <Column className="flex flex-col justify-start md:ml-[17px] ml-[25px] sm:mt-[25px] md:mt-[33px] mt-[48px] sm:mx-[0] sm:px-[0] rounded-radius6 sm:w-[100%] w-[45%]">
              <Text className="text-white_A700 w-[auto]" as="h2" variant="h2">
                Ready to get started?
              </Text>
              <Text
                className="font-normal leading-[28.00px] md:leading-[normal] sm:leading-[normal] md:mt-[11px] mt-[16px] sm:mt-[8px] not-italic text-white_A700_99 w-[100%]"
                variant="body1"
              >
                The fastest and simple way to generate growing business
                solutions with our products
              </Text>
              <Column className="flex flex-col items-center justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] rounded-radius6 w-[100%]">
                <Row className="bg-white_A700 border border-bluegray_200 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end sm:p-[4px] md:p-[5px] p-[8px] rounded-radius6 w-[100%]">
                  <Input
                    className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                    wrapClassName="md:my-[4px] my-[6px] sm:mx-[0] sm:my-[3px] sm:w-[100%] w-[61%]"
                    type="email"
                    name="box"
                    placeholder="Your business email"
                    size="md"
                    variant="FillWhiteA700"
                  ></Input>
                  <Button
                    className="cursor-pointer font-bold min-w-[33%] sm:ml-[11px] md:ml-[14px] ml-[21px] text-[16px] text-center text-white_A700 w-[max-content]"
                    shape="RoundedBorder6"
                    size="sm"
                    variant="FillTeal400"
                  >
                    Get Started
                  </Button>
                </Row>
              </Column>
            </Column>
            <Img
              src="images/img_pattern_3.svg"
              className="max-w-[100%] sm:ml-[39px] md:ml-[51px] ml-[75px] sm:w-[100%] w-[46%]"
              alt="pattern"
            />
          </Row>
          <Footer className="bg-gray_900 mt-[120px] sm:mt-[63px] md:mt-[82px] w-[100%]" />
        </Column>
      </Column>
    </>
  );
};

export default ContactPage;
