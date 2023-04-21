import { useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";

function ForecastSelect({ list, setForecastDateTimeSelect }) {
  const { listIndex } = useParams();

  useEffect(() => {
    list?.length && setForecastDateTimeSelect(list?.[listIndex || 0]);
  }, [list, setForecastDateTimeSelect, listIndex]);

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
