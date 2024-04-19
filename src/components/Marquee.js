import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Marquee() {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://college-web-platform-backend-code.onrender.com/marquee');
        setData(response.data);
        const filteredData =await  response.data.filter(item => item.post === true);
        console.log("ahbjsj fjsd sfjv vrb " , filteredData)
        setData(filteredData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      console.log(data);
      console.log("Currently",data[currentIndex]);
    }, 20000 );

    if (data[currentIndex]?.text !== undefined && data[currentIndex]?.text !== '') {
      setFlag(true);
    } else {
      setFlag(false);
    }

    return () => clearInterval(interval);
  }, [currentIndex, data]);

  return (
    <div className="scroll">
      {data.length>0 && (
        <>
          <marquee style={{ width: '1500px' }} bgcolor="blue" className="nrmltext second" scrollamount="10">{data[currentIndex]?.first}</marquee>
          <marquee style={{ width: '1500px' }} bgcolor="1B9AAA" className="nrmltext temp" scrollamount="5">{data[currentIndex]?.second}</marquee>
        </>
      )}
    </div>
  );
}