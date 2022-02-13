import Marquee from "react-fast-marquee";

export default function RollingText({ text }) {
  const duplicatedText = (text + " ").repeat(27);

  return (
    <div className="absolute grid content-center gap-3 justify-center w-full h-full top-0 left-0 z-0 overflow-hidden">
      <Marquee
        gradient={false}
        className="font-fancy font-bold text-5xl overflow-hidden"
      >
        <p>{duplicatedText}</p>
      </Marquee>

      <Marquee
        gradient={false}
        className="font-fancy font-bold text-5xl text-fjpink-200 h-fit overflow-hidden"
        speed={40}
      >
        <p>{duplicatedText}</p>
      </Marquee>

      <Marquee
        gradient={false}
        className="font-fancy font-bold text-5xl overflow-hidden h-fit"
      >
        <p>{duplicatedText}</p>
      </Marquee>
    </div>
  );
}
