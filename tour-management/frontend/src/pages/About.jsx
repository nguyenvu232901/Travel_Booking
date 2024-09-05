import React, { useState } from 'react';
import '../styles/about.css';
import { Container, Row, Col } from 'reactstrap';

import amazing_travel from './../assets/images/amazing-travel1.png';
import discover from './../assets/images/discover1.png';
import book_your_trip from './../assets/images/book-your-trip1.png';
import nice_support from './../assets/images/nice-support1.png';

import amazing_travel_hover from './../assets/images/amazing-travel.png';
import discover_hover from './../assets/images/discover.png';
import book_your_trip_hover from './../assets/images/book-your-trip.png';
import nice_support_hover from './../assets/images/nice-support.png';
import Newsletter from '../shared/Newsletter';

const About = () => {
    const [images, setImages] = useState({
        amazing_travel: amazing_travel,
        discover: discover,
        book_your_trip: book_your_trip,
        nice_support: nice_support
    });

    const handleMouseEnter = (key, hoverImage) => {
        setImages(prevState => ({
            ...prevState,
            [key]: hoverImage
        }));
    }

    const handleMouseLeave = (key, originalImage) => {
        setImages(prevState => ({
            ...prevState,
            [key]: originalImage
        }));
    }

    return (
        <>
            <div className="banner__img">
                <h1>Travel Around The World</h1>
            </div>

            <section>
                <Container>
                    <Row>
                        <Col lg='12' className='font__style'>
                            <h2 className='services__subtitle'>Why we are the best</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                tincidunt ut laoreet dolore magna aliquam erat volutpat.
                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg='3' md='6' sm='12' className='mb-4'>
                            <div
                                className='services__item'
                                onMouseEnter={() => handleMouseEnter('amazing_travel', amazing_travel_hover)}
                                onMouseLeave={() => handleMouseLeave('amazing_travel', amazing_travel)}
                            >
                                <img src={images.amazing_travel} alt='Amazing Travel' />
                                <h5>Amazing Travel</h5>
                                <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.</p>
                            </div>
                        </Col>

                        <Col lg='3' md='6' sm='12' className='mb-4'>
                            <div
                                className='services__item'
                                onMouseEnter={() => handleMouseEnter('discover', discover_hover)}
                                onMouseLeave={() => handleMouseLeave('discover', discover)}
                            >
                                <img src={images.discover} alt='Discover' />
                                <h5>Discover</h5>
                                <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.</p>
                           </div>
                        </Col>

                        <Col lg='3' md='6' sm='12' className='mb-4'>
                            <div
                                className='services__item'
                                onMouseEnter={() => handleMouseEnter('book_your_trip', book_your_trip_hover)}
                                onMouseLeave={() => handleMouseLeave('book_your_trip', book_your_trip)}
                            >
                                <img src={images.book_your_trip} alt='Book your trip' />
                                <h5>Book your trip</h5>
                                <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.</p>
                           </div>
                        </Col>

                        <Col lg='3' md='6' sm='12' className='mb-4'>
                            <div
                                className='services__item'
                                onMouseEnter={() => handleMouseEnter('nice_support', nice_support_hover)}
                                onMouseLeave={() => handleMouseLeave('nice_support', nice_support)}
                            >
                                <img src={images.nice_support} alt='Nice support' />
                                <h5>Nice support</h5>
                                <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim.</p>
                           </div>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col lg='12' className='font__style'>
                            <h2 className='services__subtitle'>What we offer</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                tincidunt ut laoreet dolore magna aliquam erat volutpat.
                            </p>
                        </Col>
                    </Row>
                    <Row className="align-items-center">
                        <Col lg='5' md='12' sm='12' className='mb-4'>
                            <div className='services__offer'>
                                <div>
                                    <i className="ri-arrow-right-s-line"></i>
                                    <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet;</p>
                                </div>
                                <div>
                                    <i className="ri-arrow-right-s-line"></i>
                                    <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet;</p>
                                </div>
                                <div>
                                    <i className="ri-arrow-right-s-line"></i>
                                    <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet;</p>
                                </div>
                                <div>
                                    <i className="ri-arrow-right-s-line"></i>
                                    <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet;</p>
                                </div>
                            </div>
                        </Col>

                        <Col lg='2' className="d-none d-lg-block">
                            <div className='vertical-divider'></div>
                        </Col>

                        <Col lg='5' md='12' sm='12' className='mb-4'>
                            <div className='services__offer'>
                                <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt 
                                ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci 
                                tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Eodem modo typi, 
                                qui nunc nobis videntur parum clari, fiant sollemnes in futurum. Ut wisi enim ad minim veniam, 
                                quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="company__section">
            <Container>
                <Row>
                    <Col lg="12">
                        <h2 className="services__subtitle">About Our Company</h2>
                        <p className="company__description">
                            Our company has been a leader in the travel industry for over a decade, providing exceptional experiences for travelers around the world. We pride ourselves on our dedication to quality, our passion for exploration, and our commitment to customer satisfaction. Our mission is to help you discover the beauty of the world, one adventure at a time.
                        </p>
                    </Col>
                </Row>

                <Row className="company__values">
                    <Col lg="3" md="6" sm="12" className="value__item">
                        <div className="value__icon">
                            <i className="ri-rocket-line"></i>
                        </div>
                        <h5 className="value__title">Innovation</h5>
                        <p className="value__description">
                            We constantly innovate to bring the best services to our clients.
                        </p>
                    </Col>

                    <Col lg="3" md="6" sm="12" className="value__item">
                        <div className="value__icon">
                            <i className="ri-hand-heart-line"></i>
                        </div>
                        <h5 className="value__title">Integrity</h5>
                        <p className="value__description">
                            We conduct our business with the highest level of integrity.
                        </p>
                    </Col>

                    <Col lg="3" md="6" sm="12" className="value__item">
                        <div className="value__icon">
                            <i className="ri-global-line"></i>
                        </div>
                        <h5 className="value__title">Global Reach</h5>
                        <p className="value__description">
                            Our network spans across the globe to serve our clients better.
                        </p>
                    </Col>

                    <Col lg="3" md="6" sm="12" className="value__item">
                        <div className="value__icon">
                            <i className="ri-customer-service-2-line"></i>
                        </div>
                        <h5 className="value__title">Customer Focus</h5>
                        <p className="value__description">
                            Our customers are at the heart of everything we do.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>

        <Newsletter />
        </>
    );
}

export default About;
