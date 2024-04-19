import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Scroll() {

  const navigate = useNavigate();
  const [delData , setDelData] = useState(null);
  const handleClick = async (id) =>{
    
     const resp = await axios.delete(`https://college-web-platform-backend-code.onrender.com/delete/marquee/${id}`);
     window.location.reload()
    
     console.log(resp);
    console.log("Deleted");
  };

  const handlePost = async (id) =>{
    const res = await axios.patch(`https://college-web-platform-backend-code.onrender.com/scroll/post/${id}`);
    console.log(res);
    window.location.reload();
    console.log('Updated');
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await fetch('https://college-web-platform-backend-code.onrender.com/marquee');
        const data = await resp.json();
        setDelData(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, []);
  return (
    <div>
      {delData && delData.map((data)=>(
        <div className="deldata w-[300px] rounded-md border" key={data._id}>
           {/* {data.fileType === 'video' ? (
            <video controls width="400px">
              <source src={data.dispUrl} type="video/mp4" className="h-[200px] w-full rounded-t-md object-cover" />
            </video>
          ) : (
            <img src={data.dispUrl} alt="photo" width="400px" className="h-[200px] w-full rounded-t-md object-cover"/>
          )} */}
        <div className="p-4">
          <h2>End Date:</h2>
          <h3 className="inline-flex items-center text-lg font-semibold">
            {data.endDate}
          </h3>
          <p className="mt-3 text-sm text-gray-600">
          <h3>Name:</h3> {data.name}
          </p>
          <p className="mt-3 text-sm text-gray-600">
          <h3>E mail:</h3> {data.mail}
          </p>
          <p className="mt-3 text-sm text-gray-600">
          <h3>Phone number:</h3> {data.number}
          </p>
          <p className="mt-3 text-sm text-gray-600">
          <h3>First scroll data:</h3> {data.first}
          </p>
          <p className="mt-3 text-sm text-gray-600">
          <h3>Second scroll data:</h3> {data.second}
          </p>
          <button
            type="button"
            className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black "onClick={() => handleClick(data._id)}
          >
            Delete
          </button>
          <button type="button"
            className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black "onClick ={()=> handlePost(data._id)}>{data?.post? "DeActivate":" Activate"}</button>
        </div>
        </div>
      ))}
    </div>
  )
}
