import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-[716.83px]">
        <Image
          src="/Mask Group.jpg"
          alt="Mask Group"
          fill
          className="object-cover"
          priority
        />
      </div>
    </>
  );
}
