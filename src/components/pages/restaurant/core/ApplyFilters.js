const ApplyFilters = (restaurants, filterOpen, filterPrice) => {
    let filteredRestaurants = restaurants;

    if (filterOpen) {
        filteredRestaurants = (filteredRestaurants
            ? filteredRestaurants.filter((restaurant) => restaurant.isOpen)
            : filteredRestaurants);
    }

    if (filterPrice !== "") {
        const parsedPrice = parseFloat(filterPrice);
        filteredRestaurants = (filteredRestaurants
            ? filteredRestaurants.filter((restaurant) => restaurant.price === parsedPrice)
            : filteredRestaurants);
    }

    return filteredRestaurants;
};

export { ApplyFilters };