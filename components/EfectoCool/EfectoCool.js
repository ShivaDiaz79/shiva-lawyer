import React, { useState, useEffect } from 'react';
import EfectoCoolA from './EfectoCoolA';
import EfectoCoolB from './EfectoCoolB';

const EfectoCool = () => {
  const [showComponentA, setShowComponentA] = useState(false);
  const [showComponentB, setShowComponentB] = useState(false);

  useEffect(() => {
    const timeoutA = setTimeout(() => {
      setShowComponentA(true);
    }, 2000);

    const timeoutB = setTimeout(() => {
      setShowComponentB(true);
    }, 3000);

    return () => {
      clearTimeout(timeoutA);
      clearTimeout(timeoutB);
    };
  }, []);

  return (
    <div className=" flex flex-col">
      {showComponentA && <EfectoCoolA />}
      {showComponentB && <EfectoCoolB />}
    </div>
  );
};

export default EfectoCool;
