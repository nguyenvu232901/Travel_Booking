import React from 'react';
import './tour-card.css';
import {Card, CardBody} from 'reactstrap';
import {Link} from 'react-router-dom';

const TourCard = ({tour}) => {

    const {id, title, city, photo, price, featured, avgRating, reviews} = tour;


    return (
        <div className="tour__card">
            <Card>
                <div className="tour__img">
                    <img src={photo} alt="tour-img" />
                    <span>Featured</span>
                </div>

                <CardBody>
                    <div className="card__top d-flex align-items-center justify-content-between">
                        <span className="tour__location d-flex align-items-center gap-1">
                            <i class="ri-map-pin-line"></i>{city}
                        </span>
                        <span className="tour__rating d-flex align-items-center gap-1">
                            <i class="ri-star-fill"></i>{avgRating}{" "}
                            <span>({reviews? reviews.length:0})</span>
                        </span>
                    </div>

                    <h5 className="tour__title"><Link to={`/tours/${id}`}>{title}</Link></h5>

                    <div className="card__bottom d-flex align-items-center justify-between mt-3">
                        <h5>${price} <span>/per person</span></h5>
                        <button className="btn booking__btn">
                            <Link to={`/tours/${id}`}>Book Now</Link>
                        </button>
                    </div>
                </CardBody>
            </Card>

            
        </div>
    );
};

export default TourCard;