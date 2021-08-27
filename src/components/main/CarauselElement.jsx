import React from 'react'

import raya from '../../assets/images/raya.png'
import mulan from '../../assets/images/mulan.png'
import unidos from '../../assets/images/unidos.png'

import { Carousel } from 'react-bootstrap'

const CarauselElement = () => {
    return (
        <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={unidos}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={raya}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={mulan}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    )
}

export default CarauselElement
