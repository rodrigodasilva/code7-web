import React from 'react';

interface IFoodPlate {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
  available: boolean;
}

const Dashboard: React.FC = () => {
  return (
    <>
      <h1 style={{ color: 'red' }}>Dashboard</h1>
    </>
  );
};

export default Dashboard;
