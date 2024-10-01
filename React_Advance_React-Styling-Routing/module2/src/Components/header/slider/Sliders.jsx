import React from 'react'
import '../../header/slider/slider.css'
import slideBanner1 from '../../../assests/images/slideBanner1.jpg'
import slideBanner2 from '../../../assests/images/slideBanner2.jpg'


function Sliders() {
  return (
    <>
   <div classname="slider">
  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
      <li data-target="#carouselExampleIndicators" data-slide-to={1} />
      <li data-target="#carouselExampleIndicators" data-slide-to={2} />
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100" src={slideBanner1} alt="First slide" />
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src={slideBanner2} alt="Second slide" />
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>

    </>
  )
}

export default Sliders