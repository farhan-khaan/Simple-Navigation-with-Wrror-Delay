'use client'
import { useEffect, useState } from 'react';


const Timeout = () => {
  const [message, setMessage] = useState('Waiting...');

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('Time is up!');
    }, 5000); // 5000 milliseconds = 5 seconds

    // Cleanup the timeout on unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default Timeout;
