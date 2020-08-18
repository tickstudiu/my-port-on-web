import React from "react";
import PropTypes from "prop-types";
import { i18n, withTranslation } from "../i18n";
import { Row, Col, Tooltip } from "antd";
import { motion } from "framer-motion";

const AboutComponent = ({ t, aboutRef, meetAbout }) => {
  return (
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
              <h1 className="text-code display-3">{t("WHO_AM_I")}</h1>
              <p className="display-2 mb-1">{t("DESCRIPTION")}</p>
              <p className="display-2 text-sub mb-1">{t("DESCRIPTION_2")}</p>

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
  );
};

AboutComponent.getInitialProps = async () => ({
  namespacesRequired: ["about"],
});

AboutComponent.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("about")(AboutComponent);
