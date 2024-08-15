type Props = {
  destination: string;
  departureDate: string;
  returnDate: string;
  price: number;
  links: {flightDates: string, flightOffers: string};
}

function DestinationResult(props: Props) {
  return(
    <li>
      <article>
        <h2>{props.destination}</h2>
        <ul>
          <li>Departure: {props.departureDate}</li>
          <li>Return: {props.returnDate}</li>
          <li>Price: {props.price}</li>
          <li><a href={props.links.flightDates}>Flight Dates</a></li>
          <li><a href={props.links.flightOffers}>Flight Offers</a></li>
        </ul>
      </article>
    </li>
  );
}

export default DestinationResult;
