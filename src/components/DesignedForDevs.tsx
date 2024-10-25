import React from 'react';

const DesignedForDevs = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center bg-white">
      <div className="w-full h-[534px] flex">
        <div className="w-2/5 p-8">
          <div className="flex flex-col">
            <div className="text-[60px] text-dark-blue">Designed for</div>
            <div className="flex items-center">
              <div className="text-[60px] text-dark-blue text-center">Developers</div>
              <div className="text-[60px] text-dark-blue text-center">,</div>
            </div>
            <div className="text-[60px] text-dark-blue">Tailored for Teams</div>
          </div>
          <div className="mt-4 text-[18px] font-light text-[#61668b]">
            JACoB is built from the ground up to address the specific needs of software development.
          </div>
        </div>
        <div className="w-3/5 flex flex-col space-y-4">
          <div className="flex space-x-4">
            <div className="w-1/2 p-4 bg-[rgba(248,232,224,0.4)] border border-solid border-[#e9dad7] rounded-[16px]">
              <div className="text-[21px] font-medium text-dark-blue">Efficiency Boost</div>
              <div className="mt-2 text-[14px] font-light text-[#61668b]">
                ACoB automates the repetitive and mundane, allowing you to concentrate on innovation and complex problem-solving.
              </div>
            </div>
            <div className="w-1/2 p-4 bg-[rgba(248,232,224,0.4)] border border-solid border-[#e9dad7] rounded-[16px]">
              <div className="text-[21px] font-medium text-dark-blue">Quality Assurance</div>
              <div className="mt-2 text-[14px] font-light text-[#61668b]">
                With JACoB's AI-driven reviews, your code stays clean and maintainable.
              </div>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2 p-4 bg-[rgba(248,232,224,0.4)] border border-solid border-[#e9dad7] rounded-[16px]">
              <div className="text-[21px] font-medium text-dark-blue">Rapid Integration</div>
              <div className="mt-2 text-[14px] font-light text-[#61668b]">
                JACoB fits into your workflow from day one, adapting to your tools and preferences.
              </div>
            </div>
            <div className="w-1/2 p-4 bg-[rgba(248,232,224,0.4)] border border-solid border-[#e9dad7] rounded-[16px]">
              <div className="text-[21px] font-medium text-dark-blue">Scalable Development</div>
              <div className="mt-2 text-[14px] font-light text-[#61668b]">
                Handle more projects and complex code without expanding your team.
              </div>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2 p-4 bg-[rgba(248,232,224,0.4)] border border-solid border-[#e9dad7] rounded-[16px]">
              <div className="text-[21px] font-medium text-dark-blue">Learning & Growth</div>
              <div className="mt-2 text-[14px] font-light text-[#61668b]">
                JACoB continuously learns from your codebase, contributing more effectively over time.
              </div>
            </div>
            <div className="w-1/2 p-4 bg-[rgba(248,232,224,0.4)] border border-solid border-[#e9dad7] rounded-[16px]">
              <div className="text-[21px] font-medium text-dark-blue">Security & Control</div>
              <div className="mt-2 text-[14px] font-light text-[#61668b]">
                Hosted within your environment, JACoB ensures your code remains secure and proprietary.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignedForDevs;