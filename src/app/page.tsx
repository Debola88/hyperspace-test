"use client";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import { useRouter } from "next/navigation";
import AOS from 'aos';
import 'aos/dist/aos.css'

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const navigateToAbout = () => {
    router.push("/effect");
  };

  useEffect(() => {
    AOS.init()
  }, [])


  return (
    <div className="flex max-md:flex-col gap-4 px-5 items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold font-serif">Welcome</h1>
      <button
        onClick={openModal}
        className="px-4 py-2 transition-all duration-500 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Open Modal
      </button>

      <button
        onClick={navigateToAbout}
        className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
      >
        Effect page
      </button>
      <div className="transition-all duration-1000">
        <Modal isOpen={isModalOpen} onClose={closeModal} >
        <h2 className="text-xl font-bold">Greetings</h2>
        <p className="mt-2">Hi, my name is Adebola</p>
        <button
          onClick={closeModal}
          className="mt-4 px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
        >
          Close Modal
        </button>
      </Modal>
      </div>
      
    </div>
  );
};

export default Home;
