import { Paper } from '@mui/material';
import React from 'react';

interface Feature {
  title: string;
  description: string;
}

interface DropDownProps {
  features: Feature[];
}

const DropDown: React.FC<DropDownProps> = ({ features }) => {
  return (
    <div className="grid grid-cols-12 gap-4 h-[40vh] z-[99999] bg-white  shadow-black/10 border  border-gray-200">
      <div className="col-span-2"></div>
      <div className="col-span-8 grid grid-cols-12 gap-x-4">
        {features.map((feature, index) => (
          <div key={index} className="col-span-4 rounded-lg p-14">
            <h3 className="text-2xl font-medium">{feature.title}</h3>
            <p className="text-gray-500 text-lg">{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="col-span-2"></div>
    </div>
  );
};

export default DropDown;
