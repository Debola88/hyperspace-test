'use client';
import { useRouter } from 'next/navigation';
import lottie from 'lottie-web';
import animationData from '../assets/phone-animation.json'
import Lottie, {LottieRefCurrentProps} from "lottie-react";
import { useRef } from 'react';

const Animation: React.FC = () => {
  const router = useRouter();

  const navigateToHome = () => {
    router.push('/');
  };
  const phoneRef = useRef<LottieRefCurrentProps>(null)


  return (
    <div className="flex px-5 flex-col overflow-hidden items-center min-h-screen justify-center bg-black">
      <h1 className="text-2xl font-bold mb-4 text-white">Animation Page</h1>
      <button
        onClick={navigateToHome}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Go Back to Home Page
      </button>
      <div className='max-w-[500px] h-[400px]'>
        <Lottie onComplete={() => {
        phoneRef.current?.setDirection(-1)
        phoneRef.current?.play()
        }} lottieRef={phoneRef} loop={true} animationData={animationData}/>
      </div>
    </div>
  );
};

export default Animation;
