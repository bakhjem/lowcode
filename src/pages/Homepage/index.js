import React from "react";

import { Column, Row, Img, Text, Button, Input, Grid, List } from "components";
import Header from "components/Header";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";

const HomepagePage = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/signup");
  }
  function handleNavigate1() {
    navigate("/");
  }
  function handleNavigate2() {
    navigate("/pricing");
  }
  function handleNavigate3() {
    navigate("/about");
  }
  function handleNavigate4() {
    navigate("/contact");
  }
  function handleNavigate5() {
    navigate("/resourcecenter");
  }
  function handleNavigate6() {
    navigate("/contact");
  }
  function handleNavigate7() {
    navigate("/about");
  }
  function handleNavigate8() {
    navigate("/resourcecenter");
  }
  function handleNavigate9() {
    navigate("/pricing");
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-chivo items-center justify-start mx-[auto] w-[100%]">
        <Header className="w-[100%]" />
        <Column className="flex flex-col items-center justify-start sm:mt-[37px] md:mt-[48px] mt-[70px] w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1112px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] rounded-radius6 sm:w-[100%] w-[49%]">
              <Column className="flex flex-col justify-start w-[100%]">
                <Text
                  className="leading-[58.00px] md:leading-[normal] sm:leading-[normal] text-gray_900 w-[100%]"
                  as="h1"
                  variant="h1"
                >
                  We help any business to get analytics and sales marketing
                </Text>
                <Text
                  className="font-normal leading-[28.00px] md:leading-[normal] sm:leading-[normal] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] not-italic text-bluegray_600 sm:w-[100%] w-[83%]"
                  variant="body1"
                >
                  The fastest and simple way to generate growing business
                  solutions with our products
                </Text>
              </Column>
              <Column className="flex flex-col justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] rounded-radius6 sm:w-[100%] w-[90%]">
                <Row className="bg-gray_50 border border-solid border-teal_400 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end sm:p-[3px] md:p-[4px] p-[6px] rounded-radius6 w-[100%]">
                  <Input
                    className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                    wrapClassName="md:my-[6px] my-[9px] sm:mx-[0] sm:my-[4px] sm:w-[100%] w-[60%]"
                    type="email"
                    name="box"
                    placeholder="Your business email"
                    size="sm"
                    variant="FillGray50"
                  ></Input>
                  <Button
                    className="cursor-pointer font-bold min-w-[33%] sm:ml-[11px] md:ml-[15px] ml-[22px] my-[2px] text-[16px] text-center text-white_A700 w-[max-content]"
                    shape="RoundedBorder6"
                    size="sm"
                    variant="FillTeal400"
                  >
                    Get Started
                  </Button>
                </Row>
                <Text
                  className="font-normal italic md:mt-[11px] mt-[17px] sm:mt-[9px] text-bluegray_600 w-[auto]"
                  variant="body2"
                >
                  *we will not disseminate your email and so you avoid spam
                </Text>
              </Column>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[25px] md:mt-[33px] mt-[48px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                  <Text className="text-gray_900 w-[auto]" as="h2" variant="h2">
                    350+
                  </Text>
                  <Text
                    className="font-normal leading-[28.00px] md:leading-[normal] sm:leading-[normal] md:mt-[10px] mt-[15px] sm:mt-[7px] not-italic text-bluegray_600 w-[100%]"
                    variant="body1"
                  >
                    Over 500 business powered with us
                  </Text>
                </Column>
                <Column className="flex flex-col md:ml-[41px] ml-[60px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                  <Text className="text-gray_900 w-[auto]" as="h2" variant="h2">
                    4.8
                  </Text>
                  <Text
                    className="font-normal leading-[28.00px] md:leading-[normal] sm:leading-[normal] md:mt-[10px] mt-[15px] sm:mt-[7px] not-italic text-bluegray_600 w-[100%]"
                    variant="body1"
                  >
                    Rating on google play and app store
                  </Text>
                </Column>
              </Row>
            </Column>
            <Img
              src="images/img_group450.png"
              className="max-w-[100%] sm:ml-[10px] md:ml-[13px] ml-[20px] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:w-[100%] w-[50%]"
              alt="group450"
            />
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1112px] ml-[auto] mr-[auto] sm:mt-[51px] md:mt-[66px] mt-[96px] sm:mx-[0] p-[2px] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Img
              src="images/img_microsoft1.svg"
              className="max-w-[100%] ml-[4px] w-[13%]"
              alt="MicrosoftOne"
            />
            <Img
              src="images/img_vector.svg"
              className="max-w-[100%] sm:ml-[34px] md:ml-[44px] ml-[65px] w-[11%]"
              alt="Vector"
            />
            <Img
              src="images/img_trash.svg"
              className="max-w-[100%] ml-[101px] sm:ml-[53px] md:ml-[69px] w-[7%]"
              alt="trash"
            />
            <Img
              src="images/img_shopify.svg"
              className="max-w-[100%] sm:ml-[51px] md:ml-[66px] ml-[96px] w-[12%]"
              alt="Shopify"
            />
            <Img
              src="images/img_group.svg"
              className="max-w-[100%] sm:ml-[33px] md:ml-[43px] ml-[63px] w-[13%]"
              alt="Group"
            />
            <Img
              src="images/img_intel.svg"
              className="max-w-[100%] sm:ml-[46px] md:ml-[60px] ml-[88px] w-[7%]"
              alt="Intel"
            />
          </Row>
          <Column className="flex flex-col items-center justify-start max-w-[1112px] ml-[auto] mr-[auto] mt-[100px] sm:mt-[53px] md:mt-[68px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Text
              className="leading-[54.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] text-center text-gray_900 sm:w-[100%] w-[49%]"
              as="h2"
              variant="h2"
            >
              How our platform process easy to use?
            </Text>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[25px] md:mt-[33px] mt-[48px] w-[100%]">
              <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%]">
                <Img
                  src="images/img_illustrationlo.svg"
                  className="max-w-[100%] w-[100%]"
                  alt="illustrationlo"
                />
                <Column className="flex flex-col items-center justify-start sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]">
                  <Text
                    className="font-bold leading-[32.00px] md:leading-[normal] sm:leading-[normal] text-center text-gray_900 w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    Login or sign up to be able use our platform
                  </Text>
                  <Text
                    className="font-normal leading-[28.00px] md:leading-[normal] sm:leading-[normal] md:mt-[11px] mt-[16px] sm:mt-[8px] not-italic text-bluegray_600 text-center w-[100%]"
                    variant="body1"
                  >
                    You must log in first to be able to use our platform to get
                    your product analytics
                  </Text>
                </Column>
              </Column>
              <Img
                src="images/img_directionline.svg"
                className="max-w-[100%] mt-[111px] sm:mt-[59px] md:mt-[76px] w-[14%]"
                alt="DirectionLine"
              />
              <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%]">
                <Img
                  src="images/img_illustrationco.png"
                  className="max-w-[100%] w-[100%]"
                  alt="illustrationco"
                />
                <Column className="flex flex-col items-center justify-start sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]">
                  <Text
                    className="font-bold leading-[32.00px] md:leading-[normal] sm:leading-[normal] text-center text-gray_900 w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    Connect your website with just a few click
                  </Text>
                  <Text
                    className="font-normal leading-[28.00px] md:leading-[normal] sm:leading-[normal] md:mt-[11px] mt-[16px] sm:mt-[8px] not-italic text-bluegray_600 text-center w-[100%]"
                    variant="body1"
                  >
                    Select the application you wanted to be able to connect with
                    just a few clicks
                  </Text>
                </Column>
              </Column>
              <Img
                src="images/img_directionline.svg"
                className="max-w-[100%] mt-[114px] sm:mt-[60px] md:mt-[78px] w-[14%]"
                alt="DirectionLine One"
              />
              <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%]">
                <Img
                  src="images/img_illustrationge.svg"
                  className="max-w-[100%] w-[100%]"
                  alt="illustrationge"
                />
                <Column className="flex flex-col items-center justify-start sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]">
                  <Text
                    className="font-bold leading-[32.00px] md:leading-[normal] sm:leading-[normal] text-center text-gray_900 w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    Take some sales data that you want
                  </Text>
                  <Text
                    className="font-normal leading-[28.00px] md:leading-[normal] sm:leading-[normal] md:mt-[11px] mt-[16px] sm:mt-[8px] not-italic text-bluegray_600 text-center w-[100%]"
                    variant="body1"
                  >
                    You already have sales data of your product with some
                    variants you want
                  </Text>
                </Column>
              </Column>
            </Row>
          </Column>
          <Row className="bg-teal_401 flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[100px] sm:mt-[53px] md:mt-[68px] sm:p-[15px] md:p-[27px] p-[40px] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1112px] md:ml-[85px] ml-[auto] mr-[auto] sm:mt-[13px] md:mt-[17px] mt-[25px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Img
                src="images/img_illustration_545X536.svg"
                className="max-w-[100%] sm:w-[100%] w-[49%]"
                alt="illustration"
              />
              <Column className="flex flex-col items-center md:ml-[66px] ml-[96px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
                <Column className="flex flex-col justify-start w-[100%]">
                  <Text
                    className="leading-[54.00px] md:leading-[normal] sm:leading-[normal] text-white_A700 w-[100%]"
                    as="h2"
                    variant="h2"
                  >
                    The reasons to prefer choosing our platform
                  </Text>
                  <Text
                    className="font-normal leading-[28.00px] md:leading-[normal] sm:leading-[normal] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] not-italic text-white_A700 sm:w-[100%] w-[83%]"
                    variant="body1"
                  >
                    Seamless integration of more than 20+ apps that can help
                    analytics your product
                  </Text>
                </Column>
                <Column className="flex flex-col items-center justify-start sm:mt-[25px] md:mt-[33px] mt-[48px] w-[100%]">
                  <Grid className="sm:gap-[21px] md:gap-[27px] gap-[40px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] w-[100%]">
                    <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_volume.svg"
                        className="sm:h-[22px] md:h-[28px] h-[40px] max-w-[100%] sm:w-[21px] md:w-[27px] w-[40px]"
                        alt="volume"
                      />
                      <Column className="flex flex-col justify-start sm:mt-[11px] md:mt-[14px] mt-[21px] w-[100%]">
                        <Text
                          className="font-bold text-white_A700 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Real time data
                        </Text>
                        <Text
                          className="font-normal leading-[26.00px] md:leading-[normal] sm:leading-[normal] mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-white_A700 w-[100%]"
                          variant="body2"
                        >
                          Get the data you need to make smarter decisions.
                        </Text>
                      </Column>
                    </Column>
                    <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_offer.svg"
                        className="sm:h-[22px] md:h-[28px] h-[40px] max-w-[100%] sm:w-[21px] md:w-[27px] w-[40px]"
                        alt="offer"
                      />
                      <Column className="flex flex-col items-center justify-start sm:mt-[12px] md:mt-[15px] mt-[23px] w-[100%]">
                        <Text
                          className="font-bold text-white_A700 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Fast and Easy to use
                        </Text>
                        <Text
                          className="font-normal leading-[26.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-white_A700 w-[100%]"
                          variant="body2"
                        >
                          Easily to convert API with just a few clicks
                        </Text>
                      </Column>
                    </Column>
                    <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_lock.svg"
                        className="sm:h-[22px] md:h-[28px] h-[40px] max-w-[100%] sm:w-[21px] md:w-[27px] w-[40px]"
                        alt="lock"
                      />
                      <Column className="flex flex-col justify-start sm:mt-[12px] md:mt-[15px] mt-[23px] w-[100%]">
                        <Text
                          className="font-bold text-white_A700 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Safely Security
                        </Text>
                        <Text
                          className="font-normal leading-[26.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-white_A700 w-[100%]"
                          variant="body2"
                        >
                          All customer data is encrypted
                        </Text>
                      </Column>
                    </Column>
                    <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_grid.svg"
                        className="sm:h-[22px] md:h-[28px] h-[40px] max-w-[100%] sm:w-[21px] md:w-[27px] w-[40px]"
                        alt="grid"
                      />
                      <Column className="flex flex-col justify-start sm:mt-[11px] md:mt-[15px] mt-[22px] w-[100%]">
                        <Text
                          className="font-bold text-white_A700 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Powerfull App
                        </Text>
                        <Text
                          className="font-normal leading-[26.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-white_A700 w-[100%]"
                          variant="body2"
                        >
                          Provide simple and minimalist dashboard
                        </Text>
                      </Column>
                    </Column>
                  </Grid>
                </Column>
              </Column>
            </Row>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1112px] ml-[auto] mr-[auto] mt-[100px] sm:mt-[53px] md:mt-[68px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
              <Text
                className="leading-[54.00px] md:leading-[normal] sm:leading-[normal] text-gray_900 w-[100%]"
                as="h2"
                variant="h2"
              >
                We provide features for your product
              </Text>
              <Column className="flex flex-col justify-start sm:mt-[25px] md:mt-[33px] mt-[48px] w-[100%]">
                <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[16px] p-[24px] rounded-radius12 shadow-bs1 w-[100%]">
                  <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mr-[35px] mr-[52px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                      <Img
                        src="images/img_map.svg"
                        className="flex-shrink-0 sm:h-[22px] md:h-[28px] h-[40px] max-w-[100%] sm:w-[21px] md:w-[27px] w-[40px]"
                        alt="map"
                      />
                      <Text
                        className="flex-grow font-bold md:ml-[11px] ml-[16px] sm:ml-[8px] text-gray_900"
                        as="h6"
                        variant="h6"
                      >
                        Integrated with Social Media
                      </Text>
                    </Row>
                    <Column className="flex flex-col justify-start md:ml-[38px] ml-[56px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[87%]">
                      <Text
                        className="font-normal leading-[26.00px] md:leading-[normal] sm:leading-[normal] not-italic text-bluegray_600 w-[100%]"
                        variant="body2"
                      >
                        Seamless integration of more than 20+ apps that can help
                        analytics
                      </Text>
                      <a
                        href={"javascript:"}
                        className="font-bold md:mt-[12px] mt-[18px] sm:mt-[9px] text-[16px] text-teal_400 underline w-[auto]"
                        rel="noreferrer"
                      >
                        Learn More
                      </a>
                    </Column>
                  </Column>
                </Column>
                <Column className="flex flex-col justify-start md:ml-[22px] ml-[32px] sm:mt-[21px] md:mt-[27px] mt-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end w-[100%]">
                    <Img
                      src="images/img_icon.svg"
                      className="flex-shrink-0 sm:h-[22px] md:h-[28px] h-[40px] max-w-[100%] sm:w-[21px] md:w-[27px] w-[40px]"
                      alt="Icon"
                    />
                    <Text
                      className="flex-grow font-bold mb-[1px] md:ml-[11px] ml-[16px] sm:ml-[8px] md:mt-[10px] mt-[15px] sm:mt-[7px] text-bluegray_200"
                      as="h6"
                      variant="h6"
                    >
                      Always in syncronized
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mt-[21px] md:mt-[27px] mt-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                    <Img
                      src="images/img_iconreport.svg"
                      className="flex-shrink-0 sm:h-[22px] md:h-[28px] h-[40px] max-w-[100%] sm:w-[21px] md:w-[27px] w-[40px]"
                      alt="IconReport"
                    />
                    <Text
                      className="flex-grow font-bold md:ml-[11px] ml-[16px] sm:ml-[8px] mt-[14px] sm:mt-[7px] md:mt-[9px] text-bluegray_200"
                      as="h6"
                      variant="h6"
                    >
                      Powerful report
                    </Text>
                  </Row>
                </Column>
              </Column>
            </Column>
            <Column
              className="bg-cover bg-no-repeat flex flex-col md:ml-[66px] ml-[96px] sm:mx-[0] md:pr-[147px] sm:pr-[15px] pr-[215px] md:py-[147px] sm:py-[15px] py-[215px] sm:w-[100%] w-[49%]"
              style={{ backgroundImage: "url('images/img_group686.png')" }}
            >
              <Button
                className="flex sm:h-[38px] md:h-[49px] h-[70px] items-center justify-center sm:mb-[25px] md:mb-[33px] mb-[48px] sm:w-[37px] md:w-[48px] w-[70px]"
                shape="icbRoundedBorder6"
                size="smIcn"
                variant="icbOutlineIndigo9000c"
              >
                <Img
                  src="images/img_linkedin.svg"
                  className="h-[26px] sm:h-[14px] md:h-[18px] flex items-center justify-center"
                  alt="linkedin"
                />
              </Button>
            </Column>
          </Row>
          <Column className="flex flex-col items-center justify-start max-w-[1112px] ml-[auto] mr-[auto] mt-[100px] sm:mt-[53px] md:mt-[68px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] pt-[4px] sm:px-[0] w-[100%]">
            <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
              <Text
                className="font-normal not-italic text-yellow_700 w-[auto]"
                variant="body1"
              >
                Global Scale
              </Text>
              <Text
                className="leading-[54.00px] md:leading-[normal] sm:leading-[normal] md:mt-[11px] mt-[16px] sm:mt-[8px] text-center text-gray_900 w-[100%]"
                as="h2"
                variant="h2"
              >
                Trusted by company around the world
              </Text>
            </Column>
            <Column className="flex flex-col items-center justify-start sm:mt-[25px] md:mt-[33px] mt-[48px] w-[100%]">
              <Img
                src="images/img_illustrationma.svg"
                className="max-w-[100%] w-[100%]"
                alt="IllustrationMa"
              />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[34px] md:mt-[44px] mt-[64px] w-[100%]">
                <List
                  className="sm:gap-[21px] md:gap-[27px] gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] sm:w-[100%] w-[75%]"
                  orientation="horizontal"
                >
                  <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                    <Text
                      className="text-gray_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      350+
                    </Text>
                    <Text
                      className="font-normal leading-[26.00px] md:leading-[normal] sm:leading-[normal] mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_600 w-[100%]"
                      variant="body2"
                    >
                      Over 500k business powered with us
                    </Text>
                  </Column>
                  <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                    <Text
                      className="text-gray_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      750k
                    </Text>
                    <Text
                      className="font-normal leading-[26.00px] md:leading-[normal] sm:leading-[normal] mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_600 w-[100%]"
                      variant="body2"
                    >
                      Users used our platform in around the world
                    </Text>
                  </Column>
                  <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                    <Text
                      className="text-gray_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      4.8{" "}
                    </Text>
                    <Text
                      className="font-normal leading-[26.00px] md:leading-[normal] sm:leading-[normal] mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_600 w-[100%]"
                      variant="body2"
                    >
                      Rating on google play and app store
                    </Text>
                  </Column>
                </List>
                <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%]">
                  <Text className="text-gray_900 w-[auto]" as="h3" variant="h3">
                    24+
                  </Text>
                  <Text
                    className="font-normal leading-[26.00px] md:leading-[normal] sm:leading-[normal] md:mt-[11px] mt-[17px] sm:mt-[9px] not-italic text-bluegray_600 w-[100%]"
                    variant="body2"
                  >
                    More than 30 countries trust our platform
                  </Text>
                </Column>
              </Row>
            </Column>
          </Column>
          <Column className="flex flex-col items-center justify-start max-w-[1112px] ml-[auto] mr-[auto] mt-[100px] sm:mt-[53px] md:mt-[68px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Text
              className="leading-[54.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] text-center text-gray_900 sm:w-[100%] w-[49%]"
              as="h2"
              variant="h2"
            >
              See what our customers have to say about us
            </Text>
            <List
              className="sm:gap-[21px] md:gap-[27px] gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] sm:mt-[25px] md:mt-[33px] mt-[48px] w-[100%]"
              orientation="horizontal"
            >
              <Column className="bg-gray_50 flex flex-col items-center justify-start sm:p-[15px] md:p-[22px] p-[32px] rounded-radius6 w-[100%]">
                <Column className="flex flex-col justify-start sm:my-[4px] md:my-[6px] my-[9px] sm:px-[0] w-[100%]">
                  <Img
                    src="images/img_vector_deep_orange_A400.svg"
                    className="max-w-[100%] w-[37%]"
                    alt="Vector One"
                  />
                  <Text
                    className="font-normal italic leading-[150.00%] sm:mt-[17px] md:mt-[22px] mt-[32px] text-bluegray_600 w-[100%]"
                    variant="body2"
                  >
                    “I’ve used Growit at many companies before—it’s the go-to
                    solution when you need user and product analytics.”
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[17px] md:mt-[22px] mt-[33px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                    <Img
                      src="images/img_ellipse1905.png"
                      className="sm:h-[27px] md:h-[35px] h-[50px] rounded-radius50 sm:w-[26px] md:w-[34px] w-[50px]"
                      alt="Ellipse1905"
                    />
                    <Column className="flex flex-col justify-start md:ml-[11px] ml-[16px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                      <Text
                        className="font-bold text-gray_900 w-[auto]"
                        variant="body1"
                      >
                        Try Washington
                      </Text>
                      <Text
                        className="font-normal sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-bluegray_701 w-[auto]"
                        variant="body2"
                      >
                        CEO of Netflix
                      </Text>
                    </Column>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-gray_50 flex flex-col items-center justify-start sm:p-[15px] md:p-[22px] p-[32px] rounded-radius6 w-[100%]">
                <Column className="flex flex-col justify-start sm:my-[4px] md:my-[5px] my-[8px] sm:px-[0] w-[100%]">
                  <Img
                    src="images/img_microsoft.svg"
                    className="max-w-[100%] sm:w-[100%] w-[45%]"
                    alt="Microsoft"
                  />
                  <Text
                    className="font-normal italic leading-[150.00%] sm:mt-[17px] md:mt-[22px] mt-[32px] text-bluegray_600 w-[100%]"
                    variant="body2"
                  >
                    “Uses Growit as the source of truth for all its product
                    data, and to determine where the team should focus its
                    time.”
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[17px] md:mt-[22px] mt-[33px] sm:mx-[0] pb-[3px] sm:px-[0] sm:w-[100%] w-[78%]">
                    <Img
                      src="images/img_ellipse1906.png"
                      className="sm:h-[27px] md:h-[35px] h-[50px] rounded-radius50 sm:w-[26px] md:w-[34px] w-[50px]"
                      alt="Ellipse1906"
                    />
                    <Column className="flex flex-col justify-start md:ml-[11px] ml-[16px] mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                      <Text
                        className="font-bold text-gray_900 w-[auto]"
                        variant="body1"
                      >
                        Cyhntya Rebecca
                      </Text>
                      <Text
                        className="font-normal mt-[4px] not-italic text-bluegray_701 w-[auto]"
                        variant="body2"
                      >
                        CEO of Microsoft
                      </Text>
                    </Column>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-gray_50 flex flex-col items-center justify-start sm:p-[15px] md:p-[22px] p-[32px] rounded-radius6 w-[100%]">
                <Column className="flex flex-col justify-start sm:my-[4px] md:my-[6px] my-[9px] sm:px-[0] w-[100%]">
                  <Img
                    src="images/img_shopify_30X106.svg"
                    className="max-w-[100%] w-[38%]"
                    alt="Shopify One"
                  />
                  <Text
                    className="font-normal italic leading-[150.00%] sm:mt-[16px] md:mt-[21px] mt-[31px] text-bluegray_600 w-[100%]"
                    variant="body2"
                  >
                    “Uses Growit to get deeper user insights that could be
                    easily shared among teams throughout the world, improving
                    the company investment.”{" "}
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[17px] md:mt-[22px] mt-[33px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                    <Img
                      src="images/img_ellipse1907.png"
                      className="sm:h-[27px] md:h-[35px] h-[50px] rounded-radius50 sm:w-[26px] md:w-[34px] w-[50px]"
                      alt="Ellipse1907"
                    />
                    <Column className="flex flex-col md:ml-[11px] ml-[16px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                      <Text
                        className="font-bold text-gray_900 w-[auto]"
                        variant="body1"
                      >
                        Derry Alasca
                      </Text>
                      <Text
                        className="font-normal sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-bluegray_701 w-[auto]"
                        variant="body2"
                      >
                        Manager of Shopify
                      </Text>
                    </Column>
                  </Row>
                </Column>
              </Column>
            </List>
          </Column>
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
                    name="box One"
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
              src="images/img_pattern.svg"
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

export default HomepagePage;
