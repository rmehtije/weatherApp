import Table from "react-bootstrap/Table";
import moment from "moment";

function Data({ name, main, weather, dt }) {
  const futureDate = moment.unix(dt);
  const currentDate = moment();
  const duration = moment.duration(futureDate.diff(currentDate));

  return (
    <Table striped bordered hover>
      <tbody>
        <tr>
          <td>City</td>
          <td>{name}</td>
        </tr>
        <tr>
          <td>Temp</td>
          <td>{main?.temp}</td>
        </tr>
        <tr>
          <td>Feels like</td>
          <td>{main?.feels_like}</td>
        </tr>
        <tr>
          <td>Description</td>
          <td>{weather?.length && weather[0].description}</td>
        </tr>
        <tr>
          <td>Valid until</td>
          <td>{`Days: ${duration.days()} Hours: ${duration.hours()} Minutes: ${duration.minutes()}`}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Data;
