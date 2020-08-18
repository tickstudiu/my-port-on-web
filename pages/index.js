import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { i18n, withTranslation } from "../i18n";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { Layout, BackTop } from "antd";
import { motion } from "framer-motion";

import globalStyles from "../public/styles/global.js";

import useWindowSize from "../services/useWindowSize";

import HeaderComponent from "../components/header.component";
import TitleComponent from "../components/title.component";
import AboutComponent from "../components/about.component";
import EducationComponen from "../components/education.component";
import ContactComponent from "../components/contact.component";
import ProjectComponent from "../components/project.component";

import "../public/styles/antd.less";

const { Header, Footer, Content } = Layout;

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

  // Windown Size
  const wSize = useWindowSize();

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

      <HeaderComponent
        navState={navState}
        wSize={wSize}
        FadeInAnimation={FadeInAnimation}
        navkey={navkey}
        FadeDownAnimation={FadeDownAnimation}
        scrollToRef={scrollToRef}
        aboutRef={aboutRef}
        educationRef={educationRef}
        projectRef={projectRef}
        contactRef={contactRef}
      />

      <div className="container">
        <Content>
          {/* Title */}
          <TitleComponent wSize={wSize} FadeUpAnimation={FadeUpAnimation} />

          {/* About Me */}
          <AboutComponent aboutRef={aboutRef} meetAbout={meetAbout} />

          {/* Education */}
          <EducationComponen
            meetEducation={meetEducation}
            educationRef={educationRef}
            wSize={wSize}
          />

          {/* Project */}
          <ProjectComponent meetProject={meetProject} projectRef={projectRef} />

          {/* Contact */}
          <ContactComponent contactRef={contactRef} meetContact={meetContact} />

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
