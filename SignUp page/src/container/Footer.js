import React, { useEffect, useState } from 'react';
import { getLiveTime } from '../utils/greeting';

const Footer = () => {
  const [time, setTime] = useState('');
  useEffect(() => {
    let timer = setInterval(() => setTime(getLiveTime()), 1000);

    return function cleanUp () {
        clearInterval(timer);
    };
    //setTime(getLiveTime());
  });

  return (
    <div style={{ bottom: 0}}>
      <div>Live time: {time} </div>
    </div>
  )
}

export default Footer;