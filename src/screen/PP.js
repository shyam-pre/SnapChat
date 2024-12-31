import React, {useEffect} from 'react';

const PP = () => {
  useEffect(() => {
    const startTimer = () => {
      let counter = 0; // Closure retains access to this variable
      return setInterval(() => {
        counter++;
        console.log('Timer:', counter);
      }, 1000);
    };

    const timer = startTimer();

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return null;
};

export default PP;
