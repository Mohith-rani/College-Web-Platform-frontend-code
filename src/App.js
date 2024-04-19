import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import UpdatedNavbar from './components/updatedNavbar';
import Twogrid from './components/Twogrid';
import Marquee from './components/Marquee';
import UploadFile from './components/UploadFile';
import UploadData from './components/UploadData';
import Sports from './components/Upload/Sports';
import Events from './components/Upload/Events';
import Circulars from './components/Upload/Circulars';
import Placements from './components/Upload/Placements';
import Others from './components/Upload/Others';
import DeleteData from './components/Delete/DeleteData';
import Sport from './components/Delete/Sport';
import Event from './components/Delete/Event';
import Circular from './components/Delete/Circular';
import Placement from './components/Delete/Placement';
import Other from './components/Delete/Other';
import LoginPage from './components/Login/LoginPage';
import Register from './components/Login/Register';
import Login from './components/Login/Login';
import MarqueeData from './components/Upload/MarqueeData';
import Scroll from './components/Delete/Scroll';

function App() {
  return (
    <div>
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const isUploadRoute = location.pathname === '/';


  return (
    <div>
      {isUploadRoute ? <UpdatedNavbar /> : <Navbar />}
      
      <Routes>
        <Route path="/" element={<Twogrid />} />
        
        <Route path="/upload" element={<UploadData />}>
          <Route path="sports" element={<Sports />} />
          <Route path="events" element={<Events/>} />
          <Route path="circulars" element={<Circulars/>} />
          <Route path="placements" element={<Placements/>} />
          <Route path="others" element={<Others/>} />
          <Route path="marquee" element={<MarqueeData />} />
        </Route>
        <Route path="/delete" element={<DeleteData />}>
          <Route path="sports" element={<Sport />}  />
          <Route path="events" element={<Event/>} />
          <Route path="circulars" element={<Circular/>} />
          <Route path="scroll" element={<Scroll />} />
          <Route path="placements" element={<Placement/>} />
          <Route path="others" element={<Other/>} />
        </Route>

        <Route path="/admin" element={<LoginPage />}>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
