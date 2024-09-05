import React from "react";
import PropTypes from "prop-types";
import "./Navbarmobil.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

export const Navbarmobil = ({
  primary,
  backgroundColor,
  size,
  title,
  label,
  ...props
}) => {
  const mode = primary ? "primary" : "secondary";
  return (
    <nav
      className={`navbar item iconContainer flex flex-row gap-28 font-Poppins font-semibold  ${mode}`}
    >
      <p>{title}</p>
      <FontAwesomeIcon
        icon={faCalendarDays}
        className="text-center m-3 text-2xl text-white"
      />

      <div>{label || "LeipzigTreffen"}</div>
    </nav>
  );
};

Navbarmobil.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  size: PropTypes.string,
  label: PropTypes.string,
};

Navbarmobil.defaultProps = {
  size: "medium",
  label: "Add Event",
};

export default Navbarmobil;
