import React from "react";
import PropTypes from "prop-types";
import { i18n, withTranslation } from "../i18n";
import { motion } from "framer-motion";
import { Row, Col, Card, Divider } from "antd";

const ProjectComponent = ({ t, meetProject, projectRef }) => {
  // Project container
  const projectData = [
    {
      image: "/images/project1.png",
      title: "Mockup Mobile App",
      description:
        "เป็นตัวอย่างโปรแกรมที่ได้ทำมนข่วงของการฝึกงานภาคฤดูร้อนก่อนได้จะจบจากมหาวิทยาลัย",
      description_en:
        "This is an example of a program that takes place in a summer internship before graduating from university.",
      link:
        "https://github.com/tickstudiu/design-soft-events-mobile-application?fbclid=IwAR22jwrgd_tdmTbRYpFjqqYuQ9rZuINgFb-z6yqvsdXK2MmLAK_xdaloOQo",
      author: [
        {
          name: "วันเฉลิม",
          name_en: "Wanchalerm",
          link: "https://github.com/tickstudiu/",
        },
      ],
      tag: [
        {
          name: "Adobe XD",
          link: "https://www.adobe.com/sea/products/xd.html",
        },
      ],
    },

    {
      image: "/images/project2.png",
      title: "Mockup Mobile Appv2",
      description:
        "หลังจากจบการฝึกงานจึงอยากที่จะทำหน้าแอปให้เลยได้คิดที่จะออกแบบหน้าอีกครั้ง",
      description_en:
        "After finishing the internship, I wanted to create an app page so I thought of designing the page again.",
      link:
        "https://xd.adobe.com/view/9a522809-00a7-4047-8c2d-72e28d542c4a-cf01/",
      author: [
        {
          name: "วันเฉลิม",
          name_en: "Wanchalerm",
          link: "https://github.com/tickstudiu/",
        },
      ],
      tag: [
        {
          name: "Adobe XD",
          link: "https://www.adobe.com/sea/products/xd.html",
        },
      ],
    },

    {
      image: "/images/project3.png",
      title: "1ST-G",
      description:
        "เป็นเกมแรกทีผมเสร็จและใช้เวลาเร็วที่สุดในการทำและศึกษาไปด้วย โดยใช้เวลไป 172 ชม",
      description_en:
        "It was the first game that I finished and the fastest time to do it and study it in 172 hours.",
      link: "https://tickstudiu.itch.io/1st-g",
      author: [
        {
          name: "วันเฉลิม",
          name_en: "Wanchalerm",
          link: "https://github.com/tickstudiu/",
        },
      ],
      tag: [
        {
          name: "Unity",
          link:
            "https://store.unity.com/products/unity-pro?gclid=CjwKCAjw1ej5BRBhEiwAfHyh1OUv_L0f0NceTORRk4lHQaVzK2JyeVrd-abhgJEPS7b85s8KTnC5rBoCmMkQAvD_BwE",
        },
      ],
    },

    {
      image: "/images/project4.png",
      title: "Student Volunteer",
      description:
        "เป็นโปรเจคที่ได้ทำกับเพื่อนอีก 1 คน โดยผมทำหน้าที่ส่วนของหน้าบ้านทั้งหมดเลยครับ",
      description_en:
        "It is a project that I have done with another friend, which I am doing the whole part of the front of the house.",
      link:
        "https://drive.google.com/drive/folders/114K2Kx_synxkD86U1NgMQii3tdz86LKs?usp=sharing",
      author: [
        {
          name: "วันเฉลิม",
          name_en: "Wanchalerm",
          link: "https://github.com/tickstudiu/",
        },
        {
          name: "กิตตินันท์",
          name_en: "Kittinan",
          link: "https://github.com/ggbandit",
        },
      ],
      tag: [
        {
          name: "ReactJs",
          link: "https://reactjs.org/",
        },
        {
          name: "Nodejs",
          link: "https://nodejs.org/en/",
        },
      ],
    },

    {
      image: "/images/project5.jpg",
      title: "Soft Event Application",
      description:
        "ได้เป็นหัวหน้าทีมและมีเพื่อนอีก 4 คน ที่ทำด้วยกัน โดยผมทำหน้าที่ส่วนใหญ่ของ App",
      description_en:
        "Become a team leader and have four friends who do it together, by doing most of the functions of the App.",
      link:
        "https://drive.google.com/file/d/14XowXxJyU7EIYcGpo-MH946Z3Tr90upe/view?usp=sharing",
      author: [
        {
          name: "วันเฉลิม",
          name_en: "Wanchalerm",
          link: "https://github.com/tickstudiu/",
        },
      ],
      tag: [
        {
          name: "AngularJs",
          link: "https://angularjs.org/",
        },
        {
          name: "Ionic",
          link: "https://ionicframework.com/",
        },
      ],
    },
  ];

  return (
    <motion.section
      ref={projectRef}
      initial={{
        opacity: 0,
        y: 90,
      }}
      animate={{
        opacity: meetProject ? 1 : 0,
        y: meetProject ? 0 : 90,
        transition: {
          duration: 0.5,
          delay: 0.1,
        },
      }}
    >
      <div>
        <Row>
          <Col span={24}>
            <h2 className="display-2 text-primary text-center">
              {t("PROJECT")}
            </h2>
            <h1 className="text-code display-1 text-center">
              {t("WHAT_I_DO")}
            </h1>
          </Col>
        </Row>
        <Row className="project-container">
          {projectData.map((data, index) => {
            return (
              <Col lg={6} sm={24} key={index}>
                <a href={data.link}>
                  <motion.div className="post-container">
                    <Card bordered={false} className="post">
                      <img src={data.image} alt="my image" />

                      <div className="post-content">
                        <h1 className="display-2">{data.title}</h1>
                        <p className="display-2 text-sub mb-1">
                          {i18n.language == "th"
                            ? data.description
                            : data.description_en}
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
                                <h1 className="display-2">{t("AUTHOR")}</h1>
                              </li>
                              {data.author.map((author) => {
                                return (
                                  <li
                                    className="item"
                                    style={{
                                      fontSize: "18px",
                                    }}
                                  >
                                    <a href={author.link} className="link">
                                      {i18n.language == "th"
                                        ? author.name
                                        : author.name_en}
                                    </a>
                                  </li>
                                );
                              })}
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
                                <h1 className="display-2">{t("MAKE_WITH")}</h1>
                              </li>
                              {data.tag.map((tag) => {
                                return (
                                  <li
                                    className="item"
                                    style={{
                                      fontSize: "18px",
                                    }}
                                  >
                                    <a href={tag.link} className="link">
                                      {tag.name}
                                    </a>
                                  </li>
                                );
                              })}
                            </ul>
                          </Col>
                        </Row>
                      </div>
                    </Card>
                  </motion.div>
                </a>
              </Col>
            );
          })}

          <Col lg={6} sm={24}>
            <motion.div className="post-container">
              <Card bordered={false} className="post">
                <img src="/images/creator.png" alt="my image" />

                <div id="creator">
                  <h1 className="display-2">My Portfolio Web Page</h1>
                  <p className="display-2 text-sub mb-1">{t("DESCRIPTION")}</p>
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
                          <h1 className="display-2">{t("AUTHOR")}</h1>
                        </li>
                        <li
                          className="item"
                          style={{
                            fontSize: "18px",
                          }}
                        >
                          <a
                            href="https://github.com/tickstudiu/"
                            className="link"
                          >
                            {t("WANCHALERM_SUKSAWAT")}
                          </a>
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
                          <h1 className="display-2">{t("MAKE_WITH")}</h1>
                        </li>
                        <li
                          className="item"
                          style={{
                            fontSize: "18px",
                          }}
                        >
                          <a
                            href="https://github.com/tickstudiu/"
                            className="link"
                          >
                            NextJs
                          </a>
                        </li>
                        <li
                          className="item"
                          style={{
                            fontSize: "18px",
                          }}
                        >
                          <a
                            href="https://github.com/tickstudiu/"
                            className="link"
                          >
                            Antd
                          </a>
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
    </motion.section>
  );
};

ProjectComponent.getInitialProps = async () => ({
  namespacesRequired: ["project"],
});

ProjectComponent.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("project")(ProjectComponent);
