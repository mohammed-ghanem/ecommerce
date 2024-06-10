import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Col, Form, Row } from 'react-bootstrap';
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, signUpType } from "@validations/signUpValidation";
import InputForm from "@form/InputForm";




const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<signUpType>({
    resolver: zodResolver(signUpSchema),
    mode: "onChange"
  });
  const submitForm: SubmitHandler<signUpType> = (data) => {
    console.log(data)
  }
  return (
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
        <Form onSubmit={handleSubmit(submitForm)}>
          <InputForm
            label="First Name"
            name="firstName"
            register={register}
            error={errors.firstName?.message} />

          {/* first name input */}

          {/* <Form.Group className='mb-3'>
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="first name"
              {...register("firstName", { required: true })}
              isInvalid={errors.firstName?.message ? true : false} />
            <Form.Control.Feedback type="invalid">
              {errors.firstName?.message}
            </Form.Control.Feedback>
          </Form.Group> */}
          {/* last name input */}
          <Form.Group className='mb-3'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="last name"
              {...register("lastName", { required: true })}
              isInvalid={errors.lastName?.message ? true : false} />
            <Form.Control.Feedback type="invalid">
              {errors.lastName?.message}
            </Form.Control.Feedback>
          </Form.Group>
          {/* email address input */}
          <Form.Group className='mb-3'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="Enter email"
              {...register("email", { required: true })}
              isInvalid={errors.email?.message ? true : false} />
            <Form.Control.Feedback type="invalid">
              {errors.email?.message}
            </Form.Control.Feedback>
          </Form.Group>
          {/* password input */}
          <Form.Group className='mb-3'>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"
              {...register("password", { required: true })}
              isInvalid={errors.password?.message ? true : false} />
            <Form.Control.Feedback type="invalid">
              {errors.password?.message}
            </Form.Control.Feedback>
          </Form.Group>
          {/*confirm password input */}
          <Form.Group className='mb-3'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="confirm Password"
              {...register("confirmPassword", { required: true })}
              isInvalid={errors.confirmPassword?.message ? true : false} />
            <Form.Control.Feedback type="invalid">
              {errors.confirmPassword?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>

  )
}

export default Register