import './Casuol.css'

const Casuol = () => {
  return (
    <div className="casuol">
        <div className='casuol_img'>
          <div style={{backgroundColor:"orange",width:"420px",height:"360px",position:"absolute",top:"260px",left:"280px",borderRadius:"20px"}}></div>
            <img  style={{position:"relative"}}src="https://s3-alpha-sig.figma.com/img/4191/c513/a557d8ef39d0e04c4db47fff98dff255?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZgcK3Px-tUie0nrxbg4UXKsBsMOzEpD20b0DVKsGLIsllFEgEhcTW-fly9UhFkCkdIQ563cqyH5TCxMd2u~LLgF172eaVo~fEsLbk4IYJesrIRZsZCbgZG562Vaqq9XbAwn69gJZC0rGvxM8FRv1lMjfo7Rh1mymh~hqfTwreJ3cVTrl165DithF~Kh9SDULcP9AvHf0Q3C1VSUicsTtXlnWns98LNRHUgcXydH1R3tm6xVZ9E1WD83biumOKYb-T8V2dyFsxBGiU4rRRCVIO9HW1bn7o5uwRFh4YKhtjR2QNjejbk~Jy3l8IpSvqU-iMYcg0SUGnyORXv0fylanOw__" alt="" />
        </div>
        <div className='casuol1'>
            <span className='wel'>Welcome to Medico Healthcare</span>
            <span className='your'>Your Journey to Better Health Starts Here</span>
            <button className='more'>Discover More</button>
        </div>
    </div>
  )
}

export default Casuol