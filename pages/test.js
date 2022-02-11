import { useState } from "react";

export default function Test() {
  const [animate, setAnimate] = useState(false);
  return (
    <div className="w-screen h-screen flex content-center justify-center">
      <p className={animate ? " animate-xAxis  " : ""}>Hello</p>
      <button onClick={() => setAnimate(!animate)}>Animate</button>
    </div>
  );
}
