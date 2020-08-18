import React, { useState } from "react";
import PropTypes from "prop-types";
import { i18n, withTranslation } from "../i18n";
import { Menu, Drawer, Layout } from "antd";
import { CaretLeftOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const { Header } = Layout;

const HeaderComponent = ({
  t,
  navState,
  wSize,
  FadeInAnimation,
  navkey,
  FadeDownAnimation,
  scrollToRef,
  aboutRef,
  educationRef,
  projectRef,
  contactRef,
}) => {
  // State for modal
  const [showDrawer, setShowDrawer] = useState(false);

  return (
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
                {t("WHO_AM_I")}
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
                {t("WHERE_I_LEARN")}
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
                {t("WHAT_I_DO")}
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
                {t("TOUCH_ME")}
              </motion.span>
            </Menu.Item>

            <Menu.Item key="5" style={{ fontSize: "20px" }}>
              <motion.span
                variants={FadeDownAnimation}
                initial="hidden"
                animate="show"
                transition={{
                  delay: 1,
                }}
                onClick={() =>
                  i18n.changeLanguage(i18n.language === "th" ? "en" : "th")
                }
              >
                {t("CHANGE_LOCAGE")}
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
              {t("WHO_AM_I")}
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
              {t("WHERE_I_LEARN")}
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
              {t("WHAT_I_DO")}
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
              {t("TOUCH_ME")}
            </motion.span>
          </Menu.Item>
          <Menu.Item key="5" style={{ fontSize: "20px" }}>
            <motion.span
              variants={FadeDownAnimation}
              initial="hidden"
              animate="show"
              transition={{
                delay: 1.2,
              }}
              onClick={() =>
                i18n.changeLanguage(i18n.language === "th" ? "en" : "th")
              }
            >
              {t("CHANGE_LOCAGE")}
            </motion.span>
          </Menu.Item>
        </Menu>
      </Header>
    </motion.div>
  );
};

HeaderComponent.getInitialProps = async () => ({
  namespacesRequired: ["header"],
});

HeaderComponent.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("header")(HeaderComponent);
