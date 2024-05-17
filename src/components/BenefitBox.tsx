// src/components/BenefitBox.tsx
import React from 'react';

interface BenefitBoxProps {
  title: string;
  description: string;
}

const BenefitBox: React.FC<BenefitBoxProps> = ({ title, description }) => {
  return (
    <div className="w-full max-w-sm p-4 m-4 bg-white rounded-lg shadow-md">
      <div className="text-xl font-semibold text-dark-blue">{title}</div>
      <div className="mt-2 text-blueGray-500">{description}</div>
    </div>
  );
};

export default BenefitBox;