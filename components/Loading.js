import Image from "next/image";
import Title from "./Title";

export default function Loading() {
  return (
    <div className=" w-screen h-screen grid  content-center bg-fjblue justify-center">
      <Title className="animate-pulse"> Loading...</Title>
    </div>
  );
}
