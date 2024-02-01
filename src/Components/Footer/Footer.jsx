import './Footer.css'
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaPinterest } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='main'>
            <div className='Footer'>
                <div className='footer_btn'>
                    <div className='footer_logo'>
                        <img style={{ width: "60px" }} src="https://www.pinclipart.com/picdir/big/333-3337767_healthcare-clip-art-free-clipart-healthcare-icon-png.png" alt="" />
                        <span style={{ color: "white", fontSize: "30px" }}>Medico</span>
                    </div>
                    <button className='foot_btn'> <span><FaPaperPlane /></span> an Appointment</button>
                    <button className='foot_btn'> <span><FaWhatsapp /></span> Connect on Whatsapp</button>

                </div>
                <div className='footer_items'>
                    <ul>
                        <li style={{ fontSize: "25px", paddingBottom: "10px" }}>Services</li>
                        <li>Pathology</li>
                        <li>Ambulance</li>
                        <li>Radiology</li>
                        <li>Pharmacy</li>
                    </ul>
                    <ul>
                        <li style={{ fontSize: "20px", paddingBottom: "10px" }}>HEALTH CHECKUP</li>
                        <li>Women Health</li>
                        <li>Cancer Screening</li>
                        <li>Cardiac Health</li>
                        <li>MRI Checkup</li>
                    </ul>
                    <ul>
                        <li style={{ fontSize: "20px", paddingBottom: "10px" }}>DEPARTMENT</li>

                        <li>General</li>
                        <li>Dermatology</li>
                        <li>Cardiology</li>
                        <li>Cancer</li>
                    </ul>
                    <ul>
                        <li style={{ fontSize: "20px", paddingBottom: "10px" }}>QUICK LINKS</li>
                        <li>Lincense</li>
                        <li>ChangeLog</li>
                        <li>Link</li>
                        <li>Start</li>
                    </ul>
                </div>
                
            </div>
            <div className='foot_social'>
                    <ul>
                        <li><FaFacebook /></li>
                        <li><FaSquareXTwitter /></li>
                        <li><FaPinterest /></li>
                        <li><RiInstagramFill /></li>
                    </ul>
                </div>
        </div>
            
            )
}

            export default Footer