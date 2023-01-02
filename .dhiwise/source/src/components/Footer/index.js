import React from "react";

import { Column, Row, Img, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <Column className="flex flex-col items-center justify-start sm:mb-[12px] md:mb-[16px] mb-[24px] md:ml-[110px] ml-[161px] sm:ml-[85px] md:mr-[112px] mr-[164px] sm:mr-[87px] sm:mt-[18px] md:mt-[24px] mt-[35px] sm:w-[100%] w-[78%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly w-[100%]">
            <Column className="flex flex-col justify-start sm:mb-[15px] md:mb-[20px] mb-[30px] sm:mx-[0] sm:pl-[0] sm:pr-[15px] md:pr-[185px] pr-[269px] sm:w-[100%] w-[51%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end ml-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[40%]">
                <Img
                  src="defaultNoData.png"
                  className="flex-shrink-0 sm:h-[16px] md:h-[21px] h-[30px] max-w-[100%] sm:w-[15px] md:w-[20px] w-[30px]"
                  alt="Group448 One"
                />
                <Text className="flex-grow font-bold font-cinzeldecorative sm:mb-[2px] md:mb-[3px] mb-[5px] md:ml-[11px] ml-[16px] sm:ml-[8px] sm:mt-[4px] md:mt-[5px] mt-[8px] text-[16px] text-colors">
                  Growit
                </Text>
              </Row>
              <Column className="flex flex-col justify-start sm:mt-[24px] md:mt-[31px] mt-[46px] pb-[3px] sm:px-[0] w-[100%] common-column-list common-column-list common-column-list">
                <Text className="font-chivo font-normal leading-[26.00px] md:leading-[normal] sm:leading-[normal] not-italic text-[16px] text-white_A700 w-[100%]">
                  The fastest and simple way to generate growing business
                  solutions with our products
                </Text>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mt-[15px] md:mt-[19px] mt-[29px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[78%]">
                  <Img
                    src="images/img_mail.svg"
                    className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                    alt="mail"
                  />
                  <Text className="flex-grow font-chivo font-normal mb-[2px] ml-[10px] sm:ml-[5px] md:ml-[6px] sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-[16px] text-white_A700">
                    hello@dhuhacreative.com
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[2px] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                  <Img
                    src="images/img_grid.svg"
                    className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                    alt="grid"
                  />
                  <Text className="flex-grow font-chivo font-normal mb-[1px] ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[3px] not-italic text-[16px] text-white_A700">
                    Join our slack community
                  </Text>
                </Row>
              </Column>
            </Column>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly sm:mt-[28px] md:mt-[36px] mt-[53px] sm:mx-[0] sm:px-[0] py-[2px] sm:w-[100%] w-[50%]">
              <Column className="flex flex-col justify-start sm:mb-[20px] md:mb-[26px] mb-[38px] sm:mx-[0] sm:pl-[0] sm:pr-[15px] md:pr-[59px] pr-[87px] sm:w-[100%] w-[35%] common-column-list common-column-list common-column-list">
                <Text className="font-bold font-chivo text-[16px] text-white_A700 w-[auto]">
                  Product
                </Text>
                <Text className="font-chivo font-normal sm:mt-[12px] md:mt-[16px] mt-[24px] not-italic text-[16px] text-bluegray_100 w-[auto]">
                  Landingpages
                </Text>
                <Text className="font-chivo font-normal sm:mt-[11px] md:mt-[15px] mt-[22px] not-italic text-[16px] text-bluegray_100 w-[auto]">
                  Pricing
                </Text>
                <Text className="font-chivo font-normal sm:mt-[10px] md:mt-[13px] mt-[20px] not-italic text-[16px] text-bluegray_100 w-[auto]">
                  Benefits
                </Text>
                <Text className="font-chivo font-normal sm:mt-[11px] md:mt-[15px] mt-[22px] not-italic text-[16px] text-bluegray_100 w-[auto]">
                  Features
                </Text>
              </Column>
              <Column className="flex flex-col justify-start sm:mx-[0] my-[2px] sm:pl-[0] sm:pr-[15px] md:pr-[31px] pr-[46px] sm:w-[100%] w-[35%] common-column-list common-column-list common-column-list">
                <Text className="font-bold font-chivo text-[16px] text-white_A700 w-[auto]">
                  Company
                </Text>
                <Text className="font-chivo font-normal md:mt-[12px] mt-[18px] sm:mt-[9px] not-italic text-[16px] text-bluegray_100 w-[auto]">
                  About
                </Text>
                <Text className="font-chivo font-normal sm:mt-[12px] md:mt-[15px] mt-[23px] not-italic text-[16px] text-bluegray_100 w-[auto]">
                  Privacy Policy
                </Text>
                <Text className="font-chivo font-normal sm:mt-[10px] md:mt-[13px] mt-[20px] not-italic text-[16px] text-bluegray_100 w-[auto]">
                  Terms & Conditions
                </Text>
                <Text className="font-chivo font-normal sm:mt-[11px] md:mt-[15px] mt-[22px] not-italic text-[16px] text-bluegray_100 w-[auto]">
                  Partners
                </Text>
                <Text className="font-chivo font-normal sm:mt-[11px] md:mt-[14px] mt-[21px] not-italic text-[16px] text-bluegray_100 w-[auto]">
                  Contact
                </Text>
              </Column>
              <Column className="flex flex-col justify-start sm:mb-[20px] md:mb-[26px] mb-[38px] mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[31%] common-column-list common-column-list common-column-list">
                <Text className="font-bold font-chivo text-[16px] text-white_A700 w-[auto]">
                  Resources
                </Text>
                <Text className="font-chivo font-normal sm:mt-[10px] md:mt-[13px] mt-[20px] not-italic text-[16px] text-bluegray_100 w-[auto]">
                  Guides and resources
                </Text>
                <Text className="font-chivo font-normal sm:mt-[12px] md:mt-[15px] mt-[23px] not-italic text-[16px] text-bluegray_100 w-[auto]">
                  Blog
                </Text>
                <Text className="font-chivo font-normal sm:mt-[10px] md:mt-[13px] mt-[20px] not-italic text-[16px] text-bluegray_100 w-[auto]">
                  Tools
                </Text>
                <Text className="font-chivo font-normal sm:mt-[12px] md:mt-[15px] mt-[23px] not-italic text-[16px] text-bluegray_100 w-[auto]">
                  Support
                </Text>
              </Column>
            </Row>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mt-[42px] md:mt-[55px] mt-[80px] sm:px-[0] w-[100%]">
            <Text className="font-chivo font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-[14px] text-white_A700_a2 w-[auto]">
              © 2020 Growit. All Right Reserved
            </Text>
            <Img
              src="images/img_bxbxlinstagra.svg"
              className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[400px] md:ml-[517px] ml-[752px] sm:w-[12px] md:w-[16px] w-[24px]"
              alt="bxbxlinstagra"
            />
            <Img
              src="images/img_twitter.svg"
              className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[17px] md:ml-[22px] ml-[32px] sm:w-[12px] md:w-[16px] w-[24px]"
              alt="twitter"
            />
            <Img
              src="images/img_linkedin.svg"
              className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[17px] md:ml-[22px] ml-[32px] sm:w-[12px] md:w-[16px] w-[24px]"
              alt="linkedin"
            />
          </Row>
        </Column>
      </footer>
    </>
  );
};

export default Footer;
