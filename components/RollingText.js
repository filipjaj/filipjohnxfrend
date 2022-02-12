import Marquee from "react-fast-marquee";

export default function RollingText({ text }) {
  const duplicatedText = (text + " ").repeat(27);

  return (
    <div className="absolute flex flex-col content-center justify-center w-full h-full top-0 left-0 z-0">
      <div>
        <Marquee gradient={false} className="font-fancy font-bold text-5xl ">
          <p>{duplicatedText}</p>
        </Marquee>
      </div>
      <div>
        <Marquee
          gradient={false}
          className="font-fancy font-bold text-5xl text-fjpink-200"
          speed={40}
        >
          <p>{duplicatedText}</p>
        </Marquee>
      </div>
      <div>
        <Marquee gradient={false} className="font-fancy font-bold text-5xl ">
          <p>{duplicatedText}</p>
        </Marquee>
      </div>
    </div>
  );
}
