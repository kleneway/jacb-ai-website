import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

interface QuoteProps {
  imageUrl: string;
  rating: number;
  quote: string;
  name: string;
  website: string;
}

const Quote: React.FC<QuoteProps> = ({ imageUrl, rating, quote, name, website }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-6 max-w-md">
      <img src={imageUrl} alt={name} className="w-24 h-24 md:w-32 md:h-32 rounded-lg object-cover mr-6" />
      <div className="flex flex-col justify-between">
        <div className="flex items-center mb-2">
          {[...Array(rating)].map((_, i) => (
            <FontAwesomeIcon key={i} icon={faStar} className="text-blue-600" />
          ))}
        </div>
        <p className="text-lg text-gray-900 mb-4">{quote}</p>
        <div className="text-sm text-gray-900 font-semibold">{name}</div>
        <div className="text-sm text-gray-500">{website}</div>
      </div>
    </div>
  );
};

const Testimonial: React.FC = () => {
  const userCount = 3490;

  return (
    <div className="w-full bg-white flex flex-col items-center py-16">
      <div className="text-center mb-8">
        <p className="text-base text-blue-600">{userCount}+ Happy Landingfolio Users</p>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">Don’t just take our words</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <Quote
          imageUrl="/images/19f20f0750b4e198d5ba9d67a1acfa203715a7e4.png"
          rating={5}
          quote="We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."
          name="Jenny Wilson"
          website="Grower.io"
        />
        <Quote
          imageUrl="/images/8cdcee1f5525376b47bcf91a5f80c99d6819e17e.png"
          rating={5}
          quote="We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."
          name="Devon Lane"
          website="DLDesign.co"
        />
      </div>
    </div>
  );
};

export default Testimonial;