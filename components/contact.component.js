import React from "react";
import PropTypes from "prop-types";
import { i18n, withTranslation } from "../i18n";
import { motion } from "framer-motion";
import {
  Button,
  Row,
  Col,
  Tooltip,
} from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  FacebookOutlined
} from "@ant-design/icons";

const ContactComponent = ({ t, contactRef, meetContact }) => {
  return (
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
            <h2 className="display-2 text-primary">{t("CONTACT_ME")}</h2>
            <h1 className="text-code display-1">{t("TOUCH_ME")}</h1>
            <p className="content-touch-me lead text-muted text-center">
            {t("DESCRIPTION")}
            </p>
            <p
              className="content-touch-me lead text-muted text-center"
              style={{ fontSize: "18px" }}
            >
              {t("PS")}
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
                {t("GET_IN_TOUCH")}
              </Button>
            </motion.div>
          </motion.section>
  );
};

ContactComponent.getInitialProps = async () => ({
  namespacesRequired: ["contact"],
});

ContactComponent.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("contact")(ContactComponent);
