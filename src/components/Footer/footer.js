import React from "react";
import PropTypes from "prop-types";

const Footer = ({footerClass}) => (
    <div className={`defaultFooter ${footerClass}`}>
        <p>
            View site source on{" "}
            <a
                href="https://github.com/rashmiap/personal-website-react"
                target="_blank"
                rel="noopener noreferrer"
            >
                Github
            </a>{" "}
            | Copyright{" By Vitalii Adler"}
        </p>
    </div>
);
Footer.propTypes = {
    footerClass: PropTypes.string
};
export default Footer;
