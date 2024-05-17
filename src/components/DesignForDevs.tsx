// src/components/DesignForDevs.tsx
import React from 'react';
import BenefitBox from './BenefitBox';

function DesignedForDevs() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="flex flex-col items-start w-full max-w-5xl">
        <div className="flex flex-col items-start w-full max-w-lg mt-8">
          <div className="text-6xl text-dark-blue">
            Designed for
          </div>
          <div className="flex items-center mt-4">
            <div className="text-6xl text-dark-blue">
              Developers
            </div>
            <div className="text-6xl text-dark-blue">
              ,
            </div>
          </div>
          <div className="text-6xl text-dark-blue mt-4">
            Tailored for Teams
          </div>
          <div className="text-lg font-light text-blueGray-500 mt-8">
            JACoB is built from the ground up to address the specific needs of software development.
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between w-full max-w-7xl mt-8">
        <BenefitBox
          title="Efficiency Boost"
          description="ACoB automates the repetitive and mundane, allowing you to concentrate on innovation and complex problem-solving."
        />
        <BenefitBox
          title="Quality Assurance"
          description="With JACoB's AI-driven reviews, your code stays clean and maintainable."
        />
        <BenefitBox
          title="Rapid Integration"
          description="JACoB fits into your workflow from day one, adapting to your tools and preferences."
        />
        <BenefitBox
          title="Scalable Development"
          description="Handle more projects and complex code without expanding your team."
        />
        <BenefitBox
          title="Learning & Growth"
          description="JACoB continuously learns from your codebase, contributing more effectively over time."
        />
        <BenefitBox
          title="Security & Control"
          description="Hosted within your environment, JACoB ensures your code remains secure and proprietary."
        />
      </div>
    </div>
  );
}

export default DesignedForDevs;