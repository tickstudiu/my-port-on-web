import React from "react";
import PropTypes from "prop-types";
import { i18n, withTranslation } from "../i18n";
import { motion } from "framer-motion";

const FooterComponent = ({ t }) => {
  return (
    <motion.section>
        footer component
    </motion.section>
  );
};

FooterComponent.getInitialProps = async () => ({
  namespacesRequired: ["footer"],
});

FooterComponent.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("footer")(FooterComponent);
