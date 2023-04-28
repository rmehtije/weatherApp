import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { generateFetchUrl } from "../services/apiService";

function ExportForm() {
  console.log('ExportForm');
  const modes = ["json", "xml", "html"];

  const handleSubmit = (event) => {
    event.preventDefault();

    const mode = event.target.mode.value;
  
    const url = generateFetchUrl({ mode  });

    window.open(url);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Mode</Form.Label>
        <Form.Select name="mode">
          {modes.map((mode) => (
            <option value={mode} key={mode}>
              {mode}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <div className="d-grid">
        <Button variant="warning" type="submit">
          Export
        </Button>
      </div>
    </Form>
  );
}

export default ExportForm;
