import Image from "next/image";

export default function Loading() {
  return (
    <div className=" w-screen h-screen flex content-center justify-center">
      <div className="animate-spin w-min h-min ">
        <Image src="/filipxfrend.png" width={100} height={100} />
      </div>
    </div>
  );
}
