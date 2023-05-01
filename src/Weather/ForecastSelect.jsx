import { useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import moment from "moment";
import { setForecastDateTimeSelect } from "../services/stateService";
import { useDispatch } from "react-redux";
import { FORECAST_DATE_FORMAT } from "../constants";

function ForecastSelect({ list }) {

  // useParams - eto hook react-router-dom kotoryj sledit za parametrami peredannymi v url. 
  // v routore my naznachili nazvanie paramentrs 4erez ":". 
  // vsjo 4to my peredadim v url vmesto nazvanije etogo parametra, react-router-dom podstavit eto znachenije v objekt kotoryj 
  // useParams smozhet prochitat'.
  // pri izmenii etogo parametra useParams zanogo otrisujet komponent;
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
              {moment.unix(dt).format(FORECAST_DATE_FORMAT)}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
    </>
  );
}

export default ForecastSelect;
