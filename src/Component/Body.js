import Card from "./Card";
import resList from "../utils/resList";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Body = () => {
   // Local State Variable - Super powerful variable
   const [listOfRestaurants, setListOfRestraunt] = useState([]);
   const [filteredRestaurant, setFilteredRestaurant] = useState([]);
 
   const [searchText, setSearchText] = useState("");
 
   // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
   console.log("Body Rendered");
 
   useEffect(() => {
     fetchData();
   }, []);
 

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
 console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants.info);
//  (json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants).map((d)=>console.log(d.info))

setListOfRestraunt(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
setFilteredRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)


  };
  
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestraunt(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Card key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;