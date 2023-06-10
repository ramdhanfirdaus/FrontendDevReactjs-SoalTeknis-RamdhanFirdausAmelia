import React, {useEffect, useState} from 'react';
import RestaurantService from "../../../services/RestaurantService";

const FilterFormRestaurant = ({ filterOpen, setFilterOpen,
                                  filterPrice, setFilterPrice,
                                  filterCategory, setFilterCategory}) => {

    const [listPrice, setListPrice] = useState([])
    const [listCategory, setListCategory] = useState([])

    useEffect(() => {

        const getPrice = async () => {
            try {
                const data = (await RestaurantService.getAllRestaurantPrice()).data
                setListPrice(data);
            } catch (e) {
                console.log(e);
                setListPrice([]);
            }
        }

        const getCategory = async () => {
            try {
                const data = (await RestaurantService.getAllRestaurantCategory()).data
                setListCategory(data);
            } catch (e) {
                console.log(e);
                setListCategory([]);
            }
        }

        getPrice()
        getCategory()
    }, [])

    const handleOpenFilterChange = (event) => {
        setFilterOpen(event.target.checked);
    };

    const handlePriceFilterChange = (event) => {
        setFilterPrice(event.target.value);
    };

    const handleCategoryFilterChange = (event) => {
        setFilterCategory(event.target.value);
    };

    const handleReset = () => {
        setFilterOpen(false);
        setFilterPrice("");
        setFilterCategory("");
    };

    return (
        <div className="row">
            <div className="col-xl-1 col-12 my-3">
                <p className="m-0">Filter by:</p>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 my-3">
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                        checked={filterOpen}
                        onChange={handleOpenFilterChange}
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Open Now
                    </label>
                </div>
            </div>

            <div className="col-lg-2 col-md-3 col-sm-4 my-2">
                <select
                    className="form-select"
                    aria-label="Default select example"
                    value={filterPrice}
                    onChange={handlePriceFilterChange}
                >
                    <option selected value="">Price</option>
                    {listPrice && listPrice.map((price) => (
                        <option key={price.idPrice} value={price.nominal}>${price.nominal}</option>
                    ))}
                </select>
            </div>

            <div className="col-lg-2 col-md-3 col-sm-4 my-2">
                <select
                    className="form-select"
                    aria-label="Default select example"
                    value={filterCategory}
                    onChange={handleCategoryFilterChange}
                >
                    <option selected value="">Category</option>
                    {listCategory && listCategory.map((category) => (
                        <option key={category.idCategory} value={category.nameCategory}>{category.nameCategory}</option>
                    ))}
                </select>
            </div>

            <div className="col-xl-5 col-lg-6 col-md-3 col-sm-12 my-2 d-flex justify-content-end">
                <button type="button" className="btn btn-light border-secondary" style={{width: "150px"}}
                onClick={handleReset}>Clear All</button>
            </div>
        </div>
    );
};

export default FilterFormRestaurant;
