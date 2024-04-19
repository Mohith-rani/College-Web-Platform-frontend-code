import React, { useEffect, useState } from 'react';
import TwoDisplay from './TwoDisplay';
import SingleGrid from './SingleGrid';
import Marquee from './Marquee';

export default function Twogrid() {
  const [disp, setDisp] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flag, setFlag] = useState(false);
  const [sports, setSports] = useState(new Set());
  const [events, setEvents] = useState([]);
  const [others, setOthers] = useState([]);
  const [circulars,setCirculars] = useState([]);

  useEffect(() => {
    const getData = async () => {
          try {
            const resp = await fetch('https://college-web-platform-backend-code.onrender.com/vignan');
            const data = await resp.json();
    
            const today = new Date();
            console.log(today);
      
            
            const filteredData = data.filter(item => {
              const endDate = new Date(item.endDate);
              console.log(endDate)
              return today <= endDate ;
            });
      
            console.log("Filtered data:", filteredData);

            const content = filteredData.filter((Data) => Data.post);
            setDisp(content);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    getData();

    const intervalId = setInterval(() => {
      getData(); // Fetch data every two hours
    }, 60*60*1000); // 1 hours in milliseconds
  
    return () => clearInterval(intervalId); // Cleanup the interval

  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % disp.length);
    }, disp[currentIndex]?.fileType === 'video' ? 30000 : 10000); // Change every 5s for images, 30s for videos

    setFlag(
      (disp[currentIndex]?.text !== undefined && disp[currentIndex]?.text !== '') ||
      (disp[currentIndex]?.heading !== undefined && disp[currentIndex]?.heading !== '')
    );
    
    

    // if (disp[currentIndex]?.category === "sports") {
    //   setSports((prevItems) => new Set([...prevItems, disp[currentIndex]]));
    // } else if (disp[currentIndex]?.category === "events") {
    //   setEvents((prevEvents) => [...prevEvents, disp[currentIndex]]);
      
    // } 
    // else if (disp[currentIndex]?.category === "circulars") {
    //   setCirculars((prevEvents) => [...prevEvents, disp[currentIndex]]);
      
    // } 
    // else {
    //   setOthers((prevOthers) => [...prevOthers, disp[currentIndex]]);
    // }

    return () => clearInterval(interval);
  }, [currentIndex, disp]);

  

  return (
    <div>
      {flag ? <TwoDisplay disp={disp} currentIndex={currentIndex} /> : <SingleGrid disp={disp} currentIndex={currentIndex} />}
      <Marquee />

    </div>
  );
}
