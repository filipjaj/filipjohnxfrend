export default function H3(props) {
  return (
    <h3
      className={"text-3xl text-black font-fancy" + " " + props.className}
      onClick={props.onClick}
    >
      {props.children}
    </h3>
  );
}
