import React, { useRef } from "react";
import { useIntersection } from "react-use";
import PropTypes from "prop-types";
import { i18n, withTranslation } from "../i18n";
import { Layout, Button, Row, Col, Card, Divider, Tabs } from "antd";
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
                  <p className="display-2 text-sub mb-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p className="display-2 text-sub mb-1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim
                  </p>

                  <Row>
                    <Col>
                      <ul>
                        <li className="item">ReactJs</li>
                        <li className="item">VueJs</li>
                        <li className="item">Ionic</li>
                      </ul>
                    </Col>
                    <Col>
                      <ul>
                        <li className="item">Angular</li>
                        <li className="item">NextJs</li>
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
                    <ul>
                      <li className="item">ReactJs</li>
                      <li className="item">Antd</li>
                    </ul>
                    <Divider style={{ background: "#D0D4D5" }} />
                  </Project>
                </div>
              </Col>

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
                    <ul>
                      <li className="item">ReactJs</li>
                      <li className="item">Antd</li>
                    </ul>
                    <Divider style={{ background: "#D0D4D5" }} />
                  </Project>
                </div>
              </Col>

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
                    <ul>
                      <li className="item">ReactJs</li>
                      <li className="item">Antd</li>
                    </ul>
                    <Divider style={{ background: "#D0D4D5" }} />
                  </Project>
                </div>
              </Col>

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
                    <ul>
                      <li className="item">ReactJs</li>
                      <li className="item">Antd</li>
                    </ul>
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
          <ul className="list">
            <li className="item to-left">tickstudiu@gmail.com</li>
            <li className="item to-left">0123-45678910</li>
            <li className="item to-left">
              <a href="http://">wanchalerm suksawat</a>
            </li>
          </ul>
          <Button
            size="large"
            style={{ padding: "0px 45px", background: "transparent" }}
          >
            Get In Touch
          </Button>
        </section>
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
