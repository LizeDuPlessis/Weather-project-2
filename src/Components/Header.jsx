import React from "react";
import PropTypes from "prop-types";

function Header({ title }) {
  return (
    <div>
      <header>{title}</header>
    </div>
  );
}

export default Header;

Header.defaultProps = {
  title: "Weather Info",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
