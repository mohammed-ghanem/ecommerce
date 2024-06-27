import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actAuthRegister, restUI } from "@store/auth/authSlice";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap';
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, signUpType } from "@validations/signUpValidation";
import InputForm from "@components/form/InputForm";
import useCheckEmailAvailability from "@hooks/useCheckEmailAvailability"
import { Navigate , useNavigate } from "react-router-dom";
import { useEffect } from "react";


const Register = () => {
  const dispatch = useAppDispatch()
  const { loading, error , accessToken } = useAppSelector((state) => state.auth)
  const navigate = useNavigate()



  const { register, handleSubmit, formState: { errors }, getFieldState, trigger } = useForm<signUpType>({
    resolver: zodResolver(signUpSchema),
    mode: "onChange"
  });

  const { emailAvailabilityStatus, enteredEmail, checkEmailAvailability, resetCheckEmailAvailability, } = useCheckEmailAvailability()

  const emailonChangeHandler = async (e: React.FocusEvent<HTMLInputElement>) => {
    // use trigger to make validation for email work automaticly
    await trigger("email")
    const value = e.target.value;
    const { isDirty, invalid } = getFieldState("email")
    if (isDirty && !invalid && enteredEmail !== value) {
      // send request to check if email is available
      checkEmailAvailability(value)
    }
    if (isDirty && invalid && enteredEmail) {
      resetCheckEmailAvailability();
    }
  }

  const submitForm: SubmitHandler<signUpType> = async (data) => {
    const { firstName, lastName, email, password } = data
    dispatch(actAuthRegister({ firstName, lastName, email, password }))
      .unwrap()
      .then(() => {
        navigate('/login?message=account_created')
      })
  }

  useEffect(() => {
    return () => {
      dispatch(restUI())
    }
  }, [dispatch])

  // if user is login in block login page 
  if (accessToken) {
    return <Navigate to="/" />
  }


  return (
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
        <h3>Register Page</h3>
        <Form onSubmit={handleSubmit(submitForm)}>
          {/* first name input */}
          <InputForm
            label="First Name"
            name="firstName"
            Placeholder=" first name"
            register={register}
            error={errors.firstName?.message}
          />
          {/* last name input */}
          <InputForm
            label="Last Name"
            name="lastName"
            Placeholder=" last name"
            register={register}
            error={errors.lastName?.message}
          />
          {/* email address input */}
          <InputForm
            label="Email address"
            name="email"
            Placeholder="Email address"
            register={register}
            onChange={emailonChangeHandler}
            error={
              errors.email?.message
                ? errors.email?.message
                : emailAvailabilityStatus === "notAvailable"
                  ? "This email is already in use."
                  : emailAvailabilityStatus === "failed"
                    ? "Error from the server."
                    : ""
            }
            formText={
              emailAvailabilityStatus === "checking"
                ? "We're currently checking the availability of this email address. Please wait a moment."
                : ""
            }
            success={
              emailAvailabilityStatus === "available"
                ? "This email is available for use."
                : ""
            }
          // disabled={emailAvailabilityStatus === "checking" ? true : false}
          />
          {/* password input */}
          <InputForm
            label="password"
            name="password"
            Placeholder="Password"
            type="password"
            register={register}
            error={errors.password?.message}
          />
          {/*confirm password input */}
          <InputForm
            label="confirm password"
            name="confirmPassword"
            Placeholder="Confirm Password"
            type="password"
            register={register}
            error={errors.confirmPassword?.message}

          />

          <Button variant="primary" type="submit" disabled={
            emailAvailabilityStatus === "checking"
              ? true
              : false || loading === "pending"
          }>
            {loading === "pending" ? (
              <>
                <Spinner animation="border" size="sm"></Spinner> Loading...
              </>
            ) : (
              "Submit"
            )}
          </Button>
          {error && (
            <p style={{ color: "#DC3545", marginTop: "10px" }}>{error}</p>
          )}
        </Form>
      </Col>
    </Row>

  )
}

export default Register