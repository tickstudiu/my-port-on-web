import React from "react";
import PropTypes from "prop-types";
import { i18n, withTranslation } from "../i18n";
import {
  Button,
  Row,
  Col,
} from "antd";
import { motion } from "framer-motion";

const TitleComponent = ({ t, wSize, FadeUpAnimation }) => {
  return (
    <section
      style={{
        justifyContent: wSize && wSize.width < 576 ? "flex-end" : "center",
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
            {t("HI_MY_NAME_IS")}
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
            {t("WANCHALERM_SUKSAWAT")}
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
            {t("AND_I_LOVE_CODING")}
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
            {t("INTRODUCTION")}
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
              {t("TOUCH_ME")}
            </Button>
          </motion.div>
        </Col>
        <Col span={8}></Col>
      </Row>
    </section>
  );
};

TitleComponent.getInitialProps = async () => ({
  namespacesRequired: ["title"],
});

TitleComponent.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("title")(TitleComponent);
