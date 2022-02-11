import PropTypes from "prop-types";

const Button = (props) => (
  <button className="text-xl font-medium  bg-fjblue    p-3 rounded-lg   disabled:bg-gray-300 disabled:text-gray-200 disabled:cursor-not-allowed  text-center">
    {props.children}
  </button>
);

export default Button;
