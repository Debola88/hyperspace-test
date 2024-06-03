"use client";
import { useState } from "react";
import Modal from "./components/Modal";
import { useRouter } from "next/navigation";

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const navigateToAbout = () => {
    router.push("/effect");
  };

  return (
    <div className="flex gap-4 items-center justify-center min-h-screen bg-gray-100">
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

      <Modal isOpen={isModalOpen} onClose={closeModal}>
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
  );
};

export default Home;
