import React from "react";
import { useTranslation } from "react-i18next";

function AboutPage() {
    const { t } = useTranslation("about");
    return <div>{t("Остранице")}</div>;
}

export default AboutPage;
