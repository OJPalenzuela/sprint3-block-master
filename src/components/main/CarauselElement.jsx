import React from 'react'

import { Carousel } from 'react-bootstrap'
import { carauselElements } from '../../addons/carauselElements'

const CarauselElement = () => {

    const handleTrailer = (url) =>{
      window.open(url, '_blank')
    }

    return (
    
        <Carousel>
            {
                carauselElements.info.map((data, key) =>(
                    <Carousel.Item key={key} interval={1000}>
                    <img
                        className="d-block w-100"
                        src={data.file}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    <div className="div-views">
                      <button type="button" className="btn btn-now">
                        <i className="fas fa-play"></i>
                        <p>VER AHORA</p>
                      </button>
                      <button onClick={() => {handleTrailer(data.url)}} type="button" className="btn btn-after">
                        <i className="fas fa-plus"></i>
                        <p>VER TRAILER</p>
                      </button>
                    </div>
                    </Carousel.Caption>
                </Carousel.Item>
                ))
            }
                
            </Carousel>
    )
}

export default CarauselElement
