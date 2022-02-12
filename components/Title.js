import PropTypes from "prop-types";

const Title = (props) => (
  <h1
    className={
      " font-fancy font-bold md:text-5xl text-3xl text-center " +
      props.className
    }
  >
    {props.children}
  </h1>
);

export default Title;
