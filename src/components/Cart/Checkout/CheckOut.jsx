import { useDisplayContext } from "../../../store/DisplayProvider";
import Form from "react-bootstrap/Form";
import Button from "../../Shared/Button";

const CheckOut = () => {
  const checkOutVisabilityCTX = useDisplayContext();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label htmlFor="user-name">Name :</Form.Label>
        <Form.Control type="text" id="user-name" size="lg" />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="street">Street :</Form.Label>
        <Form.Control type="text" id="street" size="lg" />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="postal-code">Postal Code :</Form.Label>
        <Form.Control type="text" id="postal-code" size="lg" />
      </Form.Group>
      <Form.Group className="mb-5">
        <Form.Label htmlFor="city">City :</Form.Label>
        <Form.Control type="text" id="city" size="lg" />
      </Form.Group>
      <div className="d-flex gap-3">
        <Button
          cartClose
          type="button"
          onClick={checkOutVisabilityCTX.toggleDisplayCheckOut}
        >
          Cancel
        </Button>
        <Button cartOrder>Confirm</Button>
      </div>
    </Form>
  );
};

export default CheckOut;
