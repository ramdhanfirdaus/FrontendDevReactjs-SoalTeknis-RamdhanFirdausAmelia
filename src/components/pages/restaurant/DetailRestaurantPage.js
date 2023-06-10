import React, {useEffect, useState} from "react";
import RestaurantService from "../../../services/RestaurantService";
import {useParams} from "react-router-dom";
import {LoadingIndicator} from "../../partials/LoadingIndicator";
import ListReview from "../../partials/widgets/ListReview";

const DetailRestaurantPage = () => {
    const [restaurant, setRestaurant] = useState("")
    const [isLoading, setIsLoading] = useState(true);
    const {id} = useParams()

    useEffect(() => {
        const getRestaurant = async () => {
            try {
                const data = (await RestaurantService.getRestaurantById(id)).data
                setRestaurant(data);
                setIsLoading(false);
            } catch (e) {
                console.log(e);
                setRestaurant("");
            }

        }

        getRestaurant()
    }, [id])

    return (
        <div className="container my-4">
            {isLoading
                ? <LoadingIndicator />
                : <>
                    <h3>Review Restaurant {restaurant.name}</h3>
                    <div className="row">
                        <div className="col-lg-8 col-sm-12">
                            Rating: {restaurant.rating}
                        </div>
                    </div>
                    <hr style={{opacity: 0.5}}/>
                    <ListReview reviews={restaurant.review}/>
                </>}

        </div>
    );
}

export default DetailRestaurantPage;