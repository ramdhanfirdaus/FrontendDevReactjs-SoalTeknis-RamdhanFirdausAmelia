import React, {useState} from "react";
import ListRestaurant from "../../partials/widgets/ListRestaurant";
import FilterFormRestaurant from "../../partials/widgets/FilterFormRestaurant";

const RestaurantsPage = () => {
    const [filterOpen, setFilterOpen] = useState(false);
    const [filterPrice, setFilterPrice] = useState("");
    const [filterCategory, setFilterCategory] = useState("");

    return (
        <div className="container my-4">
            <h3>Restaurants</h3>
            <div className="row">
                <div className="col-lg-8 col-sm-12">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>
            </div>
            <hr style={{opacity: 0.5}}/>
            <FilterFormRestaurant filterOpen={filterOpen} setFilterOpen={setFilterOpen}
                                  filterPrice={filterPrice} setFilterPrice={setFilterPrice}
                                  filterCategory={filterCategory} setFilterCategory={setFilterCategory}/>
            <hr style={{opacity: 0.5}}/>
            <ListRestaurant filterOpen={filterOpen} filterPrice={filterPrice} filterCategory={filterCategory} />
        </div>
    );
}

export default RestaurantsPage;