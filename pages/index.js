import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { i18n, withTranslation } from "../i18n";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import {
  Layout,
  Button,
  Row,
  Col,
  Card,
  Divider,
  Tabs,
  Tooltip,
  Menu,
  BackTop,
  Drawer,
} from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  FacebookOutlined,
  CaretLeftOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { motion } from "framer-motion";

import globalStyles from "../public/styles/global.js";

import useWindowSize from "../services/useWindowSize";

import "../public/styles/antd.less";

const { Header, Footer, Content } = Layout;
const { TabPane } = Tabs;

{
  /* <Button
          type="button"
          onClick={() =>
            i18n.changeLanguage(i18n.language === "th" ? "en" : "th")
          }
        >
          {t("change-locale")}
        </Button> */
}

const Homepage = ({ t }) => {
  // Ref for our element
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  // State for navigation bar
  const [navPos, setNavPos] = useState(0);
  const [navState, setNavState] = useState(true);
  const [navkey, setNavKey] = useState(null);

  // State for section
  const [meetAbout, setMeetAbout] = useState(false);
  const [meetEducation, setMeetEducation] = useState(false);
  const [meetProject, setMeetProject] = useState(false);
  const [meetContact, setMeetContact] = useState(false);

  // State for modal
  const [showDrawer, setShowDrawer] = useState(false);

  // Windown Size
  const wSize = useWindowSize();

  // Project container
  const projectData = [
    {
      image: "/images/project1.png",
      title: "Mockup Mobile Application",
      description:
        "เป็นตัวอย่างโปรแกรมที่ได้ทำมนข่วงของการฝึกงานภาคฤดูร้อนก่อนได้จะจบจากมหาวิทยาลัย",
      link:
        "https://github.com/tickstudiu/design-soft-events-mobile-application?fbclid=IwAR22jwrgd_tdmTbRYpFjqqYuQ9rZuINgFb-z6yqvsdXK2MmLAK_xdaloOQo",
      author: [
        {
          name: "วันเฉลิม",
          link: "https://github.com/tickstudiu/",
        },
      ],
      tag: [
        {
          name: "Adobe XD",
          link: "https://www.adobe.com/sea/products/xd.html",
        },
      ],
    },
  ];

  const scrollToRef = (ref, key) => {
    window.scrollTo(0, ref.current.offsetTop);

    if (key === "1") {
      setMeetAbout(true);
      setNavKey("1");
    }

    if (key === "2") {
      setMeetEducation(true);
      setNavKey("2");
    }

    if (key === "3") {
      setMeetProject(true);
      setNavKey("3");
    }

    if (key === "4") {
      setMeetContact(true);
      setNavKey("4");
    }
  };

  // on Scrolling
  useScrollPosition(({ prevPos, currPos }) => {
    if (
      currPos.y * -1 + 450 > aboutRef.current.offsetTop &&
      currPos.y * -1 < aboutRef.current.offsetTop
    ) {
      setMeetAbout(true);
      setNavKey("1");
    }

    if (
      currPos.y * -1 + 450 > educationRef.current.offsetTop &&
      currPos.y * -1 < educationRef.current.offsetTop
    ) {
      setMeetEducation(true);
      setNavKey("2");
    }

    if (
      currPos.y * -1 + 450 > projectRef.current.offsetTop &&
      currPos.y * -1 < projectRef.current.offsetTop
    ) {
      setMeetProject(true);
      setNavKey("3");
    }

    if (
      currPos.y * -1 + 450 > contactRef.current.offsetTop &&
      currPos.y * -1 < contactRef.current.offsetTop
    ) {
      setMeetContact(true);
      setNavKey("4");
    }

    setNavPos(currPos);
    if (prevPos.y < currPos.y) {
      // Set State when up
      setNavState(true);
    } else {
      // Set State when dpwn
      setNavState(false);
    }
  });

  // Animation
  // ---
  // Fade up animation
  const FadeUpAnimation = {
    hidden: {
      y: 15,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
    },
  };

  // Fade down animation
  const FadeDownAnimation = {
    hidden: {
      y: -15,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
    },
  };

  // Fade in animation
  const FadeInAnimation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };

  return (
    <div>
      {/* Header */}
      <BackTop />

      <motion.div
        style={{ zIndex: 1000 }}
        animate={{
          opacity: navState ? 1 : 0,
        }}
      >
        <Header className="header">
          <motion.h1
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              display: wSize && wSize.width < 576 ? "none" : "",
            }}
            variants={FadeInAnimation}
            initial="hidden"
            animate="show"
          >
            WANLERM.SPACE
          </motion.h1>

          <motion.h1
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              display: wSize && wSize.width < 576 ? "" : "none",
            }}
            variants={FadeInAnimation}
            initial="hidden"
            animate="show"
            className="text-center"
          >
            WANLERM.SPACE{" "}
            <CaretLeftOutlined onClick={() => setShowDrawer(!showDrawer)} />
          </motion.h1>

          <Drawer
            placement="right"
            closable={false}
            onClose={() => setShowDrawer(false)}
            visible={showDrawer}
          >
            <Menu
              mode="inline"
              style={{
                background: "transparent",
                border: "none",
              }}
              selectedKeys={navkey}
              defaultSelectedKeys={navkey}
            >
              <Menu.Item key="1" style={{ fontSize: "20px" }}>
                <motion.span
                  variants={FadeDownAnimation}
                  initial="hidden"
                  animate="show"
                  transition={{
                    delay: 0,
                  }}
                  onClick={() => scrollToRef(aboutRef, "1")}
                >
                  ฉันหรอ?
                </motion.span>
              </Menu.Item>
              <Menu.Item key="2" style={{ fontSize: "20px" }}>
                <motion.span
                  variants={FadeDownAnimation}
                  initial="hidden"
                  animate="show"
                  transition={{
                    delay: 0.4,
                  }}
                  onClick={() => scrollToRef(educationRef, "2")}
                >
                  เรียนที่ไหนมา?
                </motion.span>
              </Menu.Item>
              <Menu.Item key="3" style={{ fontSize: "20px" }}>
                <motion.span
                  variants={FadeDownAnimation}
                  initial="hidden"
                  animate="show"
                  transition={{
                    delay: 0.8,
                  }}
                  onClick={() => scrollToRef(projectRef, "3")}
                >
                  สิ่งที่ฉันทำ?
                </motion.span>
              </Menu.Item>
              <Menu.Item key="4" style={{ fontSize: "20px" }}>
                <motion.span
                  variants={FadeDownAnimation}
                  initial="hidden"
                  animate="show"
                  transition={{
                    delay: 1,
                  }}
                  onClick={() => scrollToRef(contactRef, "4")}
                >
                  กดฉันสิ!!
                </motion.span>
              </Menu.Item>
            </Menu>
          </Drawer>

          <Menu
            mode="horizontal"
            style={{
              background: "transparent",
              border: "none",
              display: wSize && wSize.width < 576 ? "none" : "",
            }}
            selectedKeys={navkey}
            defaultSelectedKeys={navkey}
          >
            <Menu.Item key="1" style={{ fontSize: "20px" }}>
              <motion.span
                variants={FadeDownAnimation}
                initial="hidden"
                animate="show"
                transition={{
                  delay: 0,
                }}
                onClick={() => scrollToRef(aboutRef, "1")}
              >
                ฉันหรอ?
              </motion.span>
            </Menu.Item>
            <Menu.Item key="2" style={{ fontSize: "20px" }}>
              <motion.span
                variants={FadeDownAnimation}
                initial="hidden"
                animate="show"
                transition={{
                  delay: 0.4,
                }}
                onClick={() => scrollToRef(educationRef, "2")}
              >
                เรียนที่ไหนมา?
              </motion.span>
            </Menu.Item>
            <Menu.Item key="3" style={{ fontSize: "20px" }}>
              <motion.span
                variants={FadeDownAnimation}
                initial="hidden"
                animate="show"
                transition={{
                  delay: 0.8,
                }}
                onClick={() => scrollToRef(projectRef, "3")}
              >
                สิ่งที่ฉันทำ?
              </motion.span>
            </Menu.Item>
            <Menu.Item key="4" style={{ fontSize: "20px" }}>
              <motion.span
                variants={FadeDownAnimation}
                initial="hidden"
                animate="show"
                transition={{
                  delay: 1,
                }}
                onClick={() => scrollToRef(contactRef, "4")}
              >
                กดฉันสิ!!
              </motion.span>
            </Menu.Item>
          </Menu>
        </Header>
      </motion.div>

      <div className="container">
        <Content>
          {/* Title */}
          <section
            style={{
              justifyContent:
                wSize && wSize.width < 576 ? "flex-end" : "center",
            }}
          >
            <Row className="title-container">
              <Col span={16}>
                <motion.h3
                  style={{
                    fontSize: 30,
                    fontWeight: "bold",
                    margin: "0",
                    color: "#B8A48C",
                  }}
                  variants={FadeUpAnimation}
                  initial="hidden"
                  animate="show"
                  transition={{
                    delay: 0,
                  }}
                >
                  ไง, ผมชื่อ
                </motion.h3>

                <motion.h1
                  className="text-title"
                  variants={FadeUpAnimation}
                  initial="hidden"
                  animate="show"
                  transition={{
                    delay: 0.4,
                  }}
                >
                  วันเฉลิม สุขสวัสดิ์
                </motion.h1>
                <motion.h1
                  style={{
                    fontSize: 70,
                    fontWeight: "bold",
                    marginBottom: "114px",
                    color: "#8A898E",
                    display: wSize && wSize.width < 576 ? "none" : "",
                  }}
                  variants={FadeUpAnimation}
                  initial="hidden"
                  animate="show"
                  transition={{
                    delay: 0.8,
                  }}
                >
                  และผมชอบเขียนโปรแกรม
                </motion.h1>
                <motion.p
                  className="lead text-muted"
                  variants={FadeUpAnimation}
                  initial="hidden"
                  animate="show"
                  transition={{
                    delay: 1,
                  }}
                  style={{
                    display: wSize && wSize.width < 576 ? "none" : "",
                  }}
                >
                  สวัสดีครับทุกคน ผมสร้างเว็บนี้เอาไว้เพื่อใช้ในการหางาน และ
                  แนะนำตัวผมเองแน่นอนมันจะรวบรวมที่อย่างที่เกี่ยวกับตัวผม และ
                  ผลงานของผมทั้งหมดที่่อยากจะให้เพื่อนได้ดูกันครับผม
                  ขอบคุณมากนะครับผมเข้ามาดู
                </motion.p>
                <motion.div
                  style={{
                    width: "189px",
                  }}
                  variants={FadeUpAnimation}
                  initial="hidden"
                  animate="show"
                  transition={{
                    delay: 1,
                  }}
                  whileHover={{
                    y: -5,
                    rotateX: 20,
                    boxShadow: "0px 10px 10px rgba( 232, 123, 90, 0.2 )",
                    transition: {
                      type: "spring",
                      stiffness: 300,
                    },
                  }}
                  whileTap={{
                    scale: 0.9,
                    y: 0,
                    originY: 0,
                    boxShadow: "none",
                  }}
                >
                  <Button
                    type="primary"
                    style={{
                      padding: "0px 45px",
                    }}
                    size="large"
                  >
                    ติดต่อผม
                  </Button>
                </motion.div>
              </Col>
              <Col span={8}></Col>
            </Row>
          </section>

          {/* About Me */}
          <motion.section
            ref={aboutRef}
            initial={{
              opacity: 0,
              y: 90,
            }}
            animate={{
              opacity: meetAbout ? 1 : 0,
              y: meetAbout ? 0 : 90,
              transition: {
                duration: 0.5,
                delay: 0.1,
              },
            }}
          >
            <Row className="about-container">
              <Col lg={12} sm={24}>
                <motion.img
                  src="/images/img1.jpg"
                  alt="my image"
                  className="profile-image"
                  initial={{
                    opacity: 0.8,
                    scale: 0.9,
                    filter: "grayscale(60%)",
                  }}
                  whileHover={{
                    opacity: 1,
                    scale: 1.1,
                    filter: "grayscale(0%)",
                    boxShadow: "0px 10px 10px rgba( 0, 0, 0, 0.2 )",
                  }}
                />
              </Col>
              <Col lg={12} sm={24}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <article>
                    <h1 className="text-code display-3">ฉันหรอ?</h1>
                    <p className="display-2 mb-1">
                      สวัสดีครับผม ผมขอแนะนำตัวเองหน่อยนะครับ ผมชื่อไนซ์ (์Nice)
                      ตอนนี้ผมพึ่งจบให้ได้ประมาณ 1 เดือนครับผม
                      ตัวผมเป็นคนชอบอยู่บ้านผม ชอบปั่นจักยาม บ้างวันถ้าว่างมาก ๆ
                      ไม่รู้จะทำอะไรก็จะปั่นจักยามไปที่สวนสาธารณะเทศบาลนครหาดใหญ่
                      แต่ถ้าฝนตกผมชอบเอาโกโก้ร้อน พร้อมคอมที่โหลดหนังที่อยากดู
                      แล้วออกมานั่งที่สวนข้างบ้านเป็นที่ฟินสุด ๆ ไปเลย
                    </p>
                    <p className="display-2 text-sub mb-1">
                      และอีกเรื่องหนึ่งคือ
                      ผมชอบเขียนโปรแกรมครับเท่าที่ผมจำความได้ผมเริ่มเขียนโปรแกรมครั้งแรกตอนผมอายุประมาณ
                      14 - 15 ประมาณช่วงมัธยมต้น
                      ตอนนั้นเป็นอะไรที่ใหม่สำหรับผมมาก
                      และเป็นไม่กี่เรื่องที่ผมสามารถหาอะไรใหม่ ๆ
                      ให้ทำตลอดเวลาทำให้ผมชอบ และยังรักที่จะทำมันอยู่ครับผม
                      และสุดท้ายนี้ นี้คือทั้งหมดที่ผมเรียนรู้มาครับ
                    </p>

                    <Row>
                      <Col span={12}>
                        <ul>
                          <motion.li
                            className="item"
                            whileHover={{
                              x: "20px",
                              originX: 0,
                              transition: {
                                type: "spring",
                                stiffness: 300,
                              },
                            }}
                          >
                            Reactjs
                          </motion.li>
                          <motion.li
                            className="item"
                            whileHover={{
                              x: "20px",
                              originX: 0,
                              transition: {
                                type: "spring",
                                stiffness: 300,
                              },
                            }}
                          >
                            VueJs
                          </motion.li>
                          <motion.li
                            className="item"
                            whileHover={{
                              x: "20px",
                              originX: 0,
                              transition: {
                                type: "spring",
                                stiffness: 300,
                              },
                            }}
                          >
                            Ionic
                          </motion.li>
                        </ul>
                      </Col>
                      <Col span={12}>
                        <ul>
                          <motion.li
                            className="item"
                            whileHover={{
                              x: "20px",
                              originX: 0,
                              transition: {
                                type: "spring",
                                stiffness: 300,
                              },
                            }}
                          >
                            Angular
                          </motion.li>
                          <motion.li
                            className="item"
                            whileHover={{
                              x: "20px",
                              originX: 0,
                              transition: {
                                type: "spring",
                                stiffness: 300,
                              },
                            }}
                          >
                            <Tooltip
                              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                              placement="bottom"
                              mouseEnterDelay="0.85"
                            >
                              NextJs
                            </Tooltip>
                          </motion.li>
                        </ul>
                      </Col>
                    </Row>
                  </article>
                </div>
              </Col>
            </Row>
          </motion.section>

          {/* Education */}
          <motion.section
            ref={educationRef}
            initial={{
              opacity: 0,
              y: 90,
            }}
            animate={{
              opacity: meetEducation ? 1 : 0,
              y: meetEducation ? 0 : 90,
              transition: {
                duration: 0.5,
                delay: 0.1,
              },
            }}
          >
            <div>
              <h1 className="text-code display-3 text-center-sm">
                เรียนที่ไหนมา?
              </h1>
              <Tabs
                defaultActiveKey="1"
                tabPosition={wSize.width < 990 ? "top" : "left"}
                className="tab-container"
              >
                <TabPane tab="2009" key="1">
                  <p className="display-2 mb-1 tab-header">
                    มัธยมต้น{" "}
                    <a className="link" href="http://www.yorwor2.ac.th/">
                      @หาดใหญ่วิทยาลัย2
                    </a>
                  </p>

                  <ul>
                    <li>
                      <p
                        className="display-2 text-sub mb-1"
                        style={{
                          fontSize: "18px",
                        }}
                      >
                        ช่วงนั้นผม และครอบครัวกำลังปรึกษาว่าตัวผมนั้นชอบอะไร
                        และอยากทำอะไรในช่วงนั้นผมได้บอกกับพ่อแม่ว่าผมอยากที่จะสร้างโปรแกรม
                        แต่ผมไม่รู้ว่าจะทำยังไงพ่อกับแม่เลยหาโครงการ
                        หรือหลักสูตรที่เกี่ยวข้องกับความสนใจของผม
                      </p>
                    </li>
                    <li>
                      <p
                        className="display-2 text-sub mb-1"
                        style={{
                          fontSize: "18px",
                        }}
                      >
                        ด้วยความที่โชคดี ผมได้สอบ
                        และได้เข้ารับการศึกษาที่หาดใหญ่วิทยาลัยสองในโครงการ
                        Cyber คือโครงการที่ใช้กระดาษในการเรียนน้อยที่สุด
                        และใช้งานเทคโนโลยีให้มากที่สุด
                      </p>
                    </li>
                    <li>
                      <p
                        className="display-2 text-sub mb-1"
                        style={{
                          fontSize: "18px",
                        }}
                      >
                        ระหว่างนั้นผมได้แข่งขันหุ่นยนต์ในระดับโรงเรียน
                        และในระดับภาค
                        และยังได้เป็นตัวแทนการแข่งขันคณิตของโรงเรียนด้วยครับผม
                      </p>
                    </li>
                  </ul>
                </TabPane>
                <TabPane tab="2012" key="2">
                  <p className="display-2 mb-1 tab-header">
                    มัธยมปลาย{" "}
                    <a
                      className="link"
                      href="http://www.hatyaiwit.ac.th/frontpage"
                    >
                      @หาดใหญ่วิทยาลัย
                    </a>
                  </p>

                  <ul>
                    <li>
                      <p
                        className="display-2 text-sub mb-1"
                        style={{
                          fontSize: "18px",
                        }}
                      >
                        หลังจากที่จบจากมัธยมต้นก็ได้สอบเข้าในโรงเรียนหาดใหญ่วิทยาลัย
                        ซึ้งได้เลยในสาย วิทย์ - คณิต
                        ด้วยความที่ตัวเราชอบในการแข่งขัน และ ชอบหาอะไรใหม่ทำ
                        ทำให้ตัวผมอยากที่จะลองช่วยงาน กนร ของโรงเรียน
                        ซึ้งช่วยในเรื่องของสวัสดีการต่าง ๆ เท่าที่ทำได้
                      </p>
                    </li>
                    <li>
                      <p
                        className="display-2 text-sub mb-1"
                        style={{
                          fontSize: "18px",
                        }}
                      >
                        และในระหว่างที่ไกล้จะสำเร็จการศึกษาก็ได้เข้าเป็นตัวแทนแข่งขันเกี่ยวกับโปรแกรมหุ่นยนต์ด้วย
                        ซึ้งผมทำให้ที่เป็นคนเขียนโปแกรม
                        และคิดเกี่ยวกับระบบในนั้น
                      </p>
                    </li>
                  </ul>
                </TabPane>
                <TabPane tab="2015" key="3">
                  <p className="display-2 mb-1 tab-header">
                    มหาลัย{" "}
                    <a className="link" href="https://www.psu.ac.th/th/">
                      @มหาวิทยาลัยสงขลานครินทร์
                    </a>
                  </p>

                  <ul>
                    <li>
                      <p
                        className="display-2 text-sub mb-1"
                        style={{
                          fontSize: "18px",
                        }}
                      >
                        หลังจากที่จบการศึกษาจากหาดใหญ่วิทยาลัย
                        ได้รับโคต้าเข้ามหาวิทยาลัยสงขลานครินทร์
                        วิศวกรรมคอมพิวเตอร์
                        ระหว่างที่รับการศึกษาก็ได้ทำกิจกรรมต่าง ๆ
                        และได้รับโอกาสจากเพื่อนให้เป็นรองหัวหน้าสวัสดีการ
                        เพื่อช่วยงานของทางคณะ
                      </p>
                    </li>
                    <li>
                      <p
                        className="display-2 text-sub mb-1"
                        style={{
                          fontSize: "18px",
                        }}
                      >
                        ระหว่างได้ศึกษาได้มีโอกาสเป็น TA หรือ
                        ผู้ช่วยอาจารณ์ในการสอนวิชาดังนี้ LabSoftware LabHardware
                        OOP Client/Server และ CBT ในช่วงปี 2 - 3
                        และยังได้แข่งขัน NSC 2019 ในระดับภาคใค้
                        และยังมีโอกาศในการเข้าอบรมที่ กทม ด้าน desgin
                        เพื่อกลับให้กับพี่ ๆ น้อง ๆ ทีมีความสนใจด้านนี้เหมือนกัน
                      </p>
                    </li>
                  </ul>
                </TabPane>
              </Tabs>
            </div>
          </motion.section>

          {/* Project */}
          <motion.section
            ref={projectRef}
            initial={{
              opacity: 0,
              y: 90,
            }}
            animate={{
              opacity: meetProject ? 1 : 0,
              y: meetProject ? 0 : 90,
              transition: {
                duration: 0.5,
                delay: 0.1,
              },
            }}
          >
            <div>
              <Row>
                <Col span={24}>
                  <h2 className="display-2 text-primary text-center">
                    ผลงานของฉัน
                  </h2>
                  <h1 className="text-code display-1 text-center">
                    สิ่งที่ฉันทำ?
                  </h1>
                </Col>
              </Row>
              <Row className="project-container">
                {projectData.map((data) => {
                  return (
                    <Col lg={6} sm={24}>
                      <a href={data.link}>
                        <motion.div className="post-container">
                          <Card bordered={false} className="post">
                            <img src={data.image} alt="my image" />

                            <div className="post-content">
                              <h1 className="display-2">{data.title}</h1>
                              <p className="display-2 text-sub mb-1">
                                {data.description}
                              </p>
                              <Divider style={{ background: "#D0D4D5" }} />
                              <Row>
                                <Col span={12}>
                                  <ul
                                    style={{
                                      listStyle: "none",
                                      padding: "0",
                                    }}
                                  >
                                    <li className="item">
                                      <h1 className="display-2">AUTHOR</h1>
                                    </li>
                                    {data.author.map((author) => {
                                      return (
                                        <li
                                          className="item"
                                          style={{
                                            fontSize: "18px",
                                          }}
                                        >
                                          <a
                                            href={author.link}
                                            className="link"
                                          >
                                            {author.name}
                                          </a>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </Col>
                                <Col span={12}>
                                  <ul
                                    style={{
                                      listStyle: "none",
                                      padding: "0",
                                    }}
                                  >
                                    <li className="item">
                                      <h1 className="display-2">TAGS</h1>
                                    </li>
                                    {data.tag.map((tag) => {
                                      return (
                                        <li
                                          className="item"
                                          style={{
                                            fontSize: "18px",
                                          }}
                                        >
                                          <a href={tag.link} className="link">
                                            {tag.name}
                                          </a>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </Col>
                              </Row>
                            </div>
                          </Card>
                        </motion.div>
                      </a>
                    </Col>
                  );
                })}

                <Col lg={6} sm={24}>
                  <motion.div className="post-container">
                    <Card bordered={false} className="post">
                      <img src="/images/img1.jpg" alt="my image" />

                      <div className="post-content">
                        <h1 className="display-2">
                          Lorem ipsum dolor sit amet
                        </h1>
                        <p className="display-2 text-sub mb-1">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor
                        </p>
                        <Divider style={{ background: "#D0D4D5" }} />
                        <Row>
                          <Col span={12}>
                            <ul
                              style={{
                                listStyle: "none",
                                padding: "0",
                              }}
                            >
                              <li className="item">
                                <h1 className="display-2">AUTHOR</h1>
                              </li>
                              <li
                                className="item"
                                style={{
                                  fontSize: "18px",
                                }}
                              >
                                Wanchalerm
                              </li>
                            </ul>
                          </Col>
                          <Col span={12}>
                            <ul
                              style={{
                                listStyle: "none",
                                padding: "0",
                              }}
                            >
                              <li className="item">
                                <h1 className="display-2">TAGS</h1>
                              </li>
                              <li
                                className="item"
                                style={{
                                  fontSize: "18px",
                                }}
                              >
                                <span className="link">Angular</span>
                              </li>
                              <li
                                className="item"
                                style={{
                                  fontSize: "18px",
                                }}
                              >
                                <span className="link">ReactJs</span>
                              </li>
                            </ul>
                          </Col>
                        </Row>
                      </div>
                    </Card>
                  </motion.div>
                </Col>
              </Row>
            </div>
          </motion.section>

          {/* Contact */}
          <motion.section
            className="touch-me"
            ref={contactRef}
            initial={{
              opacity: 0,
              y: 90,
            }}
            animate={{
              opacity: meetContact ? 1 : 0,
              y: meetContact ? 0 : 90,
              transition: {
                duration: 0.5,
                delay: 0.1,
              },
            }}
          >
            <h2 className="display-2 text-primary">ติดต่อฉัน</h2>
            <h1 className="text-code display-1">กดฉันสิ!!</h1>
            <p className="content-touch-me lead text-muted text-center">
              หากคุณต้องการติดต่อผม ไม่ว่าจะเป็นเรื่องงาน หรือ
              เรื่องอะไรก็ตามผมได้ใส่ช่องทางในการติดต่อทั้งหมดที่ผมใช้งานประจำเอาไว้แล้วครับ
              ถ้าเป็นเรื่องช่วยติดต่อมาทางอีเมล หรือ ทางเบอร์โทรนะครับ
            </p>
            <p
              className="content-touch-me lead text-muted text-center"
              style={{ fontSize: "18px" }}
            >
              ปล. หลังจากช่วง 19.00 ผมขอไม่่รับโทรศัพท์นะครับ
            </p>
            <Row style={{ marginBottom: "45px" }}>
              <Col>
                <motion.div
                  initial={{
                    opacity: 0.7,
                  }}
                  whileHover={{
                    scale: 1.5,
                    color: "#E87B5A",
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 700,
                    },
                  }}
                >
                  <Tooltip
                    title="tickstudiu@gmail.com"
                    placement="bottom"
                    mouseEnterDelay="0.4"
                  >
                    <MailOutlined style={{ padding: "0 20px" }} />
                  </Tooltip>
                </motion.div>
              </Col>

              <Col>
                <motion.div
                  initial={{
                    opacity: 0.7,
                  }}
                  whileHover={{
                    scale: 1.5,
                    color: "#E87B5A",
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 700,
                    },
                  }}
                >
                  <Tooltip
                    title="082-437-7241"
                    placement="bottom"
                    mouseEnterDelay="0.4"
                  >
                    <PhoneOutlined style={{ padding: "0 20px" }} />
                  </Tooltip>
                </motion.div>
              </Col>

              <Col>
                <motion.div
                  initial={{
                    opacity: 0.7,
                  }}
                  whileHover={{
                    scale: 1.5,
                    color: "#E87B5A",
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 700,
                    },
                  }}
                >
                  <Tooltip
                    title={() => {
                      return (
                        <a href="https://www.facebook.com/sliple.ness">Go!!</a>
                      );
                    }}
                    placement="bottom"
                    mouseEnterDelay="0.4"
                  >
                    <FacebookOutlined style={{ padding: "0 20px" }} />
                  </Tooltip>
                </motion.div>
              </Col>
            </Row>
            <motion.div
              whileHover={{
                y: -5,
                rotateX: 20,
                boxShadow: "0px 10px 10px rgba( 232, 123, 90, 0.2 )",
                transition: {
                  type: "spring",
                  stiffness: 300,
                },
              }}
              whileTap={{
                scale: 0.9,
                boxShadow: "none",
              }}
            >
              <Button
                type="primary"
                style={{
                  padding: "0px 45px",
                }}
                size="large"
              >
                ติดต่อผม
              </Button>
            </motion.div>
          </motion.section>

          {/* Footer Logo */}
          <motion.div
            className="footer-logo"
            initial={{
              opacity: 0,
              y: 90,
            }}
            animate={{
              opacity: meetContact ? 1 : 0,
              y: meetContact ? 0 : 90,
              transition: {
                duration: 0.5,
                delay: 0.1,
              },
            }}
          >
            <motion.img
              src="/images/vue.png"
              alt="react"
              style={{
                width: "75px",
                height: "75px",
                position: "absolute",
                left: "150px",
                top: "-250px",
                zIndex: "1010",
              }}
              initial={{
                y: 0,
                opacity: 0.25,
              }}
              animate={{
                delay: 0.5,
                y: -300,
                rotate: [2, -3],
                transition: {
                  yoyo: Infinity,
                  duration: 2,
                  damping: 30,
                  ease: "easeInOut",
                },
              }}
              whileHover={{
                scale: 1.5,
                opacity: 1,
                transition: {
                  type: "spring",
                  stiffness: 500,
                },
              }}
            />

            <motion.img
              src="/images/react.png"
              alt="react"
              style={{
                width: "75px",
                height: "75px",
                position: "absolute",
                left: "650px",
                top: "-100px",
                zIndex: "1010",
              }}
              initial={{
                y: 0,
                opacity: 0.25,
              }}
              animate={{
                y: -100,
                rotate: [4, -6],
                transition: {
                  delay: 0.3,
                  yoyo: Infinity,
                  duration: 1.3,
                  damping: 30,
                  ease: "easeInOut",
                },
              }}
              whileHover={{
                scale: 1.5,
                opacity: 1,
                transition: {
                  type: "spring",
                  stiffness: 400,
                },
              }}
            />

            <motion.img
              src="/images/angular.png"
              alt="react"
              style={{
                width: "75px",
                height: "75px",
                position: "absolute",
                left: "1500px",
                top: "-275px",
                zIndex: "1010",
              }}
              initial={{
                y: 0,
                opacity: 0.25,
              }}
              animate={{
                y: -300,
                rotate: [2, -3],
                transition: {
                  yoyo: Infinity,
                  duration: 1.7,
                  damping: 30,
                  ease: "easeInOut",
                },
              }}
              whileHover={{
                scale: 1.5,
                opacity: 1,
                transition: {
                  type: "spring",
                  stiffness: 350,
                },
              }}
            />
          </motion.div>
        </Content>

        <Footer
          style={{
            textAlign: "center",
            background: "#F6F6F6",
            fontSize: "20px",
            color: "#D0D4D5",
          }}
        >
          สร้างและออกแบบโดย{" "}
          <span className="text-underline">วันเฉลิม สุขสวัสดิ์</span>
        </Footer>

        <style jsx global>
          {globalStyles}
        </style>
      </div>
    </div>
  );
};

Homepage.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Homepage);
