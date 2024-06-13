import { Button, Col, Form, Row, Alert } from 'react-bootstrap';
import { signInSchema, signInType } from "@validations/signInValidation"
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import InputForm from '@components/form/InputForm';
import { useSearchParams } from 'react-router-dom';


const Login = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { handleSubmit, register, formState: { errors }, } = useForm<signInType>(
    {
      resolver: zodResolver(signInSchema),
      mode: "onChange"
    }
  )

  const submitForm: SubmitHandler<signInType> = (data) => {
    console.log(data)
  }

  return (
    <Row>

      <Col md={{ span: 6, offset: 3 }}>

        {searchParams.get("message") === "account_created"
          &&
          (<Alert variant='success'>
            your account is created successfully please login in </Alert>
          )
        }
        <h3>Login Page</h3>

        <Form onSubmit={handleSubmit(submitForm)}>

          <InputForm
            register={register}
            Placeholder='Email Address'
            label="Email Address"
            name={'email'}
            error={errors.email?.message}
          />
          <InputForm
            register={register}
            Placeholder='Password'
            label="Password"
            name='password'
            error={errors.password?.message}
            type='password'
          />

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  )
}

export default Login