import React, { useContext, useEffect } from 'react';
import { Container, Row, Col, ListGroup } from 'reactstrap';
import { AuthContext } from '../context/AuthContext';
import useFetch from './../hooks/useFetch';
import { BASE_URL } from './../utils/config';
import { Link } from 'react-router-dom';
import './../styles/registeredTours.css'; // Import CSS file

const RegisteredTours = () => {
    const { user } = useContext(AuthContext);

    const url = user ? `${BASE_URL}/booking/user/${user._id}` : null;
    const { data: bookings, error, loading } = useFetch(url);

    useEffect(() => {
        if (!user) {
            alert("Please sign in to view your bookings!");
        }
    }, [user]);

    return (
        <section>
            <Container>
                <Row>
                    <Col lg="12">
                        <h2 className="text-center mb-4">Your Booked Tours</h2>
                        {loading && <h4 className="text-center">Loading...</h4>}
                        {error && <h4 className="text-center">{error}</h4>}

                        {bookings?.length === 0 && !loading ? (
                            <h4 className="text-center">No tours booked yet.</h4>
                        ) : (
                            <ListGroup>
                                {bookings?.map((booking, index) => {
                                    const totalAmount = Number(booking.totalAmount);
                                    
                                    return (
                                        <div key={index} className="booking__item">
                                            {/* Display the image */}
                                            {booking.tourImage && (
                                                <img src={booking.tourId} alt={booking.tourName} className="booking__img" />
                                            )}
                                            <div className="booking__details">
                                                <h5>{booking.tourName}</h5>
                                                <p>{booking.desc}</p>
                                                <p>Booking Date: {new Date(booking.createdAt).toLocaleDateString()}</p>
                                                <p>Guest Size: {booking.guestSize}</p>
                                                <p>Total Price: ${totalAmount}</p>
                                                <Link to={`/tours/${booking.tourId}`} className="btn primary__btn">View Tour</Link>
                                            </div>
                                        </div>
                                    );
                                })}
                            </ListGroup>
                        )}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default RegisteredTours;
