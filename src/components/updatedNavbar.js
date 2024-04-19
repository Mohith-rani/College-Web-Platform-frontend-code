
import useTime from '../hooks/useTime';
import chairman from '../images/chairman.jpg'
import college from '../images/college_pic.jpeg.jpg';
import logonew from '../images/Logonew.jpg';
import Welcome from '../images/welcome.jpg';

export default function Navbar() {
  
  const {hours,minutes,seconds} = useTime();

  return (
    <div>
      <nav>
      <img src={chairman} height="180px"  className="chairman" alt='chairman sir photo'></img>
      <img src={logonew} width="100%" height="180px" alt='College logo'></img>
      
      <img  src={college} height="180px" className='college' alt='college photo'></img>

    </nav>
    <marquee className="custom-marquee-tag" scrollamount="20">
    <div style={{ width: '70%' }}> 
      <img src={Welcome} alt="namaskaram_image" /> Welcome to Parents, Students and Staff.
    </div>
    </marquee>

    </div>
      );
}
