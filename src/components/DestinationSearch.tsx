import { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

//import SearchResultsList from "./SearchResultsList";
import DestinationResult from "./DestinationResult";

function DestinationSearch() {
  const [origin, setOrigin] = useState("");
  const [maxPrice, setMaxPrice] = useState(200);
  const [results, setResults] = useState();

  function searchTrips() {
    axios
      .get('http://localhost:5001', {
        params: { origin: origin, maxPrice: maxPrice }
    })
    .then(function (response) {
      setResults(response.data);
    })
    .catch(function (error) {
      console.error(error);
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchTrips();
  }

  //useEffect(() => {
    //searchTrips();
  //}, [maxPrice]);

  return(
    <>
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
      <p>{maxPrice}</p>
      <ul>
        {results?.map((result) => (
          <DestinationResult key={uuidv4()} destination={result.destination} departureDate={result.departureDate} returnDate={result.returnDate} price={result.price.total} links={result.links} />
        ))}
      </ul>
    </>
  );
}

export default DestinationSearch;
