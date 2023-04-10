import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  getCurrentWeather,
  defaultParams,
  getForecastWeather,
} from "../services/apiService";

function SearchForm({
  setCurrentWeather,
  setForecastWeather,
  closeSideBar,
  selectedData,
  setSelectedData,
}) {
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const params = {
      lat: event.target.latitude.value,
      lon: event.target.longitude.value,
      mode: event.target.mode.value,
      units: event.target.unit.value,
      lang: event.target.language.value,
    };

    setSelectedData(params);

    const currentWeather = await getCurrentWeather(params);
    const forecastWeather = await getForecastWeather(params);

    setCurrentWeather(currentWeather);
    setForecastWeather(forecastWeather);

    closeSideBar();
  };

  console.log("selectedData", selectedData);
  const defaultValue = selectedData || defaultParams;

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Latitude</Form.Label>
        <Form.Control
          type="text"
          placeholder="Latitude"
          name="latitude"
          defaultValue={defaultValue.lat}
        />
        <Form.Text className="text-muted">Example: 59.4370</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Longitude</Form.Label>
        <Form.Control
          type="text"
          placeholder="Longitude"
          name="longitude"
          defaultValue={defaultValue.lon}
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
                disabled
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
                defaultChecked={unit === defaultValue.units}
              />
            ))}
            <Form.Text className="text-muted">Measurement type</Form.Text>
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label>Langauges</Form.Label>
        <Form.Select name="language" defaultValue={defaultValue.lang}>
          {langauges.map(({ code, label }) => (
            <option value={code} key={code}>
              {label}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <div className="d-grid">
        <Button variant="primary" type="submit">
          Search
        </Button>
      </div>
    </Form>
  );
}

export default SearchForm;
