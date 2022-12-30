import React from "react";

import { Column, Row, Img, Text, Button, Input, List } from "components";
import Header from "components/Header";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";

const ResourceCenterPage = () => {
  const navigate = useNavigate();

  function handleNavigate10() {
    navigate("/about");
  }
  function handleNavigate11() {
    navigate("/contact");
  }
  function handleNavigate12() {
    navigate("/contact");
  }
  function handleNavigate13() {
    navigate("/about");
  }
  function handleNavigate14() {
    navigate("/pricing");
  }
  function handleNavigate15() {
    navigate("/signup");
  }
  function handleNavigate16() {
    navigate("/");
  }
  function handleNavigate25() {
    navigate("/pricing");
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-chivo items-center justify-start mx-[auto] w-[100%]">
        <Header className="w-[100%]" />
        <Column className="flex flex-col items-center justify-start sm:mt-[37px] md:mt-[48px] mt-[70px] w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1082px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Column className="flex flex-col sm:mx-[0] sm:px-[0] rounded-radius6 sm:w-[100%] w-[50%]">
              <Column className="flex flex-col justify-start w-[100%]">
                <Text
                  className="leading-[58.00px] md:leading-[normal] sm:leading-[normal] text-gray_900 w-[100%]"
                  as="h1"
                  variant="h1"
                >
                  With our resources help your business grow rapidly
                </Text>
                <Text
                  className="font-normal leading-[28.00px] md:leading-[normal] sm:leading-[normal] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] not-italic text-bluegray_600 sm:w-[100%] w-[90%]"
                  variant="body1"
                >
                  Our books, guides, and others have helped thousands of your
                  peers get better at their business
                </Text>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] rounded-radius6 sm:w-[100%] w-[90%]">
                <Row className="bg-gray_50 border border-bluegray_200 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-end justify-end sm:p-[4px] md:p-[5px] p-[8px] rounded-radius6 w-[100%]">
                  <Input
                    className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                    wrapClassName="mb-[4px] md:mt-[4px] mt-[7px] sm:mt-[3px] sm:mx-[0] sm:w-[100%] w-[63%]"
                    name="Frame"
                    placeholder="Search resources"
                    size="md"
                    variant="FillGray50"
                  ></Input>
                  <Button
                    className="flex items-center justify-center md:ml-[7px] min-w-[33%] ml-[11px] sm:ml-[5px] text-center w-[max-content]"
                    leftIcon={
                      <Img
                        src="images/img_search.svg"
                        className="mr-[10px] sm:mr-[5px] md:mr-[6px] text-center"
                        alt="search"
                      />
                    }
                    shape="RoundedBorder6"
                    size="sm"
                    variant="FillTeal400"
                  >
                    <div className="bg-transparent cursor-pointer font-bold text-[16px] text-white_A700">
                      Search
                    </div>
                  </Button>
                </Row>
              </Column>
            </Column>
            <Img
              src="images/img_illustration_355X450.svg"
              className="max-w-[100%] sm:ml-[51px] md:ml-[66px] ml-[96px] sm:w-[100%] w-[42%]"
              alt="illustration"
            />
          </Row>
          <List
            className="sm:gap-[21px] md:gap-[27px] gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 max-w-[1112px] min-h-[auto] ml-[auto] mr-[auto] mt-[100px] sm:mt-[53px] md:mt-[68px] sm:pl-[15px] sm:pr-[15px] rounded-radius6 w-[100%]"
            orientation="horizontal"
          >
            <Column className="bg-deep_purple_300 flex flex-col items-center justify-start sm:p-[15px] md:p-[16px] p-[24px] rounded-radius6 w-[100%]">
              <Column className="flex flex-col justify-start mb-[3px] sm:pt-[2px] md:pt-[3px] pt-[5px] sm:px-[0] w-[100%]">
                <Column className="flex flex-col justify-start w-[100%]">
                  <Text
                    className="font-bold text-white_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Guides{" "}
                  </Text>
                  <Text
                    className="font-normal leading-[26.00px] md:leading-[normal] sm:leading-[normal] md:mt-[11px] mt-[16px] sm:mt-[8px] not-italic text-white_A700_a2 w-[100%]"
                    variant="body2"
                  >
                    Evertything you need to know our platform
                  </Text>
                </Column>
                <a
                  href={"javascript:"}
                  className="font-bold sm:mt-[38px] md:mt-[49px] mt-[72px] text-[18px] text-white_A700 underline w-[auto]"
                  rel="noreferrer"
                >
                  View All
                </a>
              </Column>
            </Column>
            <Column className="bg-green_400 flex flex-col items-center justify-start sm:p-[15px] md:p-[16px] p-[24px] rounded-radius6 w-[100%]">
              <Column className="flex flex-col justify-start mb-[3px] sm:pt-[3px] md:pt-[4px] pt-[7px] sm:px-[0] w-[100%]">
                <Column className="flex flex-col justify-start w-[100%]">
                  <Text
                    className="font-bold text-white_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Blog
                  </Text>
                  <Text
                    className="font-normal leading-[26.00px] md:leading-[normal] sm:leading-[normal] mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-white_A700_a2 w-[100%]"
                    variant="body2"
                  >
                    Our best tips for growing your business
                  </Text>
                </Column>
                <a
                  href={"javascript:"}
                  className="font-bold sm:mt-[38px] md:mt-[49px] mt-[72px] text-[18px] text-white_A700 underline w-[auto]"
                  rel="noreferrer"
                >
                  View All
                </a>
              </Column>
            </Column>
            <Column className="bg-lime_700 flex flex-col items-center justify-start sm:p-[15px] md:p-[16px] p-[24px] rounded-radius6 w-[100%]">
              <Column className="flex flex-col justify-start mb-[3px] sm:pt-[2px] md:pt-[3px] pt-[5px] sm:px-[0] w-[100%]">
                <Column className="flex flex-col justify-start w-[100%]">
                  <Text
                    className="font-bold text-white_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Webinars
                  </Text>
                  <Text
                    className="font-normal leading-[26.00px] md:leading-[normal] sm:leading-[normal] md:mt-[11px] mt-[16px] sm:mt-[8px] not-italic text-white_A700_a2 w-[100%]"
                    variant="body2"
                  >
                    Your all-access pass to exclusive content
                  </Text>
                </Column>
                <a
                  href={"javascript:"}
                  className="font-bold sm:mt-[38px] md:mt-[49px] mt-[72px] text-[18px] text-white_A700 underline w-[auto]"
                  rel="noreferrer"
                >
                  View All
                </a>
              </Column>
            </Column>
            <Column className="bg-red_300 flex flex-col items-center justify-start sm:p-[15px] md:p-[16px] p-[24px] rounded-radius6 w-[100%]">
              <Column className="flex flex-col justify-start mb-[3px] sm:pt-[2px] md:pt-[3px] pt-[5px] sm:px-[0] w-[100%]">
                <Column className="flex flex-col justify-start w-[100%]">
                  <Text
                    className="font-bold text-white_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Customer Stories
                  </Text>
                  <Text
                    className="font-normal leading-[26.00px] md:leading-[normal] sm:leading-[normal] md:mt-[11px] mt-[16px] sm:mt-[8px] not-italic text-white_A700_a2 w-[100%]"
                    variant="body2"
                  >
                    See what Growly success looks like
                  </Text>
                </Column>
                <a
                  href={"javascript:"}
                  className="font-bold sm:mt-[38px] md:mt-[49px] mt-[72px] text-[18px] text-white_A700 underline w-[auto]"
                  rel="noreferrer"
                >
                  View All
                </a>
              </Column>
            </Column>
          </List>
          <Column className="flex flex-col items-center justify-start max-w-[1112px] ml-[auto] mr-[auto] mt-[100px] sm:mt-[53px] md:mt-[68px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
              <Text className="text-gray_900 w-[auto]" as="h2" variant="h2">
                Guides and Resources
              </Text>
              <a
                href={"javascript:"}
                className="font-bold text-[18px] text-gray_900 underline w-[auto]"
                rel="noreferrer"
              >
                View All
              </a>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[25px] md:mt-[33px] mt-[48px] w-[100%]">
              <Column className="flex flex-col items-center sm:mx-[0] pb-[3px] sm:px-[0] rounded-radius6 sm:w-[100%] w-[49%]">
                <Img
                  src="images/img_rectangle217.png"
                  className="max-w-[100%] rounded-radius6 w-[100%]"
                  alt="Rectangle217"
                />
                <Column className="flex flex-col justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] pt-[4px] w-[100%]">
                  <Column className="flex flex-col justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-teal_400 w-[auto]"
                      variant="body1"
                    >
                      Guides
                    </Text>
                    <Text
                      className="leading-[40.00px] md:leading-[normal] sm:leading-[normal] md:mt-[11px] mt-[17px] sm:mt-[9px] text-gray_900 w-[100%]"
                      as="h4"
                      variant="h4"
                    >
                      Getting started with Guide for your help center: Setting
                      up
                    </Text>
                    <Text
                      className="font-normal leading-[28.00px] md:leading-[normal] sm:leading-[normal] md:mt-[11px] mt-[16px] sm:mt-[8px] not-italic text-bluegray_600 w-[100%]"
                      variant="body1"
                    >
                      Guide enables you to provide end users with a complete
                      self-service support option and empowers agents to better
                      help customer
                    </Text>
                  </Column>
                  <a
                    href={"javascript:"}
                    className="font-bold sm:mt-[12px] md:mt-[16px] mt-[24px] text-[18px] text-gray_900 underline w-[auto]"
                    rel="noreferrer"
                  >
                    Read Now
                  </a>
                </Column>
              </Column>
              <List
                className="sm:gap-[21px] md:gap-[27px] gap-[40px] grid min-h-[auto] sm:w-[100%] w-[49%]"
                orientation="vertical"
              >
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between my-[0] w-[100%]">
                  <Img
                    src="images/img_rectangle218.png"
                    className="max-w-[100%] sm:w-[100%] w-[47%]"
                    alt="Rectangle218"
                  />
                  <Column className="flex flex-col justify-start sm:mx-[0] pt-[4px] sm:px-[0] sm:w-[100%] w-[48%]">
                    <Column className="flex flex-col justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-teal_400 w-[auto]"
                        variant="body1"
                      >
                        Guides
                      </Text>
                      <Text
                        className="font-bold leading-[32.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[6px] mt-[9px] text-gray_900 w-[100%]"
                        as="h6"
                        variant="h6"
                      >
                        Advance your product analytics strategy
                      </Text>
                    </Column>
                    <a
                      href={"javascript:"}
                      className="font-bold sm:mt-[12px] md:mt-[16px] mt-[24px] text-[18px] text-gray_900 underline w-[auto]"
                      rel="noreferrer"
                    >
                      Read Now
                    </a>
                  </Column>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between my-[0] w-[100%]">
                  <Img
                    src="images/img_rectangle219.png"
                    className="max-w-[100%] sm:w-[100%] w-[47%]"
                    alt="Rectangle219"
                  />
                  <Column className="flex flex-col justify-start sm:mx-[0] pt-[4px] sm:px-[0] sm:w-[100%] w-[48%]">
                    <Column className="flex flex-col justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-teal_400 w-[auto]"
                        variant="body1"
                      >
                        Guides
                      </Text>
                      <Text
                        className="font-bold leading-[32.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[6px] mt-[9px] text-gray_900 w-[100%]"
                        as="h6"
                        variant="h6"
                      >
                        A tour of Growit automations
                      </Text>
                    </Column>
                    <a
                      href={"javascript:"}
                      className="font-bold sm:mt-[12px] md:mt-[16px] mt-[24px] text-[18px] text-gray_900 underline w-[auto]"
                      rel="noreferrer"
                    >
                      Read Now
                    </a>
                  </Column>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between my-[0] w-[100%]">
                  <Img
                    src="images/img_rectangle220.png"
                    className="max-w-[100%] sm:w-[100%] w-[47%]"
                    alt="Rectangle220"
                  />
                  <Column className="flex flex-col justify-start sm:mx-[0] pt-[4px] sm:px-[0] sm:w-[100%] w-[48%]">
                    <Column className="flex flex-col justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-teal_400 w-[auto]"
                        variant="body1"
                      >
                        Guides
                      </Text>
                      <Text
                        className="font-bold leading-[32.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[6px] mt-[9px] text-gray_900 w-[100%]"
                        as="h6"
                        variant="h6"
                      >
                        How to get support about Growly with us
                      </Text>
                    </Column>
                    <a
                      href={"javascript:"}
                      className="font-bold sm:mt-[12px] md:mt-[16px] mt-[24px] text-[18px] text-gray_900 underline w-[auto]"
                      rel="noreferrer"
                    >
                      Read Now
                    </a>
                  </Column>
                </Row>
              </List>
            </Row>
          </Column>
          <List
            className="gap-[100px] sm:gap-[53px] md:gap-[68px] grid max-w-[1112px] min-h-[auto] ml-[auto] mr-[auto] mt-[100px] sm:mt-[53px] md:mt-[68px] sm:pl-[15px] sm:pr-[15px] w-[100%]"
            orientation="vertical"
          >
            <Column className="flex flex-col items-center justify-start rounded-radius6 w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                <Text className="text-gray_900 w-[auto]" as="h2" variant="h2">
                  Latest Blog
                </Text>
                <a
                  href={"javascript:"}
                  className="font-bold text-[18px] text-gray_900 underline w-[auto]"
                  rel="noreferrer"
                >
                  View All
                </a>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[25px] md:mt-[33px] mt-[48px] rounded-radius6 w-[100%]">
                <Column className="flex flex-col items-center sm:mx-[0] pb-[3px] sm:px-[0] rounded-radius6 sm:w-[100%] w-[31%]">
                  <Img
                    src="images/img_rectangle221.png"
                    className="max-w-[100%] rounded-radius6 w-[100%]"
                    alt="Rectangle221"
                  />
                  <Column className="flex flex-col justify-start sm:mt-[20px] md:mt-[26px] mt-[38px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-teal_400 w-[auto]"
                      variant="body1"
                    >
                      Blog
                    </Text>
                    <Text
                      className="font-bold leading-[32.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900 w-[100%]"
                      as="h6"
                      variant="h6"
                    >
                      The Ultimate Guide To Customer Journey Analytics
                    </Text>
                    <a
                      href={"javascript:"}
                      className="font-bold sm:mt-[12px] md:mt-[16px] mt-[24px] text-[18px] text-gray_900 underline w-[auto]"
                      rel="noreferrer"
                    >
                      Read Now
                    </a>
                  </Column>
                </Column>
                <Column className="flex flex-col items-center sm:mx-[0] pb-[3px] sm:px-[0] rounded-radius6 sm:w-[100%] w-[31%]">
                  <Img
                    src="images/img_rectangle222.png"
                    className="max-w-[100%] rounded-radius6 w-[100%]"
                    alt="Rectangle222"
                  />
                  <Column className="flex flex-col justify-start sm:mt-[20px] md:mt-[26px] mt-[38px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-teal_400 w-[auto]"
                      variant="body1"
                    >
                      Blog
                    </Text>
                    <Text
                      className="font-bold leading-[32.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900 w-[100%]"
                      as="h6"
                      variant="h6"
                    >
                      6 Customer Metrics That Will Help You Grow Your Business
                    </Text>
                    <a
                      href={"javascript:"}
                      className="font-bold sm:mt-[12px] md:mt-[16px] mt-[24px] text-[18px] text-gray_900 underline w-[auto]"
                      rel="noreferrer"
                    >
                      Read Now
                    </a>
                  </Column>
                </Column>
                <Column className="flex flex-col items-center sm:mx-[0] pb-[3px] sm:px-[0] rounded-radius6 sm:w-[100%] w-[31%]">
                  <Img
                    src="images/img_rectangle223.png"
                    className="max-w-[100%] rounded-radius6 w-[100%]"
                    alt="Rectangle223"
                  />
                  <Column className="flex flex-col justify-start sm:mt-[20px] md:mt-[26px] mt-[38px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-teal_400 w-[auto]"
                      variant="body1"
                    >
                      Blog
                    </Text>
                    <Text
                      className="font-bold leading-[32.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900 w-[100%]"
                      as="h6"
                      variant="h6"
                    >
                      The difference between product analytics and marketing
                    </Text>
                    <a
                      href={"javascript:"}
                      className="font-bold sm:mt-[12px] md:mt-[16px] mt-[24px] text-[18px] text-gray_900 underline w-[auto]"
                      rel="noreferrer"
                    >
                      Read Now
                    </a>
                  </Column>
                </Column>
              </Row>
            </Column>
            <Column className="flex flex-col items-center justify-start rounded-radius6 w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                <Text className="text-gray_900 w-[auto]" as="h2" variant="h2">
                  Customer Story
                </Text>
                <a
                  href={"javascript:"}
                  className="font-bold text-[18px] text-gray_900 underline w-[auto]"
                  rel="noreferrer"
                >
                  View All
                </a>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[25px] md:mt-[33px] mt-[48px] rounded-radius6 w-[100%]">
                <Column className="flex flex-col items-center sm:mx-[0] pb-[3px] sm:px-[0] rounded-radius6 sm:w-[100%] w-[31%]">
                  <Img
                    src="images/img_rectangle221_220X344.png"
                    className="max-w-[100%] rounded-radius6 w-[100%]"
                    alt="Rectangle221 One"
                  />
                  <Column className="flex flex-col justify-start sm:mt-[20px] md:mt-[26px] mt-[38px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-teal_400 w-[auto]"
                      variant="body1"
                    >
                      Customer Story
                    </Text>
                    <Text
                      className="font-bold leading-[32.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900 w-[100%]"
                      as="h6"
                      variant="h6"
                    >
                      Watching movies provides the best user experience
                    </Text>
                    <a
                      href={"javascript:"}
                      className="font-bold sm:mt-[12px] md:mt-[16px] mt-[24px] text-[18px] text-gray_900 underline w-[auto]"
                      rel="noreferrer"
                    >
                      Read Now
                    </a>
                  </Column>
                </Column>
                <Column className="flex flex-col items-center sm:mx-[0] pb-[3px] sm:px-[0] rounded-radius6 sm:w-[100%] w-[31%]">
                  <Img
                    src="images/img_rectangle222_220X344.png"
                    className="max-w-[100%] rounded-radius6 w-[100%]"
                    alt="Rectangle222 One"
                  />
                  <Column className="flex flex-col justify-start sm:mt-[20px] md:mt-[26px] mt-[38px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-teal_400 w-[auto]"
                      variant="body1"
                    >
                      Customer Story
                    </Text>
                    <Text
                      className="font-bold leading-[32.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900 w-[100%]"
                      as="h6"
                      variant="h6"
                    >
                      Providing reliable applications for productivity
                    </Text>
                    <a
                      href={"javascript:"}
                      className="font-bold sm:mt-[12px] md:mt-[16px] mt-[24px] text-[18px] text-gray_900 underline w-[auto]"
                      rel="noreferrer"
                    >
                      Read Now
                    </a>
                  </Column>
                </Column>
                <Column className="flex flex-col items-center sm:mx-[0] pb-[3px] sm:px-[0] rounded-radius6 sm:w-[100%] w-[31%]">
                  <Img
                    src="images/img_rectangle223_220X344.png"
                    className="max-w-[100%] rounded-radius6 w-[100%]"
                    alt="Rectangle223 One"
                  />
                  <Column className="flex flex-col justify-start sm:mt-[20px] md:mt-[26px] mt-[38px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-teal_400 w-[auto]"
                      variant="body1"
                    >
                      Customer Story
                    </Text>
                    <Text
                      className="font-bold leading-[32.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900 w-[100%]"
                      as="h6"
                      variant="h6"
                    >
                      Build an online business—no matter what business you're in
                    </Text>
                    <a
                      href={"javascript:"}
                      className="font-bold sm:mt-[12px] md:mt-[16px] mt-[24px] text-[18px] text-gray_900 underline w-[auto]"
                      rel="noreferrer"
                    >
                      Read Now
                    </a>
                  </Column>
                </Column>
              </Row>
            </Column>
          </List>
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
              src="images/img_pattern_2.svg"
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

export default ResourceCenterPage;
