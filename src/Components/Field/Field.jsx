import './Field.css'
import F1 from './Fielditems/F1'
import F2 from './Fielditems/F2'
import Fielditmes from './Fielditems/Fielditmes'

const Field = () => {
  return (
    <>
     <div className='field'>
        <span>Dedicated to provide best treatment.</span>
        <div>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, 
            and feel the charm of existence in this spot,
             which was created for the bliss of souls like mine.</div>
    </div>
    <div className='fields'>
      <Fielditmes/>
      <F1/>
      <F2/>
    </div>
    </>

  )
}

export default Field