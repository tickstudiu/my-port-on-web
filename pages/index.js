import React, { useRef, useState } from "react";
import { useIntersection } from "react-use";
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
} from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { motion } from "framer-motion";

import globalStyles from "../public/styles/global.js";

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
  const sectionRef = useRef(null);

  // State for navigation bar
  const [navPos, setNavPos] = useState("top");

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y == 0) {
      console.log(sectionRef.current.offsetTop);

      // Set State when top
      setNavPos("top");
    } else if (prevPos.y < currPos.y && currPos.y != 0) {
      // Set State when up
      setNavPos("up");
    } else {
      // Set State when dpwn
      setNavPos("down");
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
      <motion.div
        animate={{
          y: navPos && navPos == "top" ? 0 : "-50px",
          transition: {
            type: "spring",
            stiffness: 700,
          },
        }}
      >
        <Header
          style={{
            background: "#f6f6f6",
            display: "flex",
            justifyContent: "space-between",
            position: "fixed",
            top: "0px",
            width: "100%",
            padding: "0 120px",
            zIndex: 10,
            boxShadow: "0 3px 6px rgba(0, 0, 0, 0.2)",
          }}
        >
          <motion.h1
            style={{ fontSize: "20px", fontWeight: "bold" }}
            variants={FadeInAnimation}
            initial="hidden"
            animate="show"
          >
            WANCHALERM SUKSWAT
          </motion.h1>
          <Menu
            mode="horizontal"
            style={{ background: "transparent", border: "none" }}
          >
            <Menu.Item key="1" style={{ fontSize: "20px" }}>
              <motion.span variants={FadeDownAnimation} initial="hidden" animate="show" transition={{
                delay: 0,
              }}>Who am I?</motion.span>
            </Menu.Item>
            <Menu.Item key="2" style={{ fontSize: "20px" }}>
            <motion.span variants={FadeDownAnimation} initial="hidden" animate="show" transition={{
                delay: 0.4,
              }}>Where I learn?</motion.span>
              
            </Menu.Item>
            <Menu.Item key="3" style={{ fontSize: "20px" }}>
            <motion.span variants={FadeDownAnimation} initial="hidden" animate="show" transition={{
                delay: 0.8,
              }}>What i do?</motion.span>
              
            </Menu.Item>
            <Menu.Item key="4" style={{ fontSize: "20px" }}>
            <motion.span variants={FadeDownAnimation} initial="hidden" animate="show" transition={{
                delay: 1,
              }}>Touch Me!!</motion.span>
              
            </Menu.Item>
          </Menu>
        </Header>
      </motion.div>

      <div className="container">
        <Content>
          <section>
            <Row style={{ padding: "0 80px" }}>
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
                  Hi, my name is
                </motion.h3>
                <motion.h1
                  style={{
                    fontSize: 80,
                    fontWeight: "bold",
                    marginBottom: "-20px",
                    marginTop: "-20px",
                  }}
                  variants={FadeUpAnimation}
                  initial="hidden"
                  animate="show"
                  transition={{
                    delay: 0.4,
                  }}
                >
                  Wanchalerm Suksawat
                </motion.h1>
                <motion.h1
                  style={{
                    fontSize: 70,
                    fontWeight: "bold",
                    marginBottom: "114px",
                    color: "#8A898E",
                  }}
                  variants={FadeUpAnimation}
                  initial="hidden"
                  animate="show"
                  transition={{
                    delay: 0.8,
                  }}
                >
                  And in love with coding
                </motion.h1>
                <motion.p
                  className="lead text-muted"
                  variants={FadeUpAnimation}
                  initial="hidden"
                  animate="show"
                  transition={{
                    delay: 1,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </motion.p>
                <motion.div
                  style={{
                    width: "234px",
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
                    Get In Touch
                  </Button>
                </motion.div>
              </Col>
              <Col span={8}></Col>
            </Row>
          </section>
          <section ref={sectionRef}>
            <Row style={{ padding: "0 80px" }}>
              <Col span={12} className="text-center">
                <motion.img
                  src="/images/img1.jpg"
                  alt="my image"
                  style={{
                    width: "475px",
                    height: "475px",
                    borderRadius: "50%",
                    marginBottom: "23px",
                    border: "10px solid #fff",
                    objectFit: "cover",
                  }}
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
              <Col span={12}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <article>
                    <h1 className="text-code display-3">Who am I?</h1>
                    <p className="display-2 mb-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim
                    </p>
                    <p className="display-2 text-sub mb-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor
                      <span className="link">
                        {" "}
                        incididunt ut labore et dolore magna{" "}
                      </span>
                      aliqua. Ut enim ad
                      <span className="link"> minim veniam </span>, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.
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
          </section>

          <section>
            <div>
              <h1 className="text-code display-3">Where I learn?</h1>
              <Tabs
                defaultActiveKey="1"
                tabPosition="left"
                style={{ width: "829px" }}
              >
                <TabPane tab="2015" key="1">
                  <p className="display-2 mb-1">
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
                        วิศวกรรมคอมพิวเตอร์ ระหว่างได้ศึกษาได้มีโอกาสเป็น TA
                        ช่วยสอนพี่ ๆ น้อง ๆ และ ได้แข่งขัน NSC 2019
                        ในระดับภาคใค้ และยังมีโอกาศในการเข้าอบรมที่ กทม ด้าน
                        desgin เพื่อกลับให้กับพี่ ๆ น้อง ๆ
                        ทีมีความสนใจด้านนี้เหมือนกัน
                      </p>
                    </li>
                    <li>
                      <p
                        className="display-2 text-sub mb-1"
                        style={{
                          fontSize: "18px",
                        }}
                      >
                        หลังจากที่จบการศึกษาจากหาดใหญ่วิทยาลัย
                        ได้รับโคต้าเข้ามหาวิทยาลัยสงขลานครินทร์
                        วิศวกรรมคอมพิวเตอร์ ระหว่างได้ศึกษาได้มีโอกาสเป็น TA
                      </p>
                    </li>
                  </ul>
                </TabPane>
                <TabPane tab="2012" key="2">
                  Content of Tab Pane 2
                </TabPane>
                <TabPane tab="2009" key="3">
                  Content of Tab Pane 3
                </TabPane>
              </Tabs>
            </div>
          </section>

          <section>
            <div>
              <Row>
                <Col span={24}>
                  <h2 className="display-2 text-primary text-center">
                    commodo consequat.
                  </h2>
                  <h1 className="text-code display-1 text-center">
                    What I do?
                  </h1>
                </Col>
              </Row>
              <Row style={{ padding: "0 80px" }}>
                <Col lg={6}>
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

                <Col lg={6}>
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
          </section>

          <section className="touch-me">
            <h2 className="display-2 text-primary">commodo consequat.</h2>
            <h1 className="text-code display-1">Touch Me!!</h1>
            <p className="content-touch-me lead text-muted text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
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
                Get In Touch
              </Button>
            </motion.div>
          </section>

          <div style={{ position: "relative" }}>
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
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            background: "#F6F6F6",
            fontSize: "20px",
            color: "#D0D4D5",
          }}
        >
          Build and design by{" "}
          <span className="text-underline">Wanchalerm Suksawat</span>
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
