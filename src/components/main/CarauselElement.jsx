import React from 'react'

import { Carousel } from 'react-bootstrap'
import { carauselElements } from '../../addons/carauselElements'

const CarauselElement = () => {
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
                      <button type="button" className="btn btn-after">
                        <i className="fas fa-plus"></i>
                        <p>VER DESPUÉS</p>
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
