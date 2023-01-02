import React from "react";

import {
  Column,
  Stack,
  Img,
  Row,
  Text,
  Button,
  List,
  Grid,
  Input,
} from "components";
import Header from "components/Header";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();

  function handleNavigate34() {
    navigate("/login");
  }
  function handleNavigate37() {
    navigate("/pricing");
  }
  function handleNavigate38() {
    navigate("/contact");
  }
  function handleNavigate39() {
    navigate("/resourcecenter");
  }
  function handleNavigate40() {
    navigate("/contact");
  }
  function handleNavigate41() {
    navigate("/resourcecenter");
  }
  function handleNavigate42() {
    navigate("/pricing");
  }
  function handleNavigate43() {
    navigate("/signup");
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-chivo items-center justify-start mx-[auto] w-[100%]">
        <Stack className="h-[1641px] relative w-[100%]">
          <Stack className="absolute bg-gray_50 h-[727px] sm:py-[15px] md:py-[49px] py-[72px] top-[0] w-[100%]">
            <Stack className="absolute bottom-[10%] h-[493px] w-[100%]">
              <Img
                src="images/img_pattern_white_A700.svg"
                className="absolute h-[493px] max-w-[100%] w-[100%]"
                alt="Pattern"
              />
            </Stack>
          </Stack>
          <Header className="absolute top-[0] w-[100%]" />
          <Column className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start sm:mx-[0] mx-[auto] sm:px-[0] rounded-radius6 sm:w-[100%] w-[78%]">
            <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
              <Text
                className="leading-[58.00px] md:leading-[normal] sm:leading-[normal] text-center text-gray_900 w-[100%]"
                as="h1"
                variant="h1"
              >
                Product analytics solution to help your business grow
              </Text>
              <Text
                className="font-normal leading-[28.00px] md:leading-[normal] sm:leading-[normal] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] not-italic text-bluegray_600 text-center sm:w-[100%] w-[74%]"
                variant="body1"
              >
                Simple plans that grow with your business. No contracts. No
                setup fees.
              </Text>
            </Column>
            <Column className="flex flex-col items-center justify-start sm:mt-[31px] md:mt-[41px] mt-[60px] sm:mx-[0] sm:px-[0] rounded-radius6 sm:w-[100%] w-[94%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                <Img
                  src="images/img_rectangle214.png"
                  className="max-w-[100%] rounded-radius6 sm:w-[100%] w-[48%]"
                  alt="Rectangle214"
                />
                <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                  <Img
                    src="images/img_rectangle215.png"
                    className="max-w-[100%] rounded-radius6 w-[100%]"
                    alt="Rectangle215"
                  />
                  <Img
                    src="images/img_rectangle216.png"
                    className="max-w-[100%] sm:mt-[22px] md:mt-[28px] mt-[42px] rounded-radius6 w-[100%]"
                    alt="Rectangle216"
                  />
                </Column>
              </Row>
            </Column>
            <Column className="flex flex-col items-center justify-start sm:mt-[26px] md:mt-[34px] mt-[50px] w-[100%]">
              <Text
                className="font-normal leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] not-italic text-bluegray_600 sm:w-[100%] w-[83%]"
                variant="body1"
              >
                Growit provides agencies and marketers with dashboards, combines
                data sources, and visualizes trends. With a focus on agencies,
                our goal is to help you grow.
                <br />
                <br />
                Founded in 2014 by Diane Davis and featured in the hit show
                Silicon Valley, Growit has expanded to over three hundred
                thousand users. In 2020, Growthlvvy joined the newly-launched,
                agency-focused, marketing technology suite — Traject. Made up of
                passionate team members from 22 cities and 11 countries, Traject
                represents 7 brands in the marketing technology space. We remain
                true to our roots, committed to delivering the easiest
                out-of-the-box dashboarding solution while also innovating,
                expanding integrations, and improving usability.
                <br />
                <br />
                Growit supports hundreds of thousands of users and businesses
                from solopreneurs to enterprises — with a focus on helping
                growing agencies track their efforts and deliver value.
                <br />
                <br />
                {`Strong customer relationships are more important than ever, but the scale and nature of online business means it's harder than ever to create personal connections with customers. That's why we created the world's first Conversational Relationship Platform — to help businesses build better customer relationships through personalized, messenger-based experiences.`}
              </Text>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[26px] md:mt-[34px] mt-[50px] w-[100%]">
                <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%]">
                  <Text className="text-gray_900 w-[auto]" as="h3" variant="h3">
                    4.2m
                  </Text>
                  <Text
                    className="font-normal leading-[26.00px] md:leading-[normal] sm:leading-[normal] md:mt-[11px] mt-[17px] sm:mt-[9px] not-italic text-bluegray_600 w-[100%]"
                    variant="body2"
                  >
                    Users tracked their data product per daily{" "}
                  </Text>
                </Column>
                <List
                  className="sm:gap-[21px] md:gap-[27px] gap-[40px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] sm:w-[100%] w-[49%]"
                  orientation="horizontal"
                >
                  <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                    <Text
                      className="text-gray_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      2014
                    </Text>
                    <Text
                      className="font-normal leading-[26.00px] md:leading-[normal] sm:leading-[normal] mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_600 w-[100%]"
                      variant="body2"
                    >
                      Our experience has been 7 years since 2014
                    </Text>
                  </Column>
                  <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                    <Text
                      className="text-gray_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      426
                    </Text>
                    <Text
                      className="font-normal leading-[26.00px] md:leading-[normal] sm:leading-[normal] mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_600 w-[100%]"
                      variant="body2"
                    >
                      Employees who work with us from different countries
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
        </Stack>
        <Column className="flex flex-col items-center justify-start max-w-[981px] ml-[auto] mr-[auto] mt-[100px] sm:mt-[53px] md:mt-[68px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Text className="text-gray_900 w-[auto]" as="h2" variant="h2">
            Meet our team family
          </Text>
          <Column className="flex flex-col items-center justify-start sm:mt-[26px] md:mt-[34px] mt-[50px] w-[100%]">
            <Grid className="gap-[105px] sm:gap-[55px] md:gap-[72px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] w-[100%]">
              <Column className="bg-white_A700 flex flex-col items-center justify-start md:pb-[11px] sm:pb-[15px] pb-[16px] md:px-[11px] sm:px-[15px] px-[16px] w-[100%]">
                <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:pb-[2px] md:pb-[3px] pb-[5px] sm:px-[0] sm:w-[100%] w-[86%]">
                  <Img
                    src="images/img_ellipse60.png"
                    className="sm:h-[103px] md:h-[133px] h-[192px] rounded-radius50 w-[100%]"
                    alt="EllipseSixty"
                  />
                  <Column className="flex flex-col items-center justify-start sm:mt-[15px] md:mt-[19px] mt-[29px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                    <Text
                      className="font-bold text-gray_900 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Diane Davis
                    </Text>
                    <Text
                      className="font-normal md:mt-[11px] mt-[16px] sm:mt-[8px] not-italic text-bluegray_600 w-[auto]"
                      variant="body1"
                    >
                      CEO and CO Founder
                    </Text>
                  </Column>
                </Column>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center justify-start md:pb-[11px] sm:pb-[15px] pb-[16px] md:px-[11px] sm:px-[15px] px-[16px] w-[100%]">
                <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:pb-[2px] md:pb-[3px] pb-[5px] sm:px-[0] sm:w-[100%] w-[86%]">
                  <Img
                    src="images/img_ellipse60_192X192.png"
                    className="sm:h-[103px] md:h-[133px] h-[192px] rounded-radius50 w-[100%]"
                    alt="EllipseSixty One"
                  />
                  <Column className="flex flex-col items-center justify-start sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                    <Text
                      className="font-bold text-gray_900 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Jonas Delonge
                    </Text>
                    <Text
                      className="font-normal mt-[11px] sm:mt-[5px] md:mt-[7px] not-italic text-bluegray_600 w-[auto]"
                      variant="body1"
                    >
                      Vice President
                    </Text>
                  </Column>
                </Column>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center justify-start md:pb-[11px] sm:pb-[15px] pb-[16px] md:px-[11px] sm:px-[15px] px-[16px] w-[100%]">
                <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
                  <Img
                    src="images/img_ellipse60_1.png"
                    className="sm:h-[103px] md:h-[133px] h-[192px] rounded-radius50 w-[100%]"
                    alt="EllipseSixty Two"
                  />
                  <Column className="flex flex-col items-center justify-start sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                    <Text
                      className="font-bold text-gray_900 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Samantha Ruby
                    </Text>
                    <Text
                      className="font-normal mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_600 w-[auto]"
                      variant="body1"
                    >
                      Director of Marketing
                    </Text>
                  </Column>
                </Column>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center justify-start md:pb-[11px] sm:pb-[15px] pb-[16px] md:px-[11px] sm:px-[15px] px-[16px] w-[100%]">
                <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
                  <Img
                    src="images/img_ellipse60_2.png"
                    className="sm:h-[103px] md:h-[133px] h-[192px] rounded-radius50 w-[100%]"
                    alt="EllipseSixty Three"
                  />
                  <Column className="flex flex-col items-center justify-start sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]">
                    <Text
                      className="font-bold text-gray_900 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Anastasya
                    </Text>
                    <Text
                      className="font-normal mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_600 w-[auto]"
                      variant="body1"
                    >
                      Sr Creative Designer
                    </Text>
                  </Column>
                </Column>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center justify-start md:pb-[11px] sm:pb-[15px] pb-[16px] md:px-[11px] sm:px-[15px] px-[16px] w-[100%]">
                <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
                  <Img
                    src="images/img_ellipse60_3.png"
                    className="sm:h-[103px] md:h-[133px] h-[192px] rounded-radius50 w-[100%]"
                    alt="EllipseSixty Four"
                  />
                  <Column className="flex flex-col items-center justify-start sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                    <Text
                      className="font-bold text-gray_900 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Lizy Renata
                    </Text>
                    <Text
                      className="font-normal mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_600 w-[auto]"
                      variant="body1"
                    >
                      Sr Software Engineer
                    </Text>
                  </Column>
                </Column>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center justify-start md:pb-[11px] sm:pb-[15px] pb-[16px] md:px-[11px] sm:px-[15px] px-[16px] w-[100%]">
                <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
                  <Img
                    src="images/img_ellipse60_4.png"
                    className="sm:h-[103px] md:h-[133px] h-[192px] rounded-radius50 w-[100%]"
                    alt="EllipseSixty Five"
                  />
                  <Column className="flex flex-col items-center justify-start sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                    <Text
                      className="font-bold text-gray_900 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Ben Washington
                    </Text>
                    <Text
                      className="font-normal mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_600 w-[auto]"
                      variant="body1"
                    >
                      Sr Front End Engineer
                    </Text>
                  </Column>
                </Column>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center justify-start md:pb-[11px] sm:pb-[15px] pb-[16px] md:px-[11px] sm:px-[15px] px-[16px] w-[100%]">
                <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:pb-[2px] md:pb-[3px] pb-[5px] sm:px-[0] sm:w-[100%] w-[86%]">
                  <Img
                    src="images/img_ellipse60_5.png"
                    className="sm:h-[103px] md:h-[133px] h-[192px] rounded-radius50 w-[100%]"
                    alt="EllipseSixty Six"
                  />
                  <Column className="flex flex-col items-center justify-start sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
                    <Text
                      className="font-bold text-gray_900 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Jimmy Neutron
                    </Text>
                    <Text
                      className="font-normal mt-[11px] sm:mt-[5px] md:mt-[7px] not-italic text-bluegray_600 w-[auto]"
                      variant="body1"
                    >
                      Account Executive
                    </Text>
                  </Column>
                </Column>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center justify-end p-[4px] w-[100%]">
                <Column className="flex flex-col items-center justify-start sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:pb-[2px] md:pb-[3px] pb-[5px] sm:px-[0] sm:w-[100%] w-[78%]">
                  <Img
                    src="images/img_ellipse60_6.png"
                    className="sm:h-[103px] md:h-[133px] h-[192px] rounded-radius50 w-[100%]"
                    alt="EllipseSixty Seven"
                  />
                  <Column className="flex flex-col items-center justify-start sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                    <Text
                      className="font-bold text-gray_900 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Antony Velich
                    </Text>
                    <Text
                      className="font-normal mt-[11px] sm:mt-[5px] md:mt-[7px] not-italic text-bluegray_600 w-[auto]"
                      variant="body1"
                    >
                      Account Executive
                    </Text>
                  </Column>
                </Column>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[4px] md:p-[5px] p-[8px] w-[100%]">
                <Img
                  src="images/img_ellipse60_7.png"
                  className="sm:h-[103px] md:h-[133px] h-[192px] rounded-radius50 sm:w-[102px] md:w-[132px] w-[192px]"
                  alt="EllipseSixty Eight"
                />
                <Column className="flex flex-col items-center justify-start sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                  <Text
                    className="font-bold text-gray_900 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Spencer Roberto
                  </Text>
                  <Text
                    className="font-normal mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_600 w-[auto]"
                    variant="body1"
                  >
                    Product Support Specialist
                  </Text>
                </Column>
              </Column>
            </Grid>
          </Column>
        </Column>
        <Column className="flex flex-col items-center justify-start max-w-[1112px] ml-[auto] mr-[auto] sm:mt-[44px] md:mt-[57px] mt-[84px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Text className="text-gray_900 w-[auto]" as="h2" variant="h2">
            We've helped their SaaS applications
          </Text>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[25px] md:mt-[33px] mt-[48px] p-[2px] w-[100%]">
            <Img
              src="images/img_microsoft1_teal_202.svg"
              className="max-w-[100%] ml-[4px] w-[13%]"
              alt="MicrosoftOne"
            />
            <Img
              src="images/img_vector_teal_202.svg"
              className="max-w-[100%] sm:ml-[34px] md:ml-[44px] ml-[65px] w-[11%]"
              alt="Vector"
            />
            <Img
              src="images/img_trash_36X69.svg"
              className="max-w-[100%] ml-[101px] sm:ml-[53px] md:ml-[69px] w-[7%]"
              alt="trash"
            />
            <Img
              src="images/img_shopify_teal_202.svg"
              className="max-w-[100%] sm:ml-[51px] md:ml-[66px] ml-[96px] w-[12%]"
              alt="Shopify"
            />
            <Img
              src="images/img_group_teal_202.svg"
              className="max-w-[100%] sm:ml-[33px] md:ml-[43px] ml-[63px] w-[13%]"
              alt="Group"
            />
            <Img
              src="images/img_intel_30X73.svg"
              className="max-w-[100%] sm:ml-[46px] md:ml-[60px] ml-[88px] w-[7%]"
              alt="Intel"
            />
          </Row>
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
            src="images/img_pattern_1.svg"
            className="max-w-[100%] sm:ml-[39px] md:ml-[51px] ml-[75px] sm:w-[100%] w-[46%]"
            alt="pattern One"
          />
        </Row>
        <Footer className="bg-gray_900 mt-[120px] sm:mt-[63px] md:mt-[82px] w-[100%]" />
      </Column>
    </>
  );
};

export default AboutPage;
