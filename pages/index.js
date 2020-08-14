import PropTypes from "prop-types";
import { i18n, withTranslation } from "../i18n";
import { Button } from "antd";

import '../public/styles/antd.less'

const Homepage = ({ t }) => (
  <Button
    type="button"
    onClick={() => i18n.changeLanguage(i18n.language === "en" ? "th" : "en")}
  >
    {t("change-locale")}
  </Button>
);

Homepage.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Homepage);
