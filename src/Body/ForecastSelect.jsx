import { useEffect } from "react";
import Form from "react-bootstrap/Form";

function ForecastSelect({ list, setForecastDateTimeSelect }) {
  useEffect(() => {
    setForecastDateTimeSelect(list?.[0]);
  }, [list, setForecastDateTimeSelect]);

  const handleChange = (event) => {
    const index = event.target.value;
    setForecastDateTimeSelect(list[index]);
  };

  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Date & Time</Form.Label>
        <Form.Select onChange={handleChange}>
          {list?.map(({ dt_txt }, index) => (
            <option value={index} key={index}>
              {dt_txt}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
    </>
  );
}

export default ForecastSelect;
