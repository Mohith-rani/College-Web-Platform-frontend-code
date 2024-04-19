import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import basketball from '../images/basketball.webp';
import '../index.css'; 
import events from '../images/events.jpg';
import others from '../images/others.png';
import placements from '../images/placements.jpg';
import circular from '../images/circular.jpg';
import scrolls from '../images/scrolls.jpg';
import Welcome from '../images/welcome.jpg';


export default function UploadData() {
  return (
    <div>
      <marquee className="custom-marquee" scrollamount="20">
      <div style={{ width: '70%' }}> 
        <img src={Welcome} alt="namaskaram_image" /> Welcome to VIIT's Smart Notice Board
      </div>
    </marquee>

      <div className="header-text">
        <h1>This website is developed by R.Mohith, T.Kartheek, Y.Nohith, S.Seshagiri Rao of IV B.Tech.( EEE ) 2020-24 Admitted Batch</h1>
        <h1>Under the guidance of Dr.K.K.Deepika, Associate Professor, Department of EEE</h1>
      </div>
      <nav className='upload grid-container'>
        <NavLink to="marquee" className="grid-item">
        <div className="image-container" data-text="Textual Information to be circulated to students (No image).">
        <img src={scrolls} height="80px" className="icon" alt='scroll data icon'/>
        </div>
        ScrollData
        </NavLink>
        <NavLink to="circulars" className="grid-item">
        <div className="image-container" data-text="Circular to be posted with its content entered as text and circular copy as an image.">
        <img src={circular} height="80px" className="icon" alt='circulars icon'/>
        </div> 
        Circulars
        </NavLink>
        <NavLink to="events" className="grid-item">
        <div className="image-container" data-text="Any information about an event to be conducted/completed with a short description and one image/ a video of 30 seconds.">
        <img src={events} height="80px" className="icon" alt='events icon'/>
        </div> 
        Events
        </NavLink>
        <NavLink to="placements" className="grid-item">
        <div className="image-container" data-text="Any information about placements to be conducted/completed with a short description and one image/ a video of 30 seconds.">
        <img src={placements} height="80px" className="icon" alt='placements icon'/>
        </div>
        Placements
        </NavLink>
        <NavLink to="sports" className="grid-item">
        <div className="image-container" data-text="Any information about sports with a short description and one image/ a video of 30 seconds.">
        <img src={basketball} height="80px" className="icon" alt='sports icon'/>
        </div>  
        Sports
        </NavLink>
        <NavLink to="others" className="grid-item">
        <div className="image-container" data-text="Any other important information with a short description and one image/ a video of 30 seconds.">
        <img src={others} height="80px" className="icon" alt='others icon'/>
        </div>
        Others
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
