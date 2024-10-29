import Image from "next/image";
import smartstudy from "../../../public/images/smartstudy.jpeg";
export const metadata =  {
    title: "Introduction" 
    }
    
    export default function Introduction () {
      return (
        <div className="bg-yellow-300 p-10">
            <div>
            <h4 className="text-black text-center border-spacing-x-1 text-2xl"> Introduction</h4>
            </div>
            <div className="place-items-center m-4">
            <Image src={smartstudy.src} alt="Smart Study Picture" width={200} height={200}/> 
            </div>
            <div>
            <p className="flex text-balance text-justify text-black mt-0 ml-20 mr-20 mb-2 "> 
            Welcome to Khan Academy, a vibrant learning center designed to help students of all ages unlock their creativity and grow mentally.
            Khan Academy is a dynamic educational institution dedicated to cultivating creativity. That focuses on helping students think creatively and grow mentally. Here, students of all ages can learn in new, exciting ways that go beyond regular classroom lessons. Our goal is to inspire a love for learning, teach problem-solving skills, and help every student reach their best potential. Khan Academy is dedicated to building a strong foundation for success in school and in life. 
            At Khan Academy, we understand that every student learns differently. That’s why we provide personalized support and resources tailored to each learner's needs. Our experienced educators are dedicated to guiding students on their learning journeys, helping them build confidence and independence. Join us at Khan Academy, where creativity meets mental growth, and let’s embark on this exciting journey of learning together!
            </p>
            </div>
        </div>
        
      );
    }