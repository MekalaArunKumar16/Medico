import './Services.css'
import S1 from './Services_items/S1'
import S2 from './Services_items/S2'
import S3 from './Services_items/S3'
import Servicesitems from './Services_items/Servicesitems'

const Services = () => {
    return (
        <>
            <div className='services'>
                <span style={{ color: '#008AC5' }}>SERVICES & TREATMENTS</span>
                <div className='treatment'>
                    <span>More than 40 specialty and health care services</span>
                    <button>See All Services</button>
                </div>
            </div>
            <div className='services_items'>
                <Servicesitems/>
                <S1/>
                <S2/>
                <S3/>
            </div>
        </>

    )
}

export default Services
