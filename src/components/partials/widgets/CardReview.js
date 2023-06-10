import React from "react";
import RatingStar from "./RatingStar";

const CardReview = ({ review }) => {

    return (
        <div className="d-flex justify-content-center col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
            <div className="card" style={{width: "16rem"}}>
                {review.image ? <img src={review.image} className="card-img-top" alt="..." />
                    : <img src="https://clicxy.com/wp-content/uploads/2016/04/dummy-post-horisontal.jpg" className="card-img-top" alt="..." />}
                <div className="card-body">
                    <h5 className="card-title">{review.name}</h5>
                    <RatingStar rating={review.rating} />
                    <p className="text-subtitle mt-2">Review: {review.text}</p>
                </div>
            </div>
        </div>
    );
}

export default CardReview;
