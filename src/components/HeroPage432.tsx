import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

const HeroPage432: React.FC = () => {
  const handleButtonClick = () => {
    console.log('Button clicked');
  };

  return (
    <div className="w-full h-screen bg-white flex justify-center items-center">
      <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto">
        <div className="flex flex-col md:w-1/2 p-4">
          <h1 className="text-5xl font-bold text-dark-blue tracking-tight mb-4">
            Meet the New Landingfolio Kit
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.
          </p>
          <button
            onClick={handleButtonClick}
            className="bg-indigo-600 text-white text-lg py-3 px-6 rounded-md"
          >
            Start using LandingFolio
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center items-center bg-blueGray-100 rounded-2xl p-4">
          <FontAwesomeIcon icon={faImage} size="6x" className="text-blueGray-400" />
        </div>
      </div>
    </div>
  );
};

export default HeroPage432;