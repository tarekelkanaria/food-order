import { useDisplayContext } from "../../../store/DisplayProvider";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form as FormBS } from "react-bootstrap";
import Button from "../../Shared/Button";

const CheckOut = () => {
  const checkOutVisabilityCTX = useDisplayContext();

  return (
    <Formik
      initialValues={{ userName: "", street: "", postalCode: "", city: "" }}
      validationSchema={Yup.object({
        userName: Yup.string()
          .min(3, "Must be at least 3 characters")
          .required("Required"),
        street: Yup.string()
          .min(3, "Must be at least 3 characters")
          .required("Required"),
        postalCode: Yup.string()
          .min(3, "Must be at least 3 characters")
          .required("Required"),
        city: Yup.string()
          .min(3, "Must be at least 3 characters")
          .required("Required"),
      })}
      onSubmit={(values) => console.log(values)}
    >
      {(formik) => (
        <FormBS onSubmit={formik.handleSubmit}>
          <FormBS.Group>
            <FormBS.Label htmlFor="userName" className="fw-bold">
              Name :
            </FormBS.Label>
            <FormBS.Control
              type="text"
              id="userName"
              name="userName"
              size="lg"
              value={formik.values.userName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.userName && formik.errors.userName}
            />
            <FormBS.Control.Feedback type="invalid">
              {formik.errors.userName}
            </FormBS.Control.Feedback>
          </FormBS.Group>
          <FormBS.Group>
            <FormBS.Label htmlFor="street" className="fw-bold">
              Street :
            </FormBS.Label>
            <FormBS.Control
              type="text"
              id="street"
              name="street"
              size="lg"
              value={formik.values.street}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.street && formik.errors.street}
            />
            <FormBS.Control.Feedback type="invalid">
              {formik.errors.street}
            </FormBS.Control.Feedback>
          </FormBS.Group>
          <FormBS.Group>
            <FormBS.Label htmlFor="postalCode" className="fw-bold">
              Postal Code :
            </FormBS.Label>
            <FormBS.Control
              type="text"
              id="postalCode"
              name="postalCode"
              size="lg"
              value={formik.values.postalCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.postalCode && formik.errors.postalCode}
            />
            <FormBS.Control.Feedback type="invalid">
              {formik.errors.postalCode}
            </FormBS.Control.Feedback>
          </FormBS.Group>
          <FormBS.Group className="mb-3">
            <FormBS.Label htmlFor="city" className="fw-bold">
              City :
            </FormBS.Label>
            <FormBS.Control
              type="text"
              id="city"
              name="city"
              size="lg"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.city && formik.errors.city}
            />
            <FormBS.Control.Feedback type="invalid">
              {formik.errors.city}
            </FormBS.Control.Feedback>
          </FormBS.Group>
          <div className="d-flex gap-3">
            <Button
              cartClose
              type="button"
              onClick={checkOutVisabilityCTX.toggleDisplayCheckOut}
            >
              Cancel
            </Button>
            <Button type="submit" cartOrder>
              Confirm
            </Button>
          </div>
        </FormBS>
      )}
    </Formik>
  );
};

export default CheckOut;
