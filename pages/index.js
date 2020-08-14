import React, { useRef } from "react";
import { useIntersection } from "react-use";
import PropTypes from "prop-types";
import { i18n, withTranslation } from "../i18n";
import { Layout, Button } from "antd";
import styled from "styled-components";
import { motion } from "framer-motion";

import globalStyles from "../public/styles/global.js";

import "../public/styles/antd.less";

const { Footer, Content } = Layout;

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
    y: intersection && intersection.intersectionRatio < 0.20 ? 40 : 0,
    opacity: intersection && intersection.intersectionRatio < 0.20 ? 0 : 1,
  };

  return (
    <div className="container">
      <Content>
        <Button
          type="button"
          onClick={() =>
            i18n.changeLanguage(i18n.language === "th" ? "en" : "th")
          }
        >
          {t("change-locale")}
        </Button>
        <section>test1</section>
        <section>test2</section>
        <section>test3</section>
        <section className="touch-me" ref={sectionRef}>
          <motion.h2 animate={fadeInAndOut} transition={{ duration: 0.9 }} className="display-2">commodo consequat.</motion.h2>
          <motion.h1 animate={fadeInAndOut} transition={{ duration: 0.9 }} className="text-code display-1">Touch Me!!</motion.h1>
          <motion.p animate={fadeInAndOut} transition={{ duration: 0.9 }} className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </motion.p>
          <motion.ul animate={fadeInAndOut} transition={{ duration: 0.9 }} className="list">
            <li className="item">tickstudiu@gmail.com</li>
            <li className="item">0123-45678910</li>
            <li className="item">
              <a href="http://">wanchalerm suksawat</a>
            </li>
          </motion.ul>
          <Button type="primary" size="large">
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
