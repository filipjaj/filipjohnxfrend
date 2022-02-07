import PropTypes from "prop-types";

const Title = ({ text }) => (
  <h1 className=" font-fancy font-bold md:text-5xl text-3xl text-center ">
    {text}
  </h1>
);

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
