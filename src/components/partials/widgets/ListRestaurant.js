import React, {useState, useEffect} from "react";
import CardRestaurant from "./CardRestaurant";
import {ApplyFilters} from "../../pages/restaurant/core/ApplyFilters"
import RestaurantService from "../../../services/RestaurantService";
import {LoadingIndicator} from "../LoadingIndicator";

const ListRestaurant = ({ filterOpen, filterPrice, filterCategory }) => {
    const [listRestaurant, setListRestaurant] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getRestaurants = async () => {
            try {
                let data;
                if (filterCategory === "") {
                    data = (await RestaurantService.getAllRestaurant()).data
                } else {
                    data = (await RestaurantService.getRestaurantByCategory(filterCategory)).data
                }
                setListRestaurant(data);
            } catch (e) {
                console.log(e);
                setListRestaurant([]);
            }

            setIsLoading(false);
        }

        getRestaurants()
    }, [filterCategory])

    const filteredRestaurants = ApplyFilters(listRestaurant, filterOpen, filterPrice)

    return (
        <>
            <div className="row">
                {isLoading
                    ? <LoadingIndicator />
                    : <>
                        {filteredRestaurants.length !== 0
                            ? (filteredRestaurants.map((restaurant, i) => (
                                <CardRestaurant key={`restaurant` + i} restaurant={restaurant}/>
                            )))
                            : <p>Tidak ada data restaurant</p>
                        }
                    </>}
            </div>
        </>
    );
}

export default ListRestaurant;