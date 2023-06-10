import axios from "axios";
import {BACKEND_URL} from "./Config";

const RESTAURANT_URL = BACKEND_URL("api/restaurant")

class RestaurantService {
    getAllRestaurant() {
        const URL = RESTAURANT_URL + '/all'

        return axios.get(URL)
    }

    getRestaurantById(id) {
        const URL = RESTAURANT_URL + '/by-id/' + id

        return axios.get(URL)
    }

    getRestaurantByCategory(category) {
        const URL = RESTAURANT_URL + '/by-category/' + category

        return axios.get(URL)
    }

    getAllRestaurantPrice() {
        const URL = RESTAURANT_URL + '/price'

        return axios.get(URL)
    }

    getAllRestaurantCategory() {
        const URL = RESTAURANT_URL + '/category'

        return axios.get(URL)
    }
}

export default new RestaurantService();