import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SearchForm() {
  const modes = ["json", "xml", "html"];

  const units = ["standard", "metric", "imperial"];

  const langauges = [
    {
      label: "English",
      code: "en",
    },
    {
      label: "Finnish",
      code: "fi",
    },
    {
      label: "Russian",
      code: "ru",
    },
    {
      label: "Vietnamese",
      code: "vi",
    },
  ];

  const defaultValue = {
    latitude: 59.437,
    longitude: 24.7536,
    mode: "json",
    unit: "standard",
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      lat: event.target.latitude.value,
      lon: event.target.longitude.value,
      mode: event.target.mode.value,
      unit: event.target.unit.value,
      lang: event.target.language.value,
    };

    console.log("data", data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Latitude</Form.Label>
        <Form.Control
          type="text"
          placeholder="Latitude"
          name="latitude"
          defaultValue={defaultValue.latitude}
        />
        <Form.Text className="text-muted">Example: 59.4370</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Longitude</Form.Label>
        <Form.Control
          type="text"
          placeholder="Longitude"
          name="longitude"
          defaultValue={defaultValue.longitude}
        />
        <Form.Text className="text-muted">Example: 24.7536</Form.Text>
      </Form.Group>

      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Mode</Form.Label>
            {modes.map((mode) => (
              <Form.Check
                type="radio"
                label={mode}
                key={mode}
                name="mode"
                value={mode}
                defaultChecked={mode === defaultValue.mode}
              />
            ))}
            <Form.Text className="text-muted">Data type</Form.Text>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>Units</Form.Label>
            {units.map((unit) => (
              <Form.Check
                type="radio"
                label={unit}
                key={unit}
                name="unit"
                value={unit}
                defaultChecked={unit === defaultValue.unit}
              />
            ))}
            <Form.Text className="text-muted">Measurement type</Form.Text>
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>Langauges</Form.Label>
        <Form.Select name="language">
          {langauges.map(({ code, label }) => (
            <option value={code} key={code}>
              {label}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <div className="d-grid">
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default SearchForm;
