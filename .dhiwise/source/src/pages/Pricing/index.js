import React from "react";

import {
  Column,
  Stack,
  Row,
  Img,
  Text,
  Button,
  List,
  Line,
  Grid,
  Input,
} from "components";
import Header from "components/Header";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";

const PricingPage = () => {
  const navigate = useNavigate();

  function handleNavigate26() {
    navigate("/resourcecenter");
  }
  function handleNavigate27() {
    navigate("/contact");
  }
  function handleNavigate28() {
    navigate("/about");
  }
  function handleNavigate29() {
    navigate("/resourcecenter");
  }
  function handleNavigate30() {
    navigate("/signup");
  }
  function handleNavigate31() {
    navigate("/login");
  }
  function handleNavigate35() {
    navigate("/contact");
  }
  function handleNavigate36() {
    navigate("/about");
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-chivo items-center justify-start mx-[auto] w-[100%]">
        <Stack className="h-[1056px] relative w-[100%]">
          <Column
            className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start sm:pb-[15px] md:pb-[445px] pb-[647px] top-[0] w-[100%]"
            style={{ backgroundImage: "url('images/img_group690.png')" }}
          >
            <Header className="flex flex-col items-center justify-start w-[100%]" />
          </Column>
          <Column className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start sm:mx-[0] mx-[auto] sm:px-[0] sm:w-[100%] w-[78%]">
            <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
              <Text
                className="leading-[58.00px] md:leading-[normal] sm:leading-[normal] text-center text-gray_900 w-[100%]"
                as="h1"
                variant="h1"
              >
                Pricing plan for every product of all sizes.
              </Text>
              <Text
                className="font-normal leading-[28.00px] md:leading-[normal] sm:leading-[normal] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] not-italic text-bluegray_600 text-center sm:w-[100%] w-[74%]"
                variant="body1"
              >
                Start connecting with all your team and plan payment for every
                product as you want
              </Text>
            </Column>
            <List
              className="sm:gap-[21px] md:gap-[27px] gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] sm:mt-[34px] md:mt-[44px] mt-[64px] w-[100%]"
              orientation="horizontal"
            >
              <Stack className="h-[654px] relative w-[100%]">
                <Column className="absolute bg-white_A700 bottom-[0] flex flex-col items-center justify-center sm:p-[15px] md:p-[26px] p-[39px] rounded-radius6 shadow-bs1 w-[100%]">
                  <Column className="flex flex-col items-center justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] sm:px-[0] w-[100%]">
                    <Text
                      className="font-bold text-gray_900 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Free
                    </Text>
                    <Text
                      className="md:mt-[11px] mt-[16px] sm:mt-[8px] text-gray_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      <span className="text-gray_900 text-[36px] font-chivo font-bold sm:text-[32px] md:text-[34px]">
                        $0
                      </span>
                      <span className="text-gray_900 text-[18px] font-chivo font-normal not-italic">
                        /month
                      </span>
                    </Text>
                    <Text
                      className="font-normal leading-[26.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-bluegray_600 text-center w-[100%]"
                      variant="body2"
                    >
                      All the basics for businesses that are just getting
                      started
                    </Text>
                  </Column>
                  <Button
                    className="cursor-pointer font-bold min-w-[58%] sm:mt-[12px] md:mt-[16px] mt-[24px] text-[16px] text-center text-white_A700 w-[max-content]"
                    shape="RoundedBorder6"
                    size="sm"
                    variant="FillTeal401"
                  >
                    Get Started
                  </Button>
                  <Line className="bg-gray_200 h-[1px] sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]" />
                  <Column className="flex flex-col justify-start mb-[1px] sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] pt-[2px] sm:px-[0] sm:w-[100%] w-[99%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[67%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="checkmark"
                      />
                      <Text
                        className="flex-grow font-normal ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[4px] not-italic text-gray_900_99"
                        variant="body2"
                      >
                        Single Project Use
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[20px] w-[100%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="checkmark One"
                      />
                      <Text
                        className="flex-grow font-normal ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[3px] not-italic text-gray_900_99"
                        variant="body2"
                      >
                        Unlimited User Authentication
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[20px] w-[100%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="checkmark Two"
                      />
                      <Text
                        className="flex-grow font-normal ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[4px] not-italic text-gray_900_99"
                        variant="body2"
                      >
                        Unlimited data history & seats
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="checkmark Three"
                      />
                      <Text
                        className="flex-grow font-normal ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[4px] not-italic text-gray_900_99"
                        variant="body2"
                      >
                        Monitoring & alerts
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="checkmark Four"
                      />
                      <Text
                        className="flex-grow font-normal ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[3px] not-italic text-gray_900_99"
                        variant="body2"
                      >
                        Basic Roles and Permissions
                      </Text>
                    </Row>
                  </Column>
                </Column>
                <Stack className="absolute bg-white_A700 h-[100px] inset-x-[0] mx-[auto] sm:p-[15px] md:p-[17px] p-[25px] rounded-radius6 shadow-bs top-[0] w-[100px] sm:w-[53px] md:w-[68px]">
                  <Img
                    src="images/img_thumbsup.svg"
                    className="absolute h-[50px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[26px] md:w-[34px] w-[50px]"
                    alt="thumbsup"
                  />
                </Stack>
              </Stack>
              <Stack className="h-[654px] relative w-[100%]">
                <Column className="absolute bg-white_A700 bottom-[0] flex flex-col items-center justify-center sm:p-[15px] md:p-[26px] p-[39px] rounded-radius6 shadow-bs1 w-[100%]">
                  <Column className="flex flex-col items-center justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] sm:px-[0] w-[100%]">
                    <Text
                      className="font-bold text-gray_900 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Growth
                    </Text>
                    <Text
                      className="md:mt-[11px] mt-[16px] sm:mt-[8px] text-gray_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      <span className="text-gray_900 text-[36px] font-chivo font-bold sm:text-[32px] md:text-[34px]">
                        $99
                      </span>
                      <span className="text-gray_900 text-[18px] font-chivo font-normal not-italic">
                        /month
                      </span>
                    </Text>
                    <Text
                      className="font-normal leading-[26.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-bluegray_600 text-center w-[100%]"
                      variant="body2"
                    >
                      Suitable for growth-stage startups
                      <br />
                      with advanced requirements.
                    </Text>
                  </Column>
                  <Button
                    className="cursor-pointer font-bold min-w-[58%] sm:mt-[12px] md:mt-[16px] mt-[24px] text-[16px] text-center text-white_A700 w-[max-content]"
                    shape="RoundedBorder6"
                    size="sm"
                    variant="FillTeal401"
                  >
                    Try for free
                  </Button>
                  <Line className="bg-gray_200 h-[1px] sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]" />
                  <Column className="flex flex-col justify-start mb-[1px] sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] pt-[2px] sm:px-[0] sm:w-[100%] w-[96%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="checkmark One"
                      />
                      <Text
                        className="flex-grow font-normal ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[3px] not-italic text-gray_900"
                        variant="body2"
                      >
                        <span className="text-gray_900 text-[16px] font-chivo">
                          All features{" "}
                        </span>
                        <span className="text-gray_900 text-[16px] font-chivo font-bold">
                          Free
                        </span>
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[78%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="checkmark One One"
                      />
                      <Text
                        className="flex-grow font-normal ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[3px] not-italic text-gray_900"
                        variant="body2"
                      >
                        Advanced Dashboard
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[20px] w-[100%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="checkmark Two One"
                      />
                      <Text
                        className="flex-grow font-normal ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[3px] not-italic text-gray_900"
                        variant="body2"
                      >
                        Unlimited Roles & Permission
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="checkmark Three One"
                      />
                      <Text
                        className="flex-grow font-normal ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[4px] not-italic text-gray_900"
                        variant="body2"
                      >
                        1 Enterprise integration
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[91%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="checkmark Four One"
                      />
                      <Text
                        className="flex-grow font-normal ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[4px] not-italic text-gray_900"
                        variant="body2"
                      >
                        External API management
                      </Text>
                    </Row>
                  </Column>
                </Column>
                <Stack className="absolute bg-white_A700 h-[100px] inset-x-[0] mx-[auto] sm:p-[15px] md:p-[17px] p-[25px] rounded-radius6 shadow-bs top-[0] w-[100px] sm:w-[53px] md:w-[68px]">
                  <Img
                    src="images/img_checkmark_50X50.svg"
                    className="absolute h-[50px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[26px] md:w-[34px] w-[50px]"
                    alt="checkmark Five"
                  />
                </Stack>
              </Stack>
              <Stack className="h-[654px] relative w-[100%]">
                <Column className="absolute bg-white_A700 bottom-[0] flex flex-col items-center justify-center sm:p-[15px] md:p-[26px] p-[39px] rounded-radius6 shadow-bs1 w-[100%]">
                  <Column className="flex flex-col items-center justify-start sm:mt-[22px] md:mt-[28px] mt-[42px] sm:px-[0] w-[100%]">
                    <Text
                      className="font-bold text-gray_900 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Enterprise
                    </Text>
                    <Text
                      className="mt-[12px] sm:mt-[6px] md:mt-[8px] text-gray_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      <span className="text-gray_900 text-[36px] font-chivo font-bold sm:text-[32px] md:text-[34px]">
                        $120
                      </span>
                      <span className="text-gray_900 text-[18px] font-chivo font-normal not-italic">
                        /month
                      </span>
                    </Text>
                    <Text
                      className="font-normal leading-[26.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-bluegray_600 text-center w-[100%]"
                      variant="body2"
                    >
                      Suitable for Hyper-growth or Enterprise companies
                    </Text>
                  </Column>
                  <Button
                    className="cursor-pointer font-bold min-w-[58%] sm:mt-[12px] md:mt-[16px] mt-[24px] text-[16px] text-center text-white_A700 w-[max-content]"
                    shape="RoundedBorder6"
                    size="sm"
                    variant="FillTeal401"
                  >
                    Contact Sales
                  </Button>
                  <Line className="bg-gray_200 h-[1px] sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]" />
                  <Column className="flex flex-col justify-start mb-[1px] sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] pt-[2px] sm:px-[0] sm:w-[100%] w-[96%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[80%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="checkmark Two"
                      />
                      <Text
                        className="flex-grow font-normal ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[4px] not-italic text-gray_900"
                        variant="body2"
                      >
                        <span className="text-gray_900 text-[16px] font-chivo">
                          Every Thing in{" "}
                        </span>
                        <span className="text-gray_900 text-[16px] font-chivo font-bold">
                          Growth
                        </span>
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="checkmark One Two"
                      />
                      <Text
                        className="flex-grow font-normal ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[3px] not-italic text-gray_900"
                        variant="body2"
                      >
                        Advanced access controls
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="checkmark Two Two"
                      />
                      <Text
                        className="flex-grow font-normal ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[3px] not-italic text-gray_900"
                        variant="body2"
                      >
                        Dedicated SaaS solutions
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[56%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="checkmark Three Two"
                      />
                      <Text
                        className="flex-grow font-normal ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[4px] not-italic text-gray_900"
                        variant="body2"
                      >
                        24/7 Support{" "}
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[20px] w-[100%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="checkmark Four Two"
                      />
                      <Text
                        className="flex-grow font-normal ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[3px] not-italic text-gray_900"
                        variant="body2"
                      >
                        Dedicated customer success
                      </Text>
                    </Row>
                  </Column>
                </Column>
                <Stack className="absolute bg-white_A700 h-[100px] inset-x-[0] mx-[auto] sm:p-[15px] md:p-[17px] p-[25px] rounded-radius6 shadow-bs top-[0] w-[100px] sm:w-[53px] md:w-[68px]">
                  <Img
                    src="images/img_plus.svg"
                    className="absolute h-[50px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[26px] md:w-[34px] w-[50px]"
                    alt="plus"
                  />
                </Stack>
              </Stack>
            </List>
          </Column>
        </Stack>
        <Column className="flex flex-col items-center justify-start max-w-[1112px] ml-[auto] mr-[auto] mt-[100px] sm:mt-[53px] md:mt-[68px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[62%]">
            <Text className="text-gray_900 w-[auto]" as="h2" variant="h2">
              Learn what you get in every plan
            </Text>
            <Text
              className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] not-italic text-bluegray_600 text-center sm:w-[100%] w-[79%]"
              as="h6"
              variant="h6"
            >
              <span className="text-bluegray_600 text-[22px] font-chivo sm:text-[18px] md:text-[20px]">
                Get{" "}
              </span>
              <span className="text-teal_401 text-[22px] font-chivo font-bold sm:text-[18px] md:text-[20px]">
                100+{" "}
              </span>
              <span className="text-bluegray_600 text-[22px] font-chivo sm:text-[18px] md:text-[20px]">
                features out of the box with Growit integrated per-transaction
                pricing
              </span>
            </Text>
          </Column>
          <Column className="flex flex-col items-center justify-start sm:mt-[26px] md:mt-[34px] mt-[50px] w-[100%]">
            <Grid className="gap-[124px] sm:gap-[66px] md:gap-[85px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] w-[100%]">
              <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                <Img
                  src="images/img_google.svg"
                  className="sm:h-[27px] md:h-[35px] h-[50px] max-w-[100%] sm:w-[26px] md:w-[34px] w-[50px]"
                  alt="google"
                />
                <Column className="flex flex-col justify-start sm:mt-[12px] md:mt-[16px] mt-[24px] pb-[2px] w-[100%]">
                  <Text
                    className="font-bold leading-[32.00px] md:leading-[normal] sm:leading-[normal] text-gray_900 w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    Monitoring analytics data and alert
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[12px] mt-[18px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[40%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="checkmark Three"
                    />
                    <Text
                      className="flex-grow font-normal ml-[12px] sm:ml-[6px] md:ml-[8px] not-italic text-bluegray_600"
                      variant="body1"
                    >
                      Live view{" "}
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="checkmark One Three"
                    />
                    <Text
                      className="flex-grow font-normal ml-[12px] sm:ml-[6px] md:ml-[8px] not-italic text-bluegray_600"
                      variant="body1"
                    >
                      Custom dashboards
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="checkmark Two Three"
                    />
                    <Text
                      className="flex-grow font-normal ml-[12px] sm:ml-[6px] md:ml-[8px] not-italic text-bluegray_600"
                      variant="body1"
                    >
                      Alert Notifications
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                <Img
                  src="images/img_volume_50X50.svg"
                  className="sm:h-[27px] md:h-[35px] h-[50px] max-w-[100%] sm:w-[26px] md:w-[34px] w-[50px]"
                  alt="volume"
                />
                <Column className="flex flex-col justify-start sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]">
                  <Text
                    className="font-bold leading-[32.00px] md:leading-[normal] sm:leading-[normal] text-gray_900 w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    Data collection and tracking analytics
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[12px] mt-[18px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="checkmark Four"
                    />
                    <Text
                      className="flex-grow font-normal ml-[12px] sm:ml-[6px] md:ml-[8px] not-italic text-bluegray_600"
                      variant="body1"
                    >
                      Data collection
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] mb-[2px] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="checkmark One Four"
                    />
                    <Text
                      className="flex-grow font-normal ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[4px] not-italic text-bluegray_600"
                      variant="body1"
                    >
                      Data import
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[14px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] mb-[2px] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="checkmark Two Four"
                    />
                    <Text
                      className="flex-grow font-normal ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[4px] not-italic text-bluegray_600"
                      variant="body1"
                    >
                      Integrations
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                <Img
                  src="images/img_lock_50X50.svg"
                  className="sm:h-[27px] md:h-[35px] h-[50px] max-w-[100%] sm:w-[26px] md:w-[34px] w-[50px]"
                  alt="lock"
                />
                <Column className="flex flex-col justify-start sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]">
                  <Text
                    className="font-bold leading-[32.00px] md:leading-[normal] sm:leading-[normal] text-gray_900 w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    Customer security and privacy
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:mt-[12px] mt-[18px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] mb-[2px] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="checkmark Five"
                    />
                    <Text
                      className="flex-grow font-normal ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[4px] not-italic text-bluegray_600"
                      variant="body1"
                    >
                      Encryption
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[14px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[91%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="checkmark One Five"
                    />
                    <Text
                      className="flex-grow font-normal ml-[12px] sm:ml-[6px] md:ml-[8px] not-italic text-bluegray_600"
                      variant="body1"
                    >
                      Two-Factor Authentication
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[58%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] mb-[2px] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="checkmark Two Five"
                    />
                    <Text
                      className="flex-grow font-normal ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[4px] not-italic text-bluegray_600"
                      variant="body1"
                    >
                      User device log{" "}
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                <Img
                  src="images/img_icon_50X50.svg"
                  className="sm:h-[27px] md:h-[35px] h-[50px] max-w-[100%] sm:w-[26px] md:w-[34px] w-[50px]"
                  alt="Icon"
                />
                <Column className="flex flex-col justify-start sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]">
                  <Text
                    className="font-bold leading-[32.00px] md:leading-[normal] sm:leading-[normal] text-gray_900 w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    Reporting and analytics sales data
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[12px] mt-[18px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[67%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="checkmark Six"
                    />
                    <Text
                      className="flex-grow font-normal ml-[12px] sm:ml-[6px] md:ml-[8px] not-italic text-bluegray_600"
                      variant="body1"
                    >
                      Customer records
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] mb-[2px] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="checkmark One Six"
                    />
                    <Text
                      className="flex-grow font-normal ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[4px] not-italic text-bluegray_600"
                      variant="body1"
                    >
                      Core subscription metrics{" "}
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[14px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[58%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] mb-[2px] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="checkmark Two Six"
                    />
                    <Text
                      className="flex-grow font-normal ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[4px] not-italic text-bluegray_600"
                      variant="body1"
                    >
                      Refund reports
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                <Img
                  src="images/img_map_50X50.svg"
                  className="sm:h-[27px] md:h-[35px] h-[50px] max-w-[100%] sm:w-[26px] md:w-[34px] w-[50px]"
                  alt="map"
                />
                <Column className="flex flex-col justify-start sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]">
                  <Text
                    className="font-bold leading-[32.00px] md:leading-[normal] sm:leading-[normal] text-gray_900 w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    Integration with any social media
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:mt-[12px] mt-[18px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] mb-[2px] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="checkmark Seven"
                    />
                    <Text
                      className="flex-grow font-normal ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[4px] not-italic text-bluegray_600"
                      variant="body1"
                    >
                      Advertising platforms{" "}
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[14px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[87%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] mb-[2px] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="checkmark One Seven"
                    />
                    <Text
                      className="flex-grow font-normal ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[4px] not-italic text-bluegray_600"
                      variant="body1"
                    >
                      Customer data platforms{" "}
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[14px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[63%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] mb-[2px] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="checkmark Two Seven"
                    />
                    <Text
                      className="flex-grow font-normal ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[4px] not-italic text-bluegray_600"
                      variant="body1"
                    >
                      Data governance
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                <Img
                  src="images/img_menu.svg"
                  className="sm:h-[27px] md:h-[35px] h-[50px] max-w-[100%] sm:w-[26px] md:w-[34px] w-[50px]"
                  alt="menu"
                />
                <Column className="flex flex-col justify-start sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]">
                  <Text
                    className="font-bold leading-[32.00px] md:leading-[normal] sm:leading-[normal] text-gray_900 w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    Task and activity tracking for dashboard
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:mt-[12px] mt-[18px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[74%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] mb-[2px] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="checkmark Eight"
                    />
                    <Text
                      className="flex-grow font-normal ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[4px] not-italic text-bluegray_600"
                      variant="body1"
                    >
                      Calendar integration
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[14px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[62%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="checkmark One Eight"
                    />
                    <Text
                      className="flex-grow font-normal ml-[12px] sm:ml-[6px] md:ml-[8px] not-italic text-bluegray_600"
                      variant="body1"
                    >
                      Task automation
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[87%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] mb-[2px] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="checkmark Two Eight"
                    />
                    <Text
                      className="flex-grow font-normal ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[4px] not-italic text-bluegray_600"
                      variant="body1"
                    >
                      Task appointment setting
                    </Text>
                  </Row>
                </Column>
              </Column>
            </Grid>
          </Column>
        </Column>
        <Column className="flex flex-col items-center justify-start max-w-[920px] ml-[auto] mr-[auto] mt-[137px] sm:mt-[72px] md:mt-[94px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Text className="text-gray_900 w-[auto]" as="h2" variant="h2">
            Frequently Asked Question
          </Text>
          <Column className="flex flex-col items-center justify-start sm:mt-[25px] md:mt-[33px] mt-[48px] w-[100%]">
            <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                <Text
                  className="flex-grow font-bold sm:mt-[3px] md:mt-[4px] mt-[7px] text-teal_401"
                  as="h6"
                  variant="h6"
                >
                  How secure is my data?
                </Text>
                <Img
                  src="images/img_videocamera.svg"
                  className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:mb-[3px] md:mb-[4px] mb-[7px] sm:w-[12px] md:w-[16px] w-[24px]"
                  alt="videocamera"
                />
              </Row>
              <Text
                className="font-normal leading-[28.00px] md:leading-[normal] sm:leading-[normal] ml-[1px] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] not-italic text-bluegray_600 sm:w-[100%] w-[84%]"
                variant="body1"
              >
                We monitor our systems and code 24/7/365 with both automated
                tools and our experienced staff to prevent and eliminate attacks
                on our service and to protect our customers’ data.
              </Text>
            </Column>
            <Line className="bg-bluegray_200 h-[1px] sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]" />
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[18px] md:mt-[24px] mt-[35px] w-[100%]">
              <Text
                className="flex-grow font-bold mt-[3px] text-gray_900"
                as="h6"
                variant="h6"
              >
                What happens to my data after the trial?
              </Text>
              <Img
                src="images/img_plus_24X24.svg"
                className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] mb-[4px] sm:w-[12px] md:w-[16px] w-[24px]"
                alt="plus One"
              />
            </Row>
            <Line className="bg-bluegray_200 h-[1px] sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]" />
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[18px] md:mt-[24px] mt-[35px] w-[100%]">
              <Text
                className="flex-grow font-bold mt-[3px] text-gray_900"
                as="h6"
                variant="h6"
              >
                Can I switch between plans?
              </Text>
              <Img
                src="images/img_plus_24X24.svg"
                className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] mb-[4px] sm:w-[12px] md:w-[16px] w-[24px]"
                alt="plus Two"
              />
            </Row>
            <Line className="bg-bluegray_200 h-[1px] sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]" />
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[18px] md:mt-[24px] mt-[35px] sm:px-[0] w-[100%]">
              <Text
                className="flex-grow font-bold text-gray_900"
                as="h6"
                variant="h6"
              >
                Is there a limit on team members?
              </Text>
              <Img
                src="images/img_plus_24X24.svg"
                className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                alt="plus Three"
              />
            </Row>
            <Line className="bg-bluegray_200 h-[1px] sm:mt-[19px] md:mt-[24px] mt-[36px] w-[100%]" />
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[18px] md:mt-[24px] mt-[35px] w-[100%]">
              <Text
                className="flex-grow font-bold mt-[3px] text-gray_900"
                as="h6"
                variant="h6"
              >
                Can I cancel anytime?
              </Text>
              <Img
                src="images/img_plus_24X24.svg"
                className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] mb-[3px] sm:w-[12px] md:w-[16px] w-[24px]"
                alt="plus Four"
              />
            </Row>
            <Line className="bg-bluegray_200 h-[1px] sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]" />
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[18px] md:mt-[24px] mt-[35px] w-[100%]">
              <Text
                className="flex-grow font-bold mt-[3px] text-gray_900"
                as="h6"
                variant="h6"
              >
                Do you have any discounts for non-profits or educational
                institutions?
              </Text>
              <Img
                src="images/img_plus_24X24.svg"
                className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] mb-[4px] sm:w-[12px] md:w-[16px] w-[24px]"
                alt="plus Five"
              />
            </Row>
            <Line className="bg-bluegray_200 h-[1px] sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]" />
          </Column>
        </Column>
        <Row className="bg-teal_401 flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center max-w-[1112px] ml-[auto] mr-[auto] mt-[100px] sm:mt-[53px] md:mt-[68px] sm:pb-[15px] md:pb-[26px] pb-[39px] sm:pl-[15px] md:pl-[26px] pl-[39px] sm:pr-[15px] rounded-radius6 w-[100%]">
          <Column className="flex flex-col justify-start md:ml-[17px] ml-[25px] sm:mt-[25px] md:mt-[33px] mt-[48px] sm:mx-[0] sm:px-[0] rounded-radius6 sm:w-[100%] w-[45%]">
            <Text className="text-white_A700 w-[auto]" as="h2" variant="h2">
              Ready to get started?
            </Text>
            <Text
              className="font-normal leading-[28.00px] md:leading-[normal] sm:leading-[normal] md:mt-[11px] mt-[16px] sm:mt-[8px] not-italic text-white_A700_99 w-[100%]"
              variant="body1"
            >
              The fastest and simple way to generate growing business solutions
              with our products
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
            src="images/img_pattern_281X493.svg"
            className="max-w-[100%] sm:ml-[39px] md:ml-[51px] ml-[75px] sm:w-[100%] w-[46%]"
            alt="pattern"
          />
        </Row>
        <Footer className="bg-gray_900 mt-[120px] sm:mt-[63px] md:mt-[82px] w-[100%]" />
      </Column>
    </>
  );
};

export default PricingPage;
