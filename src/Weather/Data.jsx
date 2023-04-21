import Table from "react-bootstrap/Table";

function Data({ name, main, weather }) {

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
      </tbody>
    </Table>
  );
}

export default Data;
