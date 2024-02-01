import './Navbar.css'
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav'>
        <div className="nav-items">
          <span style={{ color: 'white', fontSize: "30px" }}><IoLocationSharp /></span>
          <span className='nav-text'>90919 Madie run Apt. 790</span>
        </div>
        <div className="nav-items">
          <span style={{ color: 'white', fontSize: "30px" }}><MdOutlineMail /></span>
          <span className='nav-text'>medico@health.care</span>
        </div>
      </div>
      <div className="nav-items"style={{marginLeft:"500px",paddingRight:"100px"}}>
          <span style={{ color: 'white', fontSize: "28px" }}><FaWhatsapp /></span>
          <span className='nav-text' style={{textDecoration:"underline"}}>Connect On Whatsapp</span>
      </div>
    </nav>
  )
}

export default Navbar
