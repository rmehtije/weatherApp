import Table from "react-bootstrap/Table";

function Data() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Data;
