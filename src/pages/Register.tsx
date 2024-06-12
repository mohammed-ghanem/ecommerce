import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Col, Form, Row } from 'react-bootstrap';
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, signUpType } from "@validations/signUpValidation";
import InputForm from "@components/form/InputForm";


const Register = () => {
  const { register, handleSubmit, formState: { errors }, getFieldState, trigger } = useForm<signUpType>({
    resolver: zodResolver(signUpSchema),
    mode: "onBlur"
  });

  const emailOnBlurHandler = async (e: React.FocusEvent<HTMLInputElement>) => {
    // use trigger to make validation for email work automaticly
    await trigger("email")
    const value = e.target.value;
    const { isDirty, invalid } = getFieldState("email")
    if (isDirty && !invalid) {
      // send request to check if email is available
      

    }
  }

  const submitForm: SubmitHandler<signUpType> = (data) => {
    console.log(data)
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
            error={errors.email?.message}
            onBlur={emailOnBlurHandler}
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

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>

  )
}

export default Register