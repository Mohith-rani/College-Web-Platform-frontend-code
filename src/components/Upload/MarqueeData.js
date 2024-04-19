import React from 'react'
import { useState } from 'react'
import axios from 'axios';

export default function MarqueeData() {
  const [first , setFirst] = useState("");
  const [second , setSecond] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [number, setNumber] = useState("");
  const [category, setCategory] = useState('marquee');
  const handleSubmit = async (event) =>{
     event.preventDefault();
     const response = await axios.post('https://college-web-platform-backend-code.onrender.com/vignan/upload',{category, first, second, endDate, name, mail, number });
     console.log(response);
  }
  return (
    <div className='register-form'>
       <form onSubmit={handleSubmit}>
       <h3>Scroll Data:</h3>
       <label>Enter name:</label>
        <input 
         className='yas'
         type='textarea'
         onChange={(e)=>setName(e.target.value)}
         value={name}
        
        />
        <br />
        <label>Enter mail:</label>
        <input 
         className='yas'
         type='textarea'
         onChange={(e)=>setMail(e.target.value)}
         value={mail}
        
        />
        <br />
        <label>Enter phone number:</label>
        <input 
         className='yas'
         type='textarea'
         onChange={(e)=>setNumber(e.target.value)}
         value={number}
        
        />
        <br />
        <label>Select end date:</label>
        <input 
         className='endDate'
         type='date'
         onChange={(e)=>setEndDate(e.target.value)}
         value={endDate}
        
        />
        <br />
          <label>Enter data for first scroll:</label>
          <input 
            type='textarea'
            onChange={(e)=>setFirst(e.target.value)}
            required

          />
          <label>Enter data for second scroll:</label>
          <input 
            type='textarea'
            onChange={(e)=>setSecond(e.target.value)}
            required

          />
          <button>Upload</button>
       </form>
    </div>
  )
}
