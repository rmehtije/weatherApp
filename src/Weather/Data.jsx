import Table from "react-bootstrap/Table";
import moment from "moment";
import { useSelector } from "react-redux";

function Data({ name, main, weather, dt, selectedTab }) {
  console.log('Data');

  const forecastDateTimeSelect = useSelector((state) => state.forecastDateTimeSelect);

  const data = selectedTab === 'current' ? { main, weather, dt } : forecastDateTimeSelect;

  const futureDate = moment.unix(data?.dt);
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
          <td>{data?.main?.temp}</td>
        </tr>
        <tr>
          <td>Feels like</td>
          <td>{data?.main?.feels_like}</td>
        </tr>
        <tr>
          <td>Description</td>
          <td>{data?.weather?.length && data?.weather[0].description}</td>
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
