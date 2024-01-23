import Button from "@/components/Button";
import Image from "next/image";

const Home = () => {
  return (
    <main className="w-80 gap-6 p-6 flex flex-col items-center bg-darkGrey rounded-xl lg:w-96 lg:p-8">
      <Image
        className="rounded-full"
        src="/assets/avatar-jessica.jpeg"
        alt=""
        width={80}
        height={80}
      />
      <div className="flex flex-col items-center gap-2">
        <h1 className="font-bold text-2xl text-white">Jessica Randall</h1>
        <h2 className="font-semibold text-green text-sm">
          London, United Kingdom
        </h2>
      </div>
      <h3 className="text-sm text-white">
        &#34;Front-end developer and avid reader.&#34;
      </h3>
      <div className="flex flex-col gap-4 w-full">
        <Button>GitHub</Button>
        <Button>Frontend Mentor</Button>
        <Button>LinkedIn</Button>
        <Button>Twitter</Button>
        <Button>Instagram</Button>
      </div>
    </main>
  );
};

export default Home;
