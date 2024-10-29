import Image from "next/image";
import intro from '../../public/images/intro.jpeg'
export const metadata =  {
title: "The Khan's Academy" 
}

export default function Home() {
  return (
    <div className="bg-yellow-300 p-20">
        <h4 className="text-black text-center border-spacing-x-1 text-2xl"> Home page </h4>
        <div className="m-4 py-4 px-60">
        <Image src={intro.src} alt="combine study picture" width={800} height={400} /> 
        </div>
    </div>
  );
}