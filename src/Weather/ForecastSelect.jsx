import { useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import moment from "moment";
import { setForecastDateTimeSelect } from "../services/stateService";
import { useDispatch } from "react-redux";

function ForecastSelect({ list }) {
  console.log("ForecastSelect");

  const { listIndex } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    list?.length && dispatch(setForecastDateTimeSelect(list?.[listIndex || 0]));
  }, [list, listIndex, dispatch]);

  const handleChange = (event) => {
    const index = event.target.value;
    dispatch(setForecastDateTimeSelect(list[index]));
  };

  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Date & Time</Form.Label>
        <Form.Select onChange={handleChange} value={listIndex}>
          {list?.map(({ dt }, index) => (
            <option value={index} key={index}>
              {moment.unix(dt).format("DD.MM HH:mm")}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
    </>
  );
}

export default ForecastSelect;
