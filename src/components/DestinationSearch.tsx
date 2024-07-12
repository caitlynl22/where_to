import { useEffect, useState } from "react";
import axios from "axios";

//import SearchResultsList from "./SearchResultsList";

function DestinationSearch() {
  const [origin, setOrigin] = useState("");
  const [maxPrice, setMaxPrice] = useState(200);

  function searchTrips() {
    axios
      .get('http://localhost:5001', {
        params: { origin: origin, maxPrice: maxPrice }
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
        console.error(error);
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchTrips();
  }

  useEffect(() => {
    searchTrips();
  }, [maxPrice]);

  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="flight-origin">Origin</label>
      <input
        id="flight-origin"
        type="text"
        onChange={(e) => setOrigin(e.target.value)}
      />
      <label htmlFor="flight-budget">Budget</label>
      <input
        id="flight-budget"
        type="range"
        max="3000"
        step="10"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <button type="submit">Inspire me!</button>
    </form>
  );
}

export default DestinationSearch;
