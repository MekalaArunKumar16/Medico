import "./Card.css"
import { MdLocalPhone } from "react-icons/md";

const Card = () => {
    return (
        <div className='card-list'>
            <div className='navbar1'>
                <img src="https://www.pinclipart.com/picdir/big/333-3337767_healthcare-clip-art-free-clipart-healthcare-icon-png.png" alt="" />
                <span>Medico</span>
            </div>
            <div className='nav-list1'>
                <span className='nav1'>Home</span>
                <span className='nav1'>About</span>
                <span className='nav1'>Health Checkup</span>
                <span className='nav1'>Doctors</span>
                <span className='nav1'>Departments</span>
            </div>
            <div className='apponitment'>
                <div className='phone'>
                    <span><MdLocalPhone /></span>
                    <span>1005-346-272</span>
                </div>
                <button className='appointment_btn'>Appointment</button>
            </div>
        </div>
    )
}
export default Card