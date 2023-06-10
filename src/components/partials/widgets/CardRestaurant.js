import React from "react";
import RatingStar from "./RatingStar";

const CardRestaurant = ({ restaurant }) => {

    return (
        <div className="d-flex justify-content-center col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
            <div className="card" style={{width: "16rem"}}>
                {restaurant.photos[0] ? <img src={restaurant.photos[0]} className="card-img-top" alt="..." />
                    : <img src="https://clicxy.com/wp-content/uploads/2016/04/dummy-post-horisontal.jpg" className="card-img-top" alt="..." />}
                <div className="card-body">
                    <h5 className="card-title">{restaurant.name}</h5>
                    <RatingStar rating={restaurant.rating} />
                    <div className="row mt-2 text-muted">
                        <div className="col-6">
                            <p className="text-subtitle">{restaurant.categories[0].nameCategory} - ${restaurant.price}</p>
                        </div>
                        <div className="col-6 text-end">
                            {restaurant.isOpen
                                ? (
                                    <p className="text-subtitle">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"
                                             fill="currentColor" className="bi bi-circle-fill me-1 mb-1" viewBox="0 0 16 16"
                                             style={{color: "green"}}>
                                            <circle cx="8" cy="8" r="8"/>
                                        </svg>
                                        Open Now
                                    </p>
                                )
                                : (
                                    <p className="text-subtitle">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"
                                             fill="currentColor" className="bi bi-circle-fill me-1 mb-1" viewBox="0 0 16 16"
                                             style={{color: "red"}}>
                                            <circle cx="8" cy="8" r="8"/>
                                        </svg>
                                        Closed
                                    </p>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="card-footer m-0 p-0">
                    <a href={`detail-restaurant/${restaurant.idRestaurant}`} className="btn btn-info button-view">Learn More</a>
                </div>
            </div>
        </div>
    );
}

export default CardRestaurant;
