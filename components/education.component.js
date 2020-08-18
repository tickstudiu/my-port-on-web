import React from "react";
import PropTypes from "prop-types";
import { i18n, withTranslation } from "../i18n";
import { motion } from "framer-motion";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const EducationComponen = ({ t, meetEducation, educationRef, wSize }) => {
  return (
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
          {t("WHERE_I_LEARN")}
        </h1>
        <Tabs
          defaultActiveKey="1"
          tabPosition={wSize.width < 990 ? "top" : "left"}
          className="tab-container"
        >
          <TabPane tab="2009" key="1">
            <p className="display-2 mb-1 tab-header">
            {t("MIDDLE_SCHOOL")}{" "}
              <a className="link" href="http://www.yorwor2.ac.th/">
                @{t("HATYAIWITTAYALAI_2")}
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
                  {t("HATYAIWITTAYALAI_2_DESCRIPTION")}
                </p>
              </li>
              <li>
                <p
                  className="display-2 text-sub mb-1"
                  style={{
                    fontSize: "18px",
                  }}
                >
                  {t("HATYAIWITTAYALAI_2_DESCRIPTION_2")}
                </p>
              </li>
              <li>
                <p
                  className="display-2 text-sub mb-1"
                  style={{
                    fontSize: "18px",
                  }}
                >
                  {t("HATYAIWITTAYALAI_2_DESCRIPTION_3")}
                </p>
              </li>
            </ul>
          </TabPane>
          <TabPane tab="2012" key="2">
            <p className="display-2 mb-1 tab-header">
            {t("HIGH_SCHOOL")}{" "}
              <a className="link" href="http://www.hatyaiwit.ac.th/frontpage">
                @{t("HATYAIWITTAYALAI")}
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
                  {t("HATYAIWITTAYALAI_DESCRIPTION")}
                </p>
              </li>
              <li>
                <p
                  className="display-2 text-sub mb-1"
                  style={{
                    fontSize: "18px",
                  }}
                >
                  {t("HATYAIWITTAYALAI_DESCRIPTION_2")}
                </p>
              </li>
            </ul>
          </TabPane>
          <TabPane tab="2015" key="3">
            <p className="display-2 mb-1 tab-header">
            {t("UNIVERSITY")}{" "}
              <a className="link" href="https://www.psu.ac.th/th/">
                @{t("PSU")}
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
                  {t("PSU_DESCRIPTION")}
                </p>
              </li>
              <li>
                <p
                  className="display-2 text-sub mb-1"
                  style={{
                    fontSize: "18px",
                  }}
                >
                  {t("PSU_DESCRIPTION_2")}
                </p>
              </li>
            </ul>
          </TabPane>
        </Tabs>
      </div>
    </motion.section>
  );
};

EducationComponen.getInitialProps = async () => ({
  namespacesRequired: ["education"],
});

EducationComponen.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("education")(EducationComponen);
