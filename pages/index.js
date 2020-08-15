import React, { useRef } from "react";
import { useIntersection } from "react-use";
import PropTypes from "prop-types";
import { i18n, withTranslation } from "../i18n";
import { Layout, Button, Row, Col, Card, Divider, Tabs, Tooltip } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { motion } from "framer-motion";

import globalStyles from "../public/styles/global.js";

import "../public/styles/antd.less";

const { Footer, Content } = Layout;
const { TabPane } = Tabs;

const Project = styled(Card)`
  background: transparent;
`;

const Homepage = ({ t }) => {
  // Ref for our element
  const sectionRef = useRef(null);
  // All the ref to be observed
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  });

  // Animation Fade
  const fadeInAndOut = {
    y: intersection && intersection.intersectionRatio < 0.23 ? 40 : 0,
    opacity: intersection && intersection.intersectionRatio < 0.23 ? 0 : 1,
  };

  return (
    <div className="container">
      <Content>
        {/* <Button
          type="button"
          onClick={() =>
            i18n.changeLanguage(i18n.language === "th" ? "en" : "th")
          }
        >
          {t("change-locale")}
        </Button> */}

        <section>test</section>
        <section>
          <Row style={{ padding: "0 80px" }}>
            <Col span={12} className="text-center">
              <img
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim
                  </p>
                  <p className="display-2 text-sub mb-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>

                  <Row>
                    <Col span={8}>
                      <ul>
                        <li className="item">Reactjs</li>
                        <li className="item">VueJs</li>
                        <li className="item">Ionic</li>
                      </ul>
                    </Col>
                    <Col span={8}>
                      <ul>
                        <li className="item">Angular</li>
                        <li className="item">
                          <Tooltip
                            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                            placement="bottom"
                          >
                            NextJs
                          </Tooltip>
                        </li>
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
              <TabPane tab="Tab 1" key="1">
                <p className="display-2 mb-1">
                  2020 - 2020 <span className="or" /> Lorem ipsum dolor sit
                  amet, consectetur
                </p>
                <p className="display-2 text-sub mb-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="display-2 text-sub mb-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim
                </p>
              </TabPane>
              <TabPane tab="Tab 2" key="2">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="Tab 3" key="3">
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
                <h1 className="text-code display-1 text-center">What I do?</h1>
              </Col>
            </Row>
            <Row style={{ padding: "0 80px" }}>
              <Col lg={12}>
                <div style={{ padding: "10px" }}>
                  <Project bordered={false}>
                    <img
                      src="/images/img1.jpg"
                      alt="my image"
                      style={{
                        width: "100%",
                        height: "500px",
                        borderRadius: "8px",
                        marginBottom: "23px",
                        border: "6px solid #fff",
                        objectFit: "cover",
                      }}
                    />
                    <p className="display-2 mb-1">commodo consequat.</p>
                    <p className="display-2 text-sub mb-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim
                    </p>
                    <Row>
                      <Col span={8}>
                        <ul>
                          <li className="item">ReactJs</li>
                        </ul>
                      </Col>
                      <Col span={8}>
                        <ul>
                          <li className="item">Angular</li>
                        </ul>
                      </Col>
                    </Row>
                    <Divider style={{ background: "#D0D4D5" }} />
                  </Project>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        <section className="touch-me">
          <h2 className="display-2 text-primary">commodo consequat.</h2>
          <h1 className="text-code display-1">Touch Me!!</h1>
          <p className="content-touch-me lead text-muted text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
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
                      <a href="https://www.facebook.com/sliple.ness">
                        Wanchalerm Suksawat
                      </a>
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
          <motion.div whileHover={{
            y: -5,
            rotateX: 20,
            boxShadow: "0px 10px 10px rgba( 232, 123, 90, 0.2 )"
          }} whileTap={{
            scale: 0.9,
            boxShadow: "none"
          }}>
          <Button
            type="primary"
            style={{
              padding: "0px 45px"
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
        Lorem ipsum dolor sit amet, consectetur
      </Footer>
      <style jsx global>
        {globalStyles}
      </style>
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
