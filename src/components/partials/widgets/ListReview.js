import React from "react";
import CardReview from "./CardReview";

const ListReview = ({ reviews }) => {

    return (
        <>
            {reviews.length !== 0
                ? (reviews.map((review, i) => (
                    <CardReview key={`review` + i} review={review}/>
                )))
                : <p>Tidak ada review pada restaurant</p>}
        </>
    );
}

export default ListReview;